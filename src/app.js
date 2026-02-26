app.use(express.static('public'));
const db = require('./config/db'); 
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Сначала настройки безопасности и парсинга
app.use(cors());
app.use(express.json());

// 2. Раздача статических файлов (твои index.html, style.css, app.js из папки public)
// Теперь при заходе на http://localhost:3000/ будет открываться твой фронтенд


// 3. API Маршруты (теперь фронтенд с API_URL = '/api' достучится сюда)
app.get(['/api', '/api/'], (req, res) => {
  res.json({ 
    message: "MatchMatch API на связи! 🏸",
    status: "Ready to play"
  });
});






// Дополнительный тестовый маршрут для регистрации (задел на будущее)
app.post('/api/players/register', async (req, res) => {
  console.log('Данные регистрации:', req.body);
  res.status(201).json({ message: "Запрос получен, скоро настроим сохранение в БД" });
});

// 4. Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  console.log(`📂 Фронтенд доступен по адресу: http://localhost:${PORT}`);
  console.log(`🔌 API доступно по адресу: http://localhost:${PORT}/api`);
});