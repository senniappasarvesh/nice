import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddPlanting from './components/AddPlanting';
import PlantingDetails from './components/PlantingDetails';
import MapSearch from './components/MapSearch';
import Reviews from './components/Reviews';
import Profile from './components/Profile';
import Settings from './components/Settings';
import About from './components/About';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Help from './components/Help';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-planting" element={<AddPlanting />} />
          <Route path="/planting/:id" element={<PlantingDetails />} />
          <Route path="/map-search" element={<MapSearch />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help