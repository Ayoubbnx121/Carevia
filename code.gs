const SHEET_ID = '16AJppnFGDUdojgV55oyhu2UK60AGFHaMnSkBOssE6XQ';
const BOOKINGS_SHEET = 'Sheet1';
const JOIN_US_SHEET = 'JoinUs';
const CAREGIVERS_SHEET = 'Caregivers';
const TELEGRAM_BOT_TOKEN = '8215678024:AAHMtIp52vW_L0iYLbb21rBSOE1BTnp7CwU';
const TELEGRAM_CHAT_ID = '8785719461';
const BUSINESS_EMAIL = 'Carevia.maroc@gmail.com';
const BUSINESS_NAME = 'CareVia';
const LOGO_URL = 'https://raw.githubusercontent.com/Ayoubbnx121/Carevia/8ea8f0cd928dcb19861ab59f8313a29d3f6f6f71/logo.jpg';

// ================================================================
// doGet
// ================================================================
function doGet(e) {
  try {
    const action = (e && e.parameter && e.parameter.action) || '';
    if (action === 'getBookings')   return jsonOutput({ ok: true, bookings:   getBookingsData() });
    if (action === 'getJoinUs')     return jsonOutput({ ok: true, joinUs:     getJoinUsData() });
    if (action === 'getCaregivers') return jsonOutput({ ok: true, caregivers: getCaregiversData() });
    return jsonOutput({ ok: false, error: 'Unknown GET action' });
  } catch (error) {
    return jsonOutput({ ok: false, error: error.message || String(error) });
  }
}

// ================================================================
// doPost
// ================================================================
function doPost(e) {
  try {
    // ---- Telegram Webhook callback (زر Confirmer/Annuler) ----
    if (e && e.postData && e.postData.contents) {
      let parsed;
      try { parsed = JSON.parse(e.postData.contents); } catch(err) {}
      if (parsed && parsed.callback_query) {
        return handleTelegramCallback(parsed.callback_query);
      }
    }

    const data = parseIncomingData(e);

    // ---- تحديث status من admin panel ----
    if (data.action === 'updateBookingStatus') {
      return jsonOutput(updateBookingStatus(data.bookingId, data.status));
    }

    // ---- حفظ Join Us application ----
    if (data.type === 'job_application') {
      return jsonOutput(saveJoinUsApplication(data));
    }

    // ---- حفظ booking جديد ----
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(BOOKINGS_SHEET);
    if (!sheet) throw new Error('Bookings sheet not found: ' + BOOKINGS_SHEET);

    const bookingId = data.bookingId || ('CV-' + Date.now());
    const row = [
      bookingId,       // A Booking ID
      new Date(),      // B Created At
      data.fullName    || '', // C Full Name
      data.phone       || '', // D Phone
      data.city        || '', // E City
      data.service     || '', // F Service
      data.date        || '', // G Date
      Array.isArray(data.timeSlots) ? data.timeSlots.join(' | ') : (data.timeSlots || ''), // H Time Slots
      data.caregiver   || '', // I Caregiver
      data.hoursCount  || '', // J Hours Count
      data.pricePerHour|| '', // K Price Per Hour
      data.travelFee   || 0,  // L Travel Fee
      data.nightFee    || 0,  // M Night Fee
      data.weekendFee  || 0,  // N Weekend Fee
      data.discount    || 0,  // O Discount
      data.total       || 0,  // P Total
      data.paymentMethod||'', // Q Payment Method
      'en attente',           // R Status
      data.notes       || '', // S Notes
      data.email       || ''  // T Email
    ];

    sheet.appendRow(row);
    data.bookingId = bookingId;

    try { sendTelegramNotification(data); } catch (err) { Logger.log('Telegram error: ' + err); }
    try { sendBookingEmail(data); }        catch (err) { Logger.log('Email error: ' + err); }

    return jsonOutput({ ok: true, message: 'Booking saved' });

  } catch (error) {
    Logger.log('doPost error: ' + error.message);
    return jsonOutput({ ok: false, error: error.message || String(error) });
  }
}

