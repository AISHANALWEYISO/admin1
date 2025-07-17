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

//      import React from 'react';

// // Import images
// import soilTestingImg from '../assets/services/soil-testing.jpg';
// import irrigationImg from '../assets/services/irrigation-planning.jpg';
// import cropAdvisoryImg from '../assets/services/crop-advisory.jpg';
// import farmMechImg from '../assets/services/farm-mechanization.jpg';
// import organicFertImg from '../assets/services/organic-fertilizers.jpg';
// import pestMgmtImg from '../assets/services/pest-management.jpg';
// import farmTrainingImg from '../assets/services/farm-training.jpg';
// import marketLinkImg from '../assets/services/market-linkages.jpg';
// import cropInsuranceImg from '../assets/services/crop-insurance.jpg';
// import sustainableFarmingImg from '../assets/services/sustainable-farming.jpg';

// const services = [
//   {
//     id: 1,
//     title: 'Soil Testing & Analysis',
//     description: 'Accurate soil testing to help optimize crop yields and sustainable farming.',
//     image: soilTestingImg,
//   },
//   {
//     id: 2,
//     title: 'Irrigation Planning',
//     description: 'Design and implementation of efficient irrigation systems.',
//     image: irrigationImg,
//   },
//   {
//     id: 3,
//     title: 'Crop Advisory',
//     description: 'Expert guidance on crop selection, pest control, and harvesting techniques.',
//     image: cropAdvisoryImg,
//   },
//   {
//     id: 4,
//     title: 'Farm Mechanization',
//     description: 'Providing machinery to improve efficiency.',
//     image: farmMechImg,
//   },
//   {
//     id: 5,
//     title: 'Organic Fertilizers',
//     description: 'Supply and consultation on organic fertilizers.',
//     image: organicFertImg,
//   },
//   {
//     id: 6,
//     title: 'Pest Management',
//     description: 'Sustainable pest control methods.',
//     image: pestMgmtImg,
//   },
//   {
//     id: 7,
//     title: 'Farm Training',
//     description: 'Workshops and hands-on training for farmers.',
//     image: farmTrainingImg,
//   },
//   {
//     id: 8,
//     title: 'Market Linkages',
//     description: 'Connecting farmers with buyers and markets.',
//     image: marketLinkImg,
//   },
//   {
//     id: 9,
//     title: 'Crop Insurance',
//     description: 'Protection plans for crop loss.',
//     image: cropInsuranceImg,
//   },
//   {
//     id: 10,
//     title: 'Sustainable Farming',
//     description: 'Guidance on eco-friendly agricultural practices.',
//     image: sustainableFarmingImg,
//   },
// ];

// const Services = () => {
//   return (
//     <div className="container mt-5">
//       <h2>Our Agricultural Services</h2>
//       <div className="row">
//         {services.map(service => (
//           <div key={service.id} className="col-md-6 col-lg-4 mb-4">
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={service.image}
//                 className="card-img-top"
//                 alt={service.title}
//                 style={{ objectFit: 'cover', height: '200px' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{service.title}</h5>
//                 <p className="card-text">{service.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState } from 'react';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     setSubmitted(true);
//     setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '600px' }}>
//       <h2>Contact Us</h2>

//       {submitted && (
//         <div className="alert alert-success" role="alert">
//           Thank you for reaching out! We will get back to you soon.
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         {/* Row for First Name and Last Name */}
//         <div className="row mb-3">
//           <div className="col">
//             <label htmlFor="firstName" className="form-label">First Name *</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               className="form-control"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               placeholder="First Name"
//             />
//           </div>
//           <div className="col">
//             <label htmlFor="lastName" className="form-label">Last Name *</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               className="form-control"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               placeholder="Last Name"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email *</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="you@example.com"
//           />
//         </div>

//         {/* Subject */}
//         <div className="mb-3">
//           <label htmlFor="subject" className="form-label">Subject *</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             className="form-control"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//             placeholder="Subject of your message"
//           />
//         </div>

//         {/* Message */}
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">Message *</label>
//           <textarea
//             id="message"
//             name="message"
//             className="form-control"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             placeholder="Write your message here..."
//           ></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;



