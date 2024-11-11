import React from 'react';
import './index.css';  // Ensure your CSS is imported
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Content from './components/Content';
import Dashboard from './components/pages/Dashboard';
import User from './components/pages/User';

const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/slotbooking" element={<User />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
