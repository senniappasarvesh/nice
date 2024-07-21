import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapSearch() {
  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    fetch('/api/plantings')
      .then(response => response.json())
      .then(data => setPlantings(data));
  }, []);

  return (
    <div className="map-search">
      <h2>Find Plantings Near You</h2>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {plantings.map(planting => (
          <Marker key={planting.id} position={[planting.lat, planting.lng]}>
            <Popup>
              {planting.name} <br /> {planting.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapSearch;