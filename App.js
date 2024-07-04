import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = "8ac350204905067c4f9414833125d712";

const App = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = response.data;
      setForecast({
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        wind: data.wind.speed,
        humidity: data.main.humidity,
      });
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  return (
    <div className="weather-app">
      <div className="header">
        <input
          type="text"
          placeholder="Search for cities"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {forecast && (
        <div className="forecast">
          <div className="forecast-item">
            <h2>{forecast.city}</h2>
            <img src={forecast.icon} alt="weather icon" />
            <p>{forecast.description}</p>
            <h3>{forecast.temp}°C</h3>
          </div>
          <div className="forecast-item">
            <h3>Wind</h3>
            <p>{forecast.wind} km/h</p>
          </div>
          <div className="forecast-item">
            <h3>Humidity</h3>
            <p>{forecast.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