// ================================================================
// Telegram Webhook — معالج الأزرار
// ================================================================
function handleTelegramCallback(callback) {
  const callbackId = callback.id;
  const data       = callback.data || '';
  const chatId     = callback.message.chat.id;
  const messageId  = callback.message.message_id;
  const oldText    = callback.message.text || '';

  // جاوب على Telegram باش ما يبقاش loading
  UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/answerCallbackQuery', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ callback_query_id: callbackId }),
    muteHttpExceptions: true
  });

  let bookingId, newStatus, emoji;

  if (data.startsWith('confirm_')) {
    bookingId = data.replace('confirm_', '');
    newStatus = 'confirmé';
    emoji     = '✅';
  } else if (data.startsWith('cancel_')) {
    bookingId = data.replace('cancel_', '');
    newStatus = 'annulé';
    emoji     = '❌';
  } else {
    return jsonOutput({ ok: true });
  }

  // بدل الـ status + سيفط إيميل تأكيد
  updateBookingStatus(bookingId, newStatus);

  // بدل الرسالة في Telegram باش يبان القرار ويحيد الأزرار
  const newText = oldText + '\n\n' + emoji + ' تم تغيير الحالة إلى: ' + newStatus;
  UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/editMessageText', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id:      chatId,
      message_id:   messageId,
      text:         newText,
      reply_markup: JSON.stringify({ inline_keyboard: [] }) // حيد الأزرار
    }),
    muteHttpExceptions: true
  });

  return jsonOutput({ ok: true });
}

// ================================================================
// تفعيل Telegram Webhook — شغلها مرة وحدة بعد كل deploy
// ================================================================
function setTelegramWebhook() {
  // ⚠️ حط هنا URL ديال Apps Script بعد كل deploy جديد
  const WEBHOOK_URL = 'YOUR_WEB_APP_URL_HERE';

  const response = UrlFetchApp.fetch(
    'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/setWebhook',
    {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ url: WEBHOOK_URL }),
      muteHttpExceptions: true
    }
  );
  Logger.log('Webhook response: ' + response.getContentText());
}

// ================================================================
// updateBookingStatus + إيميل تأكيد فاش confirmé
// ================================================================
function updateBookingStatus(bookingId, newStatus) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(BOOKINGS_SHEET);
  if (!sheet) return { ok: false, error: 'Bookings sheet not found' };

  const rows = sheet.getDataRange().getValues();

  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]).trim() === String(bookingId).trim()) {
      sheet.getRange(i + 1, 18).setValue(newStatus);

      const currentStatus = String(rows[i][17] || '').toLowerCase().trim();
      if (String(newStatus).toLowerCase().trim() === 'confirmé' && currentStatus !== 'confirmé') {
        try {
          sendConfirmationEmail({
            bookingId:    String(rows[i][0]  || ''),
            fullName:     String(rows[i][2]  || ''),
            email:        String(rows[i][19] || ''),
            phone:        String(rows[i][3]  || ''),
            city:         String(rows[i][4]  || ''),
            service:      String(rows[i][5]  || ''),
            date:         String(rows[i][6]  || ''),
            timeSlots:    String(rows[i][7]  || ''),
            caregiver:    String(rows[i][8]  || ''),
            paymentMethod:String(rows[i][16] || ''),
            total:        rows[i][15] || 0
          });
        } catch (emailErr) {
          Logger.log('Confirmation email error: ' + emailErr.message);
        }
      }

      return { ok: true, message: 'Status updated' };
    }
  }

  return { ok: false, error: 'Booking ID not found' };
}
// ================================================================
// saveJoinUsApplication — حفظ طلب Join Us في sheet JoinUs
// ================================================================
function saveJoinUsApplication(data) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(JOIN_US_SHEET);
  if (!sheet) return { ok: false, error: 'JoinUs sheet not found' };

  const appId = data.bookingId || ('JOB-' + Date.now());
  let extra = {};
  try { extra = JSON.parse(data.notes || '{}'); } catch(e) {}

  const row = [
    appId,                          // A ID
    data.fullName || '',            // B First+Last Name
    '',                             // C Last Name (مدموج في fullName)
    extra.birthDate || '',          // D Birth Date
    data.city || '',                // E City
    extra.address || '',            // F Address
    data.phone || '',               // G Phone
    data.email || '',               // H Email
    extra.educationLevel || '',     // I Education Level
    extra.diplomas || '',           // J Diplomas
    extra.certificates || '',       // K Certificates
    extra.formations || '',         // L Formations
    extra.cvFileName || '',         // M CV File Name
    extra.selfieFileName || '',     // N Selfie File Name
    'en attente',                   // O Status
    new Date()                      // P Created At
  ];

  sheet.appendRow(row);

  // إيميل تأكيد للمتقدم
  try { sendJoinUsEmail(data, extra, appId); } catch(err) { Logger.log('JoinUs email error: ' + err); }

  return { ok: true, message: 'Application saved', appId: appId };
}

