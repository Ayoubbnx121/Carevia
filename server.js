const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = twilio(accountSid, authToken);

const otps = {};

// إرسال OTP
app.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  otps[phone] = { code, expires: Date.now() + 5 * 60 * 1000 };

  try {
    await client.messages.create({
      body: `كود التحقق الخاص بك: ${code}`,
      from: twilioNumber,
      to: phone
    });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// التحقق من OTP
app.post('/verify-otp', (req, res) => {
  const { phone, code } = req.body;
  const record = otps[phone];

  if (!record) return res.json({ success: false, message: "أرسل الكود أولاً" });
  if (Date.now() > record.expires) {
    delete otps[phone];
    return res.json({ success: false, message: "انتهت صلاحية الكود" });
  }
  if (record.code === code) {
    delete otps[phone];
    return res.json({ success: true });
  }
  res.json({ success: false, message: "الكود خاطئ" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
