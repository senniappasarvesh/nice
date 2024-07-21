import React, { useState } from 'react';

function AddPlanting() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlanting = { name, type, location, description };

    fetch('/api/plantings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlanting),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Add any additional logic after successful addition of a planting
      });
  };

  return (
    <div className="add-planting">
      <h2>Add Planting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Type:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="