// import React from 'react';
// import background from '../images/backgrd.jpeg';




// function Home() {
//   return (
//     <div
//       style={{
//         top:'-5 rem',
//         backgroundImage: `url(${background})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: '100% 100%',
//         backgroundPosition: 'center',
//         height: '100vh',  
//         width: '100vw',
//         margin: '0',
//         paddingTop:'3rem'
//       }}
//     >
//       <h1 style={{ fontSize: '3rem', marginBottom: '10px',color:'white' }}>Yucca Consulting Limited</h1>
//       <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '50px', color:'white' }}>
//         Cultivating a Sustainable World
//       </h2>
//        <p style={{ maxWidth: '600px', fontSize: '1.2rem',color:'white' , margin: '50px auto 0',textAlign:"center"}}>
//         Empowering Farmers. Growing Communities.<br></br>
//         we provide  agricultural support from crop management to market access, 
//         help smallholder farmers thrive .
//       </p>

//       <button
   
//     style={{
//       marginTop: '90px',
//       backgroundColor: '#366000',
//       color: 'white',
//       padding: '10px 16px',
//       border: 'none',
//       borderRadius: '10px',
//       fontSize: '16px',
//       cursor: 'pointer'
//     }}
//   >
//     Get Started
//   </button>

//     </div>

//   );
// }

// export default Home;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';

const LandingPage = () => {
  return (
    <Carousel fade interval={3000}>
      {/* Slide 1 with typewriter text */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>
            <Typewriter
              words={['Yucca Consulting Limited']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h3>
          <p>Cultivating a sustainable world</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Innovative Products</h3>
          <p>Explore our range of powerful and smart products.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Meet Our Team</h3>
          <p>Driven by passion and powered by creativity.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img className="d-block w-100" src={slide4} alt="Fourth slide" />
        <Carousel.Caption>
          <h3>Partner With Us</h3>
          <p>Let’s grow together through meaningful collaboration.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingPage;

