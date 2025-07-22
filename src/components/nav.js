// import React from 'react';
// import '../styles/nav.css';

// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar">
      
//        <img
//           src={logo}
//           alt="Yucca Logo"     style={{ height: '40px', width: 'auto', marginRight: '100px' }}
//         />
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><a href="/services">Services</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

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




// import React from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import logo from '../images/logo.png'
// const Navco = () => {
//   return (
//     <Navbar bg="light" expand="lg" sticky="top">
//       <Container>
//         {/* Logo and Brand */}
//         <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//           <img
//             src={logo}
//             alt="Logo"
//             width="40"
//             height="40"
//             className="d-inline-block align-top me-2"
//           />
//           <span className="fw-bold">MyWebsite</span>
//         </Navbar.Brand>

//         {/* Mobile Toggle */}
//         <Navbar.Toggle aria-controls="main-navbar" />
//         <Navbar.Collapse id="main-navbar">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>

//             <NavDropdown title="About" id="about-dropdown">
//               <NavDropdown.Item as={Link} to="/story">Our Story</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/products">Products</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/partners">Our Partners</NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link as={Link} to="/services">Services</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navco;