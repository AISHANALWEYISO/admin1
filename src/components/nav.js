import React from 'react';
import '../styles/nav.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      
       <img
          src={logo}
          alt="Yucca Logo"     style={{ height: '40px', width: 'auto', marginRight: '100px' }}
        />
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

