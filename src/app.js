/*const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// 1. Указываем путь к папке public (она на уровень выше src)
const publicPath = path.join(__dirname, '../public');

// 2. Раздаем статику
app.use(express.static(publicPath));

// 3. API статус
app.get('/api/status', (req, res) => {
  res.json({ 
    message: "Бэкенд MatchMatch онлайн! 🏸", 
    status: "Ready to play" 
  });
});

// 4. Вместо '*' используем '/' для главной, статика остальное подхватит сама
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});*/
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
});