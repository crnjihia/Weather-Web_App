import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

const Weather = {
  fetchWeather: async (city) => {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = response.data;
    return {
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      wind: data.wind.speed,
      humidity: data.main.humidity,
    };
  },
};

export default Weather;
