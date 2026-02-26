const db = require('./config/db'); 
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Настройки парсинга и доступа
app.use(cors());
app.use(express.json());

// 2. ПОДКЛЮЧАЕМ ДИЗАЙН (Статика)
// Эта строка заставляет Express искать index.html в папке public 
// и показывать его на главной странице (matchmatch.org)
app.use(express.static('public'));

// 3. API МАРШРУТЫ
// Мы меняем путь на /api/status, чтобы он не конфликтовал с дизайном
app.get('/api/status', (req, res) => {
  res.json({ 
    message: "Бэкенд MatchMatch онлайн! 🏸",
    status: "Ready to play"
  });
});

// Пример маршрута для будущей регистрации
app.post('/api/players/register', (req, res) => {
  res.json({ message: "Метод регистрации готов к настройке" });
});

// 4. Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});