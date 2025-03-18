// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul className='navbar-buttons'>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
