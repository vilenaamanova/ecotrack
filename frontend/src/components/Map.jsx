import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ onSelectCity }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedPosition([lat, lng]);
        onSelectCity({ lat, lng });
      },
    });
    return null;
  }

  return (
    <MapContainer
      center={[55.7558, 37.6176]}
      zoom={5}
      className="h-screen w-full absolute top-0 left-0 z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <MapClickHandler />

      {selectedPosition && (
        <Marker position={selectedPosition}>
          <Popup>Выбранная точка</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
