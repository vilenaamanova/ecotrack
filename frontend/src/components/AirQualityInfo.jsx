 import React from "react";
 
 const AirQualityInfo = ({ data }) => {
    if (!data) return <p>Данные о качестве воздуха отсутствуют.</p>;
  
    return (
      <div>
        <h3 className="text-lg font-semibold">Качество воздуха</h3>
        <p>Индекс AQI: {data.aqi}</p>
        <p>Уровень: {data.level}</p>
      </div>
    );
  }

  export default AirQualityInfo;