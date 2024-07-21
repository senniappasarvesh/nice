import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Plantify</h2>
      <p>Your ultimate plant tracking and locating app.</p>
      <Link to="/register">Get Started</Link>
    </div>
  );
}

export default Home;