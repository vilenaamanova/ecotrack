import React from "react";

const WeatherInfo = ({ data }) => {
    if (!data) return <p>Данные о погоде отсутствуют.</p>;
  
    return (
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Погода</h3>
        <p>Температура: {data.temperature}°C</p>
        <p>Влажность: {data.humidity}%</p>
        <p>Ветер: {data.windSpeed} м/с</p>
      </div>
    );
  }

export default WeatherInfo;