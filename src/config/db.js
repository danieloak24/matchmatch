const { Pool } = require('pg');
require('dotenv').config();

// Создаем пул соединений, используя данные из файла .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Проверка подключения
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Ошибка подключения к базе данных:', err.stack);
  } else {
    console.log('✅ База данных подключена успешно!');
  }
});

module.exports = pool;