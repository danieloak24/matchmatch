/*

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
});*/

const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./config/db'); // Тот самый файл с mysql2
const app = express();

app.use(cors());
app.use(express.json());

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// 1. API Статус
app.get('/api/status', (req, res) => {
  res.json({ message: "Бэкенд онлайн! 🏸" });
});

// 2. НОВЫЙ РОУТ: Регистрация игрока
app.post('/api/register', async (req, res) => {
    const { name, phone, level } = req.body;
    
    try {
        const [result] = await db.execute(
            'INSERT INTO players (name, phone, level) VALUES (?, ?, ?)',
            [name, phone, level]
        );
        res.status(201).json({ message: 'Вы успешно записаны!', id: result.insertId });
    } catch (error) {
        console.error('Ошибка БД:', error);
        res.status(500).json({ error: 'Ошибка при сохранении данных' });
    }
});

// 3. Главная страница (явно прописываем путь)
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// 4. Ловушка для всех остальных путей (404) — Исправленный синтаксис
app.get('/:any*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Сервер работает на порту ${PORT}`);
    console.log(`📂 Ищу файлы в: ${publicPath}`);
});