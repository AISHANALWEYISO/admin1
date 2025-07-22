// import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Image imports
import farm from '../images/farm managent.jpeg';
import value from '../images/value.jpeg';
import ser from '../images/ser.jpg';
import goats from '../images/goats.jpg';
import market from '../images/market work.jpg';
import training from '../images/training.jpeg';

const services = [
  {
    title: 'Soil Health Improvement',
    description: 'We assess and improve soil fertility using eco-friendly approaches for sustainable farming.',
    img: ser,
  },
  {
    title: 'Farmer Training & Capacity Building',
    description: 'Training programs that equip farmers with knowledge on modern and smart agriculture.',
    img: training,
  },
  {
    title: 'Value Chain Development',
    description: 'We strengthen agricultural value chains from production to post-harvest to marketing.',
    img: value,
  },
  {
    title: 'Farmer Registration & Data Systems',
    description: 'Digital farmer profiling and records for better service delivery and planning.',
    img: farm,
  },
  {
    title: 'Extension Services',
    description: 'We offer agronomic and livestock advisory services both physically and digitally.',
    img: goats,
  },
  {
    title: 'Market Access Support',
    description: 'Linking farmers to reliable markets to ensure profitability and reduce post-harvest losses.',
    img: market,
  },
];

const Services = () => {
  return (
    <Container className="my-5">
      {/* Animated Page Title */}
      <motion.h2
        className="text-center fw-bold mb-4"
        style={{
          borderBottom: '3px solid #366000',
          display: 'inline-block',
          paddingBottom: '5px',
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
           We offer a wider range of services to support farmers and agribusiness
      </motion.h2>

      {/* Services Grid with Animations */}
      <Row className="mt-4 g-4">
        {services.map((service, index) => (
          <Col md={4} sm={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <Card.Img
                  variant="top"
                  src={service.img}
                  alt={service.title}
                  style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold" style={{color:'#366000'}}>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
