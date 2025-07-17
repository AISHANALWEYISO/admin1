// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Nav from './components/nav';
// import Home from './components/Home';
// import About from './components/About';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dummy page components – replace with your actual components
const Home = () => <h2>Home Page</h2>;
const OurStory = () => <h2>Our Story</h2>;
const OurTeam = () => <h2>Our Team</h2>;
const Products = () => <h2>Products</h2>;
const OurPartners = () => <h2>Our Partners</h2>;
const Services = () => <h2>Services</h2>;
const ContactUs = () => <h2>Contact Us</h2>;

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







