// src/admin/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { Card, Row, Col } from 'react-bootstrap';
import { FaUsers, FaTools, FaClipboardList, FaBox, FaSeedling, FaComment } from 'react-icons/fa';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/admin/dashboard')
      .then(res => setData(res.data))
      .catch(err => console.error('Dashboard error:', err));
  }, []);

  if (!data) return <p className="text-center mt-5">Loading dashboard...</p>;

  const stats = data.stats;

  const cards = [
    { title: 'Total Users', count: stats.total_users, icon: <FaUsers size={30} />, color: 'primary' },
    { title: 'Total Services', count: stats.total_services, icon: <FaTools size={30} />, color: 'success' },
    { title: 'Total Bookings', count: stats.total_bookings, icon: <FaClipboardList size={30} />, color: 'info' },
    { title: 'Total Products', count: stats.total_products, icon: <FaBox size={30} />, color: 'warning' },
    { title: 'Total Farmers', count: stats.total_farmers, icon: <FaSeedling size={30} />, color: 'danger' },
    { title: 'Total Feedback', count: stats.total_feedback, icon: <FaComment size={30} />, color: 'secondary' }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">{data.welcome}</h2>
      <Row>
        {cards.map((card, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card border={card.color} className="shadow-sm h-100">
              <Card.Body className="text-center">
                <div className={`text-${card.color} mb-3`}>
                  {card.icon}
                </div>
                <h5>{card.title}</h5>
                <h3>{card.count}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