// ================================================================
// EMAIL: تأكيد استلام طلب Join Us
// ================================================================
function sendJoinUsEmail(data, extra, appId) {
  if (!data.email) return;

  const jobTypeLabel = extra.jobType === 'main' ? 'Temps plein' : 'Part-time';
  const statusLabel  = extra.currentStatus === 'student' ? 'Étudiant(e)' : extra.currentStatus === 'working' ? 'En activité' : 'Autre';

  const htmlBody =
    '<div style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">' +
    '<div style="max-width:640px;margin:0 auto;padding:30px 15px;">' +
    '<div style="background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.08);">' +
    '<div style="background:linear-gradient(135deg,#0f5873,#76b84f);padding:28px 24px;text-align:center;">' +
    '<img src="' + LOGO_URL + '" alt="CareVia" style="max-width:140px;height:auto;display:block;margin:0 auto 12px auto;border-radius:12px;">' +
    '<h1 style="margin:0;color:#ffffff;font-size:22px;">🧑‍💼 Candidature reçue</h1>' +
    '<p style="margin:10px 0 0 0;color:#eefbf3;font-size:14px;">Merci de votre intérêt pour ' + BUSINESS_NAME + '</p>' +
    '</div>' +
    '<div style="padding:28px 24px;color:#1f2937;">' +
    '<p style="margin:0 0 18px 0;font-size:16px;">Bonjour <strong>' + escapeHtml(data.fullName || '') + '</strong>,</p>' +
    '<p style="margin:0 0 22px 0;font-size:15px;line-height:1.7;color:#374151;">Nous avons bien recu votre candidature. Notre equipe va l\'etudier et vous repondra dans les plus brefs delais.</p>' +
    '<div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:18px 18px 8px 18px;">' +
    buildInfoRow('N° candidature', appId) +
    buildInfoRow('Nom', data.fullName || '-') +
    buildInfoRow('Téléphone', data.phone || '-') +
    buildInfoRow('Ville', data.city || '-') +
    buildInfoRow('Type de poste', jobTypeLabel) +
    buildInfoRow('Situation actuelle', statusLabel) +
    buildInfoRow('Statut', '🕐 En cours d\'examen') +
    '</div>' +
    '<div style="margin-top:22px;padding:16px 18px;background:#ecfeff;border-left:4px solid #0f5873;border-radius:10px;">' +
    '<p style="margin:0;font-size:14px;line-height:1.7;color:#0f172a;">Pour toute question, n\'hesitez pas à nous contacter.</p>' +
    '</div>' +
    '<div style="margin-top:26px;text-align:center;">' +
    '<a href="mailto:' + BUSINESS_EMAIL + '" style="display:inline-block;background:#0f5873;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:10px;font-size:14px;font-weight:bold;">Nous contacter</a>' +
    '</div></div>' +
    '<div style="border-top:1px solid #e5e7eb;padding:18px 24px;background:#fafafa;text-align:center;">' +
    '<p style="margin:0;font-size:13px;color:#6b7280;">' + BUSINESS_NAME + ' · ' + BUSINESS_EMAIL + '</p>' +
    '</div></div></div></div>';

  MailApp.sendEmail({
    to: data.email,
    subject: '🧑‍💼 Candidature reçue - ' + BUSINESS_NAME,
    body: 'Votre candidature ' + appId + ' a bien été reçue. Nous vous répondrons prochainement.',
    htmlBody: htmlBody,
    name: BUSINESS_NAME,
    replyTo: BUSINESS_EMAIL
  });
}

