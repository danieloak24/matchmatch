const db = require('./config/db'); 
const express = require('express');
const cors = require('cors');
const path = require('path'); // Добавили этот модуль для работы с путями
require('dotenv').config();

const app = express();

// 1. Настройки парсинга и доступа
app.use(cors());
app.use(express.json());

// 2. ПОДКЛЮЧАЕМ ДИЗАЙН (Статика)
// Используем __dirname, чтобы точно указать путь на уровень выше от папки src
app.use(express.static(path.join(__dirname, '../public')));

// 3. API МАРШРУТЫ
app.get('/api/status', (req, res) => {
  res.json({ 
    message: "Бэкенд MatchMatch онлайн! 🏸",
    status: "Ready to play"
  });
});

// Маршрут для регистрации (пока заглушка)
app.post('/api/players/register', (req, res) => {
  res.json({ message: "Метод регистрации готов к настройке" });
});

// 4. Если пользователь зашел на любой другой маршрут, отдаем index.html
// Это гарантирует, что дизайн подгрузится всегда
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 5. Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});