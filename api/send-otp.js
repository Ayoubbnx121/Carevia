const twilio = require('twilio');

const client = twilio(process.env.TW_SID, process.env.TW_TOKEN);
const otps = {};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const phone = req.body.phone;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  otps[phone] = { code, expires: Date.now() + 300000 };
  try {
    await client.messages.create({ body: 'كود التحقق: ' + code, from: process.env.TW_NUMBER, to: phone });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
}
