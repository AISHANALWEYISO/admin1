// import React from 'react';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// import { motion } from 'framer-motion';

// // Image imports
// import farm from '../images/farm managent.jpeg';
// import value from '../images/value.jpeg';
// import ser from '../images/ser.jpg';
// import goats from '../images/goats.jpg';
// import market from '../images/market work.jpg';
// import training from '../images/training.jpeg';

// const services = [
//   {
//     title: 'Soil Health Improvement',
//     description: 'We assess and improve soil fertility using eco-friendly approaches for sustainable farming.',
//     img: ser,
//   },
//   {
//     title: 'Farmer Training & Capacity Building',
//     description: 'Training programs that equip farmers with knowledge on modern and smart agriculture.',
//     img: training,
//   },
//   {
//     title: 'Value Chain Development',
//     description: 'We strengthen agricultural value chains from production to post-harvest to marketing.',
//     img: value,
//   },
//   {
//     title: 'Farmer Registration & Data Systems',
//     description: 'Digital farmer profiling and records for better service delivery and planning.',
//     img: farm,
//   },
//   {
//     title: 'Extension Services',
//     description: 'We offer agronomic and livestock advisory services both physically and digitally.',
//     img: goats,
//   },
//   {
//     title: 'Market Access Support',
//     description: 'Linking farmers to reliable markets to ensure profitability and reduce post-harvest losses.',
//     img: market,
//   },
// ];

// const Services = () => {
//   return (
//     <Container className="my-5">
//       {/* Animated Page Title */}
//       <motion.h2
//         className="text-center fw-bold mb-4"
//         style={{
//           borderBottom: '3px solid #366000',
//           display: 'inline-block',
//           paddingBottom: '5px',
//         }}
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//            We offer a wider range of services to support farmers and agribusiness
//       </motion.h2>

//       {/* Services Grid with Animations */}
//       <Row className="mt-4 g-4">
//         {services.map((service, index) => (
//           <Col md={4} sm={6} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-100 border-0 shadow-sm rounded-4">
//                 <Card.Img
//                   variant="top"
//                   src={service.img}
//                   alt={service.title}
//                   style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
//                 />
//                 <Card.Body>
//                   <Card.Title className="fw-bold" style={{color:'#366000'}}>{service.title}</Card.Title>
//                   <Card.Text>{service.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Services;

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/services.css'; // Add custom animations here

const services = [
  {
    title: 'Crop Management',
    image: '/images/services/crop.jpg',
    description: 'Advising on crop selection, planting, irrigation, fertilization, and pest management.',
  },
  {
    title: 'Soil Analysis',
    image: '/images/services/soil.jpg',
    description: 'Conducting soil tests, providing recommendations on soil health, and suggesting amendments.',
  },
  {
    title: 'Precision Agriculture',
    image: '/images/services/precision.jpg',
    description: 'Using drones, GPS, and sensors to optimize yields and reduce waste.',
  },
  {
    title: 'Sustainability Consulting',
    image: '/images/services/sustainability.jpg',
    description: 'Sustainable practices, environmental assessments, and regulatory guidance.',
  },
  {
    title: 'Irrigation Management',
    image: '/images/services/irrigation.jpg',
    description: 'Designing efficient systems to conserve water and boost yield.',
  },
  {
    title: 'Pest & Disease Management',
    image: '/images/services/pests.jpg',
    description: 'Identifying threats and implementing IPM strategies.',
  },
  {
    title: 'Capacity Building',
    image: '/images/services/training.jpg',
    description: 'Training programs for farmers and agribusiness professionals.',
  },
];

const Services = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: '#366000' }}>Our Services</h2>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="service-card h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={service.image}
                alt={service.title}
                className="service-img"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ color: '#366000' }}>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <div className="mt-auto">
                  <Link to="/booking">
                    <Button
                       variant="outline-success"
                      size="sm"
                      style={{ Color: '#366000', borderColor: '#366000', fontWeight: '500',padding: '4px 12px' }}
                      className="w-100"
                    >
                      Book now
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;


