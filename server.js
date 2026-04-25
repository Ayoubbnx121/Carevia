const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
const app = express();

// Handle CORS manually
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

const accountSid = process.env.TW_SID;
const authToken = process.env.TW_TOKEN;
const twilioNumber = process.env.TW_NUMBER;
const client = twilio(accountSid, authToken);
const otps = {};

app.post('/send-otp', async (req, res) => {
  const phone = req.body.phone;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  otps[phone] = { code: code, expires: Date.now() + 300000 };
  try {
    await client.messages.create({ body: 'كود التحقق: ' + code, from: twilioNumber, to: phone });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

app.post('/verify-otp', (req, res) => {
  const phone = req.body.phone;
  const code = req.body.code;
  const record = otps[phone];
  if (!record) return res.json({ success: false, message: 'أرسل الكود أولاً' });
  if (Date.now() > record.expires) { delete otps[phone]; return res.json({ success: false, message: 'انتهت صلاحية الكود' }); }
  if (record.code === code) { delete otps[phone]; return res.json({ success: true }); }
  res.json({ success: false, message: 'الكود خاطئ' });
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
