import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import image2 from '../images/tree.jpeg';
import ser from '../images/ser.jpg';
import goats from '../images/goats.jpg';
import postharvest from '../images/posthavest.jpg';
import man from '../images/man.jpg';
import food from '../images/food.jpg';
import irrigation from '../images/irrigation.jpg';
import logot from '../images/LOGOT.png';
import red from '../images/maise2.jpeg'

const Home = () => {
  const slideTexts = [
    {
      image: image2,
      heading: 'Yucca Consulting Limited',
      subtext: 'Cultivating a sustainable world',
    },
    {
      image: man,
      heading: 'Monitoring and evaluation of small-scale farming practices',
      subtext: 'Field-tested, community-driven insights.',
    },
    {
      image: red,
      heading: 'Crop management and food resilience',
      subtext: 'Securing tomorrow’s harvest today.',
    },
  ];

  const products = [
    { name: 'Organic Fertilizer', image: ser },
    { name: 'Hybrid Seeds', image: goats },
    { name: 'Drip Irrigation Kit', image: irrigation },
  ];

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Carousel - Full Width & Text on Left */}
      <Carousel fade controls={false} indicators interval={3000}>
        {slideTexts.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: '5%',
                margin:'0'
              }}
            >
              <div
                className="p-4"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                  color: 'white',
                  maxWidth: '600px',
                }}
              >
                <h1 className="fw-bold mb-3" style={{ fontSize: '2.8rem' }}>
                  {slide.heading}
                </h1>
                <p className="fs-4 fst-italic">{slide.subtext}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Intro Section */}
      <Container fluid className="my-5">
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="position-relative" style={{ zIndex: 2 }}>
            <div
              className="p-4"
              style={{
                backgroundColor: 'rgba(224, 241, 229, 0.9)',
                borderRadius: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginLeft: '2rem',
                marginRight: '-4rem',
              }}
            >
              <h5 className="fst-italic mb-2" style={{ color: '#366000' }}>
                We are your agricultural partner
              </h5>
              <p style={{ fontSize: '1.1rem' }}>
                Empowering farmers, communities, and organizations to adopt
                sustainable practices, technologies, and innovations that drive
                economic growth, environmental stewardship, and social well-being.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={irrigation}
              alt="Farming Support"
              className="img-fluid rounded-4"
              style={{
                maxHeight: '400px',
                objectFit: 'cover',
                width: '100%',
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* Dealers In */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold" style={{ borderBottom: '3px solid #366000', display: 'inline-block', paddingBottom: '5px' }}>
          DEALERS IN
        </h4>
        <Row className="mt-4 g-4 justify-content-center">
          {[{
            img: ser,
            title: 'Soil Fertility',
            text: 'Improves soil fertility through sustainable farming practices.'
          },
          {
            img: goats,
            title: 'Breeding Practices',
            text: 'Advises on best breeds for environment and goals.'
          },
          {
            img: postharvest,
            title: 'Post-harvest',
            text: 'Improves post-harvest processes to reduce loss and enhance quality.'
          }].map((item, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="p-3 h-100 rounded-3 border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{
                    borderRadius: '20px',
                    height: '180px',
                    objectFit: 'cover',
                  }}
                  alt={item.title}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Interventions */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold" style={{ borderBottom: '3px solid #366000', display: 'inline-block', paddingBottom: '5px' }}>
          OUR INTERVENTIONS
        </h4>
        <Row className="mt-4 g-4 justify-content-center">
          {[{
            img: man,
            title: 'Strategic commodities',
            text: 'Provision of planting materials to boost productivity.',
          },
          {
            img: food,
            title: 'Promoting Food Security',
            text: 'Ensuring access to adequate food through innovations.',
          },
          {
            img: irrigation,
            title: 'Irrigation Access',
            text: 'Providing sustainable water solutions for farming.',
          }].map((item, i) => (
            <Col md={4} sm={6} key={i}>
              <Card className="border-0 h-100 shadow-sm">
                <Card.Img
                  src={item.img}
                  alt={item.title}
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                  }}
                />
                <div
                  className="text-white text-start px-3 py-3"
                  style={{
                    backgroundColor: '#366000',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                  }}
                >
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="mb-0">{item.text}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Products Section */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold" style={{ borderBottom: '3px solid #366000', display: 'inline-block', paddingBottom: '5px' }}>
          OUR PRODUCTS
        </h4>
        <Row className="mt-4 g-4 justify-content-center">
          {products.map((product, index) => (
            <Col md={4} sm={6} key={index}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-3"
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #366000',
                  }}
                />
                <h5 className="fw-bold">{product.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Partners */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold" style={{ borderBottom: '3px solid #366000', display: 'inline-block', paddingBottom: '5px' }}>
          OUR PARTNERS
        </h4>
        <Row className="mt-4 justify-content-center align-items-center g-4">
          {[logot].map((logo, index) => (
            <Col key={index} md={3} sm={6} xs={6}>
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="img-fluid"
                style={{ maxHeight: '100px', objectFit: 'contain' }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
