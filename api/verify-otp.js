const otps = {};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { phone, code } = req.body;
  const record = otps[phone];
  if (!record) return res.json({ success: false, message: 'أرسل الكود أولاً' });
  if (Date.now() > record.expires) { delete otps[phone]; return res.json({ success: false, message: 'انتهت صلاحية الكود' }); }
  if (record.code === code) { delete otps[phone]; return res.json({ success: true }); }
  res.json({ success: false, message: 'الكود خاطئ' });
}
