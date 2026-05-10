/* CareVia — i18n helpers */


(function(){
  // =====================================================
  // CAREVIA EMAILJS SETUP
  // 1. روح على https://www.emailjs.com وسجل حساب مجاني
  // 2. ربط Gmail ديالك (carevia.maroc@gmail.com) كـ Email Service
  //    واحفظ Service ID وحطه هنا بدل 'carevia_service'
  // 3. زيد Template جديد ولقق HTML فيه، احفظ Template ID
  //    وحطه هنا بدل 'carevia_join_template'
  // 4. من Account > API Keys، انسخ Public Key وحطه هنا
  // =====================================================
  const EMAILJS_PUBLIC_KEY  = 'HjLGrrx1T_SGtczbT';
  const EMAILJS_SERVICE_ID  = 'service_avdmeq8';
  const EMAILJS_TEMPLATE_ID = 'template_3u3udy4';

  if(typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  // Override the send function with correct IDs
  window._cvSendJoinEmail = async function({ appId, data, htmlBody, cvFileName, selfieFileName }) {
    if(typeof emailjs === 'undefined') return;
    const statusLabel = data.currentStatus==='student' ? 'طالب/ة' : data.currentStatus==='working' ? 'موظف/ة' : 'أخرى';
    const jobTypeLabel = data.jobType==='main' ? 'خدمة رئيسية' : 'Part-time';
    return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: 'carevia.maroc@gmail.com',
      app_id: appId,
      full_name: `${data.firstName} ${data.lastName}`,
      applicant_email: data.email,
      applicant_phone: data.phone,
      applicant_city: data.city,
      applicant_status: statusLabel,
      job_type: jobTypeLabel,
      cv_file: cvFileName,
      selfie_file: selfieFileName,
      html_content: htmlBody
    });
  };
})();
