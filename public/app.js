const API_URL = '/api'; // Относительный путь

async function checkStatus() {
    try {
        // Убедись, что здесь нет лишних точек или слэшей
        const res = await fetch(`${API_URL}/status`);
        const data = await res.json();
        
        document.getElementById('status').innerText = '✅ ' + data.message;
        document.getElementById('status').style.color = '#00ff00';
    } catch (err) {
        console.error("Ошибка связи:", err);
        document.getElementById('status').innerText = '❌ Сервер недоступен';
        document.getElementById('status').style.color = '#ff4d4d';
    }
}

checkStatus();


