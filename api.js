const API_KEY = "8ac350204905067c4f9414833125d712";
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
