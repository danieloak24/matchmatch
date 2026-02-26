const API_URL = 'http://matchmatch.org/api'; // Замени на свой домен или IP

async function checkStatus() {
    try {
        const res = await fetch(`${API_URL}/`);
        const data = await res.json();
        document.getElementById('status').innerText = '✅ Сервер онлайн: ' + data.message;
        document.getElementById('status').style.color = '#00ff00';
    } catch (err) {
        document.getElementById('status').innerText = '❌ Сервер недоступен';
        document.getElementById('status').style.color = '#ff4d4d';
    }
}

checkStatus();