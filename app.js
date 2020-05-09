async function getWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=93c3061ff1c1e94113e2b27dd8cb1a86",
    {
      mode: "cors",
    }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(weatherData.weather[0].main);
  console.log(weatherData.weather[0].description);
  console.log(weatherData.wind.speed);
  const cloudLevelDescription=weatherData.weather[0].description
  const cloudLevel=weatherData.weather[0].main
  const windspeed=weatherData.wind.speed
  const temperature = weatherData.main.temp;
  temperatureCelcius(temperature);
}

function temperatureCelcius(temperatureCelcius) {
  const celcius = temperatureCelcius - 273.15;
  console.log(celcius.toFixed(2));
}

getWeather().catch((err) => {
  console.error(err);
});
