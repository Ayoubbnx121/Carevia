const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carevia_db'
});

app.post('/api/register', async (req, res) => {
  try {
    const { first_name, last_name, birth_date, email, password } = req.body;

    if (!first_name || !last_name || !birth_date || !email || !password) {
      return res.status(400).json({ message: 'جميع الحقول مطلوبة' });
    }

    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'البريد الإلكتروني مستخدم بالفعل' });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      'INSERT INTO users (first_name, last_name, birth_date, email, password_hash) VALUES (?, ?, ?, ?, ?)',
      [first_name, last_name, birth_date, email, password_hash]
    );

    res.json({
      message: 'تم إنشاء الحساب بنجاح',
      user: {
        id: result.insertId,
        first_name,
        last_name,
        email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في السيرفر' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'البريد أو كلمة المرور غير صحيحين' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.status(401).json({ message: 'البريد أو كلمة المرور غير صحيحين' });
    }

    res.json({
      message: 'تم تسجيل الدخول بنجاح',
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في السيرفر' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