// ================================================================
// TELEGRAM NOTIFICATION + أزرار
// ================================================================
function sendTelegramNotification(data) {
  if (!data) return;
  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === 'YOUR_TELEGRAM_BOT_TOKEN') return;
  if (!TELEGRAM_CHAT_ID   || TELEGRAM_CHAT_ID   === 'YOUR_TELEGRAM_CHAT_ID')   return;

  const message =
    '📌 حجز جديد فـ CareVia\n\n' +
    '👤 الاسم: '          + (data.fullName      || '-') + '\n' +
    '📧 الإيميل: '        + (data.email         || '-') + '\n' +
    '📞 الهاتف: '         + (data.phone         || '-') + '\n' +
    '🏙️ المدينة: '        + (data.city          || '-') + '\n' +
    '🩺 الخدمة: '         + (data.service       || '-') + '\n' +
    '📅 التاريخ: '        + (data.date          || '-') + '\n' +
    '⏰ الساعات: '        + (Array.isArray(data.timeSlots) ? data.timeSlots.join(' | ') : (data.timeSlots || '-')) + '\n' +
    '👨‍⚕️ مقدم الرعاية: ' + (data.caregiver     || '-') + '\n' +
    '💳 طريقة الدفع: '   + (data.paymentMethod || '-') + '\n' +
    '💰 المجموع: '        + (data.total         || 0)   + ' MAD\n' +
    '🆔 Booking ID: '     + (data.bookingId     || '');

  const keyboard = {
    inline_keyboard: [[
      { text: '✅ Confirmer', callback_data: 'confirm_' + data.bookingId },
      { text: '❌ Annuler',   callback_data: 'cancel_'  + data.bookingId }
    ]]
  };

  UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id:      TELEGRAM_CHAT_ID,
      text:         message,
      reply_markup: keyboard
    }),
    muteHttpExceptions: true
  });
}

