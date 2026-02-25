const db = require('./config/db'); // Добавь это в начало файла
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Настройки
app.use(cors());
app.use(express.json()); // Чтобы сервер понимал JSON в запросах

// Тестовый маршрут
app.get('/', (req, res) => {
  res.json({ 
    message: "MatchMatch API работает локально! 🏸",
    status: "Ready to play"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер MatchMatch запущен на http://localhost:${PORT}`);
});