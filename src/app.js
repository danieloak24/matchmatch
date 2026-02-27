/*
const express = require('express');
const path = require('path');
const app = express();

// Указываем путь к папке public (она на уровень выше src)
const publicPath = path.join(__dirname, '../public');

// 1. Раздаем статические файлы
app.use(express.static(publicPath));

// 2. Главный маршрут, который принудительно отдает index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Запускаем на порту 3000 (который ждет Nginx)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Тестовый запуск: дизайн должен быть доступен на порту ${PORT}`);
    console.log(`📂 Ищу файлы в: ${publicPath}`);
});*/

const express = require('express');
const path = require('path');
const cors = require('cors'); // Вернем для безопасности запросов
const app = express();

app.use(cors());
app.use(express.json());

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// Возвращаем API статус, чтобы галочка на сайте стала зеленой ✅
app.get('/api/status', (req, res) => {
  res.json({ 
    message: "Бэкенд MatchMatch онлайн! 🏸", 
    status: "Ready to play" 
  });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Сервер работает на порту ${PORT}`);
});