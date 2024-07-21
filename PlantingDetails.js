import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PlantingDetails() {
  const { id } = useParams();
  const [planting, setPlanting] = useState(null);

  useEffect(() => {
    fetch(`/api/plantings/${id}`)
      .then(response => response.json())
      .then(data => setPlanting(data));
  }, [id]);

  if (!planting) return <div>Loading...</div>;

  return (
    <div className="planting-details">
      <h2>{planting.name}</h2>
      <p>Type: {planting.type}</p>
      <p>Location: {planting.location}</p>
      <p>Description: {planting.description}</p>
      <p>Likes: {planting.likes}</p>
      <p>Reviews:</p>
      <ul>
        {planting.reviews.map(review => (
          <li key={review.id}>{review.comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlantingDetails;