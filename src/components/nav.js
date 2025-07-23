import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';





const NavbarComponent = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <Link to="/">
          <img
            src={logo}
            alt="Yucca Logo"
            style={styles.logo}
          />
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 40px',
    backgroundColor: '#E0EAE2',  // your greenish brand color or any color you prefer
    color: '#366000',
    justifyContent: 'space-between',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    fontWeight:'bolder',
  },
  logoContainer: {
    flexShrink: 0,
  },
  logo: {
    height: '80px',
    width: 'auto',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    margin: 0,
    padding: 0,
    
   
  },
  link: {
    color: '#366000',
    textDecoration: 'none',
    fontWeight: 'bolder',
    fontSize: '16px',
  },
};

export default NavbarComponent;



