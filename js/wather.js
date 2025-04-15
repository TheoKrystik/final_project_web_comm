document.addEventListener('DOMContentLoaded', function() {
  const weatherTemp = document.querySelector('.weather-temp');
  const weatherDesc = document.querySelector('.weather-desc');
  const weatherIcon = document.querySelector('.weather-icon');

  const apiKey = '4f4dd2de99bf4cdfb8301831251504'; 
  const city = 'Cancun';

  async function fetchWeather() {
      try {
          const response = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
          );

          if (!response.ok) {
              throw new Error('Weather data not available');
          }

          const data = await response.json();
          weatherTemp.textContent = `${Math.round(data.current.temp_c)}°C`;
          weatherDesc.textContent = data.current.condition.text;
          weatherIcon.innerHTML = `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;

      } catch (error) {
          console.error('Error:', error);
          weatherTemp.textContent = '25°C';
          weatherDesc.textContent = 'Sunny';
          weatherIcon.innerHTML = '<i class="fas fa-sun"></i>';
      }
  }
  fetchWeather();

  setInterval(fetchWeather, 15 * 60 * 1000);
});