function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('currentTime').textContent = timeString;
  }
  
  setInterval(updateClock, 1000); // Обновляем каждые 1000 мс (1 секунда)