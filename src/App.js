import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact'
import Story from './components/story'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <div> <Footer /> </div>
    </Router>
  );
}

export default App;