// ================================================================
// EMAIL: استلام الطلب
// ================================================================
function sendBookingEmail(data) {
  if (!data.email) return;

  const bookingId = data.bookingId || ('CV-' + Date.now());
  const timeSlotsText = Array.isArray(data.timeSlots) ? data.timeSlots.join(' | ') : (data.timeSlots || '-');

  const htmlBody =
    '<div style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">' +
    '<div style="max-width:640px;margin:0 auto;padding:30px 15px;">' +
    '<div style="background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.08);">' +
    '<div style="background:linear-gradient(135deg,#0f5873,#76b84f);padding:28px 24px;text-align:center;">' +
    '<img src="' + LOGO_URL + '" alt="CareVia" style="max-width:140px;height:auto;display:block;margin:0 auto 12px auto;border-radius:12px;">' +
    '<h1 style="margin:0;color:#ffffff;font-size:24px;">Votre demande a bien été reçue</h1>' +
    '<p style="margin:10px 0 0 0;color:#eefbf3;font-size:14px;">Merci de votre confiance en ' + BUSINESS_NAME + '</p>' +
    '</div>' +
    '<div style="padding:28px 24px;color:#1f2937;">' +
    '<p style="margin:0 0 18px 0;font-size:16px;">Bonjour <strong>' + escapeHtml(data.fullName || 'Client') + '</strong>,</p>' +
    '<p style="margin:0 0 22px 0;font-size:15px;line-height:1.7;color:#374151;">Nous avons bien reçu votre demande. Voici un récapitulatif complet de votre réservation.</p>' +
    '<div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:18px 18px 8px 18px;">' +
    buildInfoRow('Booking ID', bookingId) +
    buildInfoRow('Nom', data.fullName || '-') +
    buildInfoRow('Téléphone', data.phone || '-') +
    buildInfoRow('Ville', data.city || '-') +
    buildInfoRow('Service', data.service || '-') +
    buildInfoRow('Date', data.date || '-') +
    buildInfoRow('Heure(s)', timeSlotsText) +
    buildInfoRow('Caregiver', data.caregiver || '-') +
    buildInfoRow('Méthode de paiement', data.paymentMethod || '-') +
    buildInfoRow('Total', (data.total || 0) + ' MAD') +
    buildInfoRow('Statut', 'En attente') +
    '</div>' +
    '<div style="margin-top:22px;padding:16px 18px;background:#ecfeff;border-left:4px solid #0f5873;border-radius:10px;">' +
    '<p style="margin:0;font-size:14px;line-height:1.7;color:#0f172a;">Notre équipe traitera votre demande dans les plus brefs délais.</p>' +
    '</div>' +
    '<div style="margin-top:26px;text-align:center;">' +
    '<a href="mailto:' + BUSINESS_EMAIL + '" style="display:inline-block;background:#0f5873;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:10px;font-size:14px;font-weight:bold;">Nous contacter</a>' +
    '</div></div>' +
    '<div style="border-top:1px solid #e5e7eb;padding:18px 24px;background:#fafafa;text-align:center;">' +
    '<p style="margin:0;font-size:13px;color:#6b7280;">' + BUSINESS_NAME + ' · ' + BUSINESS_EMAIL + '</p>' +
    '</div></div></div></div>';

  MailApp.sendEmail({
    to: data.email,
    subject: 'Détails de votre demande - ' + BUSINESS_NAME,
    body: 'Votre demande a bien été reçue. Booking ID: ' + bookingId,
    htmlBody: htmlBody,
    name: BUSINESS_NAME,
    replyTo: BUSINESS_EMAIL
  });
}

