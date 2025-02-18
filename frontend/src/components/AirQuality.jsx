const AirQualityCard = ({ quality }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Качество воздуха</h2>
        <p className="text-gray-700">{quality}</p>
      </div>
    );
  }

export default AirQualityCard;