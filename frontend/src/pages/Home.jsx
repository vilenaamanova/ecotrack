import React, { useState } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);

  const fetchWeatherAndAirQuality = async (lat, lon) => {
    try {
    const response = await fetch (
      `http://localhost:8000/fetch-weather-air-quality/?lat=${lat}&lon=${lon}`
    );
    if (!response.ok) {
      throw new Error("Ошибка при запросе данных");
    }
    const data = await response.json();
    console.log("Данные от бэкенда:", data); 

    setSelectedCity(`${data.weather.city} (${lat.toFixed(2)}, ${lon.toFixed(2)})`);
      setWeatherData({
        temperature: data.weather.temperature,
        feels_like: data.weather.feels_like,
        humidity: data.weather.humidity,
        pressure: data.weather.pressure,
        wind_speed: data.weather.wind_speed,
        visibility: data.weather.visibility,
        clouds: data.weather.clouds,
        precipitation: data.weather.precipitation,
        pr_description: data.weather.pr_description,
      });
      setAirQualityData({
        aqi: data.air_quality.aqi,
        co: data.air_quality.co,
        no: data.air_quality.no,
        no2: data.air_quality.no2,
        o3: data.air_quality.o3,
        pm10: data.air_quality.pm10,
        pm25: data.air_quality.pm25,
        so2: data.air_quality.so2,
        nh3: data.air_quality.nh3,
      });
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  const handleSelectCity = async (coords) => {
    await fetchWeatherAndAirQuality(coords.lat, coords.lng);
  };

  const handleSearch = async (query) => {
    const coords = { lat: 55.7558, lng: 37.6176 };
    await fetchWeatherAndAirQuality(coords.lat, coords.lng);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <div className="flex flex-row flex-grow overflow-hidden">
          <div className="w-72">
            <Sidebar
              city={selectedCity}
              weatherData={weatherData}
              airQualityData={airQualityData}
            />
          </div>
        <Map onSelectCity={handleSelectCity} />
      </div>
    </div>
  );
};

export default Home;
