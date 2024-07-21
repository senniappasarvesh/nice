import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    fetch('/api/plantings')
      .then(response => response.json())
      .then(data => setPlantings(data));
  }, []);

  return (
    <div className="dashboard">
      <h2>My Plantings</h2>
      <ul>
        {plantings.map(planting => (
          <li key={planting.id}>
            <Link to={`/planting/${planting.id}`}>{planting.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-planting">Add New Planting</Link>
    </div>
  );
}

export default Dashboard;