// ================================================================
// EMAIL: تأكيد الطلب
// ================================================================
function sendConfirmationEmail(data) {
  if (!data.email) {
    Logger.log('No email for booking: ' + data.bookingId);
    return;
  }

  const timeSlotsText = Array.isArray(data.timeSlots) ? data.timeSlots.join(' | ') : (data.timeSlots || '-');

  const htmlBody =
    '<div style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">' +
    '<div style="max-width:640px;margin:0 auto;padding:30px 15px;">' +
    '<div style="background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.08);">' +
    '<div style="background:linear-gradient(135deg,#0f5873,#76b84f);padding:28px 24px;text-align:center;">' +
    '<img src="' + LOGO_URL + '" alt="CareVia" style="max-width:140px;height:auto;display:block;margin:0 auto 12px auto;border-radius:12px;">' +
    '<h1 style="margin:0;color:#ffffff;font-size:24px;">✅ Réservation Confirmée</h1>' +
    '<p style="margin:10px 0 0 0;color:#eefbf3;font-size:14px;">Merci de votre confiance en ' + BUSINESS_NAME + '</p>' +
    '</div>' +
    '<div style="padding:28px 24px;color:#1f2937;">' +
    '<p style="margin:0 0 18px 0;font-size:16px;">Bonjour <strong>' + escapeHtml(data.fullName || 'Client') + '</strong>,</p>' +
    '<p style="margin:0 0 22px 0;font-size:15px;line-height:1.7;color:#374151;">Votre réservation a été <strong style="color:#0f766e;">acceptée et confirmée</strong>.</p>' +
    '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:18px;margin-bottom:20px;text-align:center;">' +
    '<p style="margin:0;font-size:18px;font-weight:bold;color:#15803d;">🎉 Réservation Confirmée</p>' +
    '<p style="margin:8px 0 0 0;font-size:14px;color:#166534;">Booking ID: <strong>' + escapeHtml(data.bookingId || '-') + '</strong></p>' +
    '</div>' +
    '<div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:18px 18px 8px 18px;">' +
    buildInfoRow('Booking ID', data.bookingId || '-') +
    buildInfoRow('Nom', data.fullName || '-') +
    buildInfoRow('Téléphone', data.phone || '-') +
    buildInfoRow('Ville', data.city || '-') +
    buildInfoRow('Service', data.service || '-') +
    buildInfoRow('Date', data.date || '-') +
    buildInfoRow('Heure(s)', timeSlotsText) +
    buildInfoRow('Caregiver', data.caregiver || '-') +
    buildInfoRow('Méthode de paiement', data.paymentMethod || '-') +
    buildInfoRow('Total', (data.total || 0) + ' MAD') +
    buildInfoRow('Statut', '✅ Confirmé') +
    '</div>' +
    '<div style="margin-top:22px;padding:16px 18px;background:#ecfeff;border-left:4px solid #14b8a6;border-radius:10px;">' +
    '<p style="margin:0;font-size:14px;line-height:1.7;color:#0f172a;">Notre équipe sera présente à l\'heure convenue. Pour toute question, n\'hésitez pas à nous contacter.</p>' +
    '</div>' +
    '<div style="margin-top:26px;text-align:center;">' +
    '<a href="mailto:' + BUSINESS_EMAIL + '" style="display:inline-block;background:#0f5873;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:10px;font-size:14px;font-weight:bold;">Nous contacter</a>' +
    '</div></div>' +
    '<div style="border-top:1px solid #e5e7eb;padding:18px 24px;background:#fafafa;text-align:center;">' +
    '<p style="margin:0;font-size:13px;color:#6b7280;">' + BUSINESS_NAME + ' · ' + BUSINESS_EMAIL + '</p>' +
    '</div></div></div></div>';

  MailApp.sendEmail({
    to: data.email,
    subject: '✅ Votre réservation est confirmée - ' + BUSINESS_NAME,
    body: 'Votre réservation ' + (data.bookingId || '') + ' est confirmée.',
    htmlBody: htmlBody,
    name: BUSINESS_NAME,
    replyTo: BUSINESS_EMAIL
  });

  Logger.log('Confirmation email sent to: ' + data.email);
}

// ================================================================
// HELPERS
// ================================================================
function buildInfoRow(label, value) {
  return '<div style="padding:10px 0;border-bottom:1px solid #e5e7eb;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>' +
    '<td style="font-size:14px;color:#6b7280;width:42%;vertical-align:top;padding-right:10px;"><strong>' + escapeHtml(label) + '</strong></td>' +
    '<td style="font-size:14px;color:#111827;vertical-align:top;">' + escapeHtml(String(value || '-')) + '</td>' +
    '</tr></table></div>';
}

function escapeHtml(text) {
  return String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function parseIncomingData(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents) { try { return JSON.parse(e.postData.contents); } catch (err) {} }
  if (e.parameter && e.parameter.payload) { try { return JSON.parse(e.parameter.payload); } catch (err) {} }
  const p = e.parameter || {};
  return {
    action:        p.action || '',
    bookingId:     p.bookingId || ('CV-' + Date.now()),
    fullName:      p.fullName || '',
    email:         p.email || '',
    phone:         p.phone || '',
    city:          p.city || '',
    service:       p.service || '',
    date:          p.date || '',
    timeSlots:     p.timeSlots ? p.timeSlots.split(' | ') : [],
    caregiver:     p.caregiver || '',
    hoursCount:    p.hoursCount || '',
    pricePerHour:  p.pricePerHour || '',
    travelFee:     Number(p.travelFee  || 0),
    nightFee:      Number(p.nightFee   || 0),
    weekendFee:    Number(p.weekendFee || 0),
    discount:      Number(p.discount   || 0),
    total:         Number(p.total      || 0),
    paymentMethod: p.paymentMethod || '',
    notes:         p.notes  || '',
    status:        p.status || '',
    createdAt:     p.createdAt || new Date().toISOString()
  };
}

