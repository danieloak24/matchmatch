const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Правильный путь к статике
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// API статус
app.get('/api/status', (req, res) => {
  res.json({ message: "Бэкенд MatchMatch онлайн! 🏸", status: "Ready to play" });
});

// Исправленный маршрут для всех остальных запросов
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});