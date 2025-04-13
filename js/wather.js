fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun,mx&units=metric&appid=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    document.getElementById('weather').textContent = `🌤️ ${temp}°C`;
  });