// ================================================================
// DATA GETTERS
// ================================================================
function getBookingsData() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(BOOKINGS_SHEET);
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];
  return rows.slice(1).map(function(row, index) {
    return {
      _rowNumber:    index + 2,
      bookingId:     row[0]  || '',
      createdAt:     row[1]  || '',
      fullName:      row[2]  || '',
      phone:         row[3]  || '',
      city:          row[4]  || '',
      service:       row[5]  || '',
      date:          row[6]  || '',
      timeSlots:     row[7]  || '',
      caregiver:     row[8]  || '',
      hoursCount:    row[9]  || '',
      pricePerHour:  row[10] || '',
      travelFee:     row[11] || 0,
      nightFee:      row[12] || 0,
      weekendFee:    row[13] || 0,
      discount:      row[14] || 0,
      total:         row[15] || 0,
      paymentMethod: row[16] || '',
      status:        row[17] || 'en attente',
      notes:         row[18] || '',
      email:         row[19] || ''
    };
  }).reverse();
}

function getJoinUsData() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(JOIN_US_SHEET);
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];
  return rows.slice(1).map(function(row, index) {
    return {
      _rowNumber:     index + 2,
      id:             row[0]  || '',
      firstName:      row[1]  || '',
      lastName:       row[2]  || '',
      birthDate:      row[3]  || '',
      city:           row[4]  || '',
      address:        row[5]  || '',
      phone:          row[6]  || '',
      email:          row[7]  || '',
      educationLevel: row[8]  || '',
      diplomas:       row[9]  || '',
      certificates:   row[10] || '',
      formations:     row[11] || '',
      cvUrl:          row[12] || '',
      documentsUrl:   row[13] || '',
      status:         row[14] || '',
      createdAt:      row[15] || ''
    };
  }).reverse();
}

function getCaregiversData() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(CAREGIVERS_SHEET);
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];
  return rows.slice(1).map(function(row, index) {
    return {
      _rowNumber:   index + 2,
      id:           row[0] || '',
      fullName:     row[1] || '',
      phone:        row[2] || '',
      email:        row[3] || '',
      city:         row[4] || '',
      services:     row[5] || '',
      availability: row[6] || '',
      notes:        row[7] || '',
      createdAt:    row[8] || ''
    };
  });
}

// ================================================================
// TESTS
// ================================================================
function testBookingEmail() {
  sendBookingEmail({
    fullName: 'Ayoub Test', email: 'ayoubabenyaich@gmail.com',
    phone: '0600000000', city: 'Tangier', service: 'Home Care',
    date: '2026-04-08', timeSlots: ['08:00 - 09:00', '09:00 - 10:00'],
    caregiver: 'Mohamed', paymentMethod: 'Cash', total: 160, bookingId: 'CV-TEST-001'
  });
}

function testConfirmationEmail() {
  sendConfirmationEmail({
    fullName: 'Ayoub Test', email: 'ayoubabenyaich@gmail.com',
    phone: '0600000000', city: 'Tangier', service: 'Home Care',
    date: '2026-04-08', timeSlots: '08:00 - 09:00 | 09:00 - 10:00',
    caregiver: 'Mohamed', paymentMethod: 'Cash', total: 160, bookingId: 'CV-TEST-001'
  });
}

function testTelegramNotification() {
  sendTelegramNotification({
    fullName: 'Ayoub Test', email: 'ayoubabenyaich@gmail.com',
    phone: '0600000000', city: 'Tangier', service: 'Home Care',
    date: '2026-04-08', timeSlots: ['08:00 - 09:00', '09:00 - 10:00'],
    caregiver: 'Mohamed', paymentMethod: 'Cash', total: 160, bookingId: 'CV-TEST-001'
  });
}
