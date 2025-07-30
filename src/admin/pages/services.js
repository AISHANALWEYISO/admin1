import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { getToken } from '../utils/auth';

const API_URL = 'http://127.0.0.1:5000/api/v1/services';

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [newService, setNewService] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setServices(res.data.services);
    } catch (err) {
      console.error('Failed to fetch services:', err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Add Service
  const handleAddService = async () => {
    const { name, price, description, category } = newService;
    if (!name || !price || !description || !category) {
      alert('Please fill all fields');
      return;
    }

    try {
      await axios.post(
        `${API_URL}/create`,
        newService,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      fetchServices();
      setShowAddModal(false);
      setNewService({ name: '', price: '', description: '', category: '' });
    } catch (err) {
      console.error('Failed to add service:', err);
      alert(err.response?.data?.error || 'Failed to add service');
    }
  };

  // Open Edit Modal
  const openEditModal = (service) => {
    setSelectedService(service);
    setShowEditModal(true);
  };

  // Update Service
  const handleUpdateService = async () => {
    if (!selectedService.name || !selectedService.price || !selectedService.description) {
      alert('Please fill all fields');
      return;
    }

    try {
      await axios.put(
        `${API_URL}/edit/${selectedService.id}`,
        {
          name: selectedService.name,
          price: selectedService.price,
          description: selectedService.description,
          category: selectedService.category || '',
        },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      fetchServices();
      setShowEditModal(false);
      setSelectedService(null);
    } catch (err) {
      console.error('Failed to update service:', err);
      alert(err.response?.data?.error || 'Failed to update service');
    }
  };

  // Delete Service
  const handleDeleteService = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;

    try {
      await axios.delete(`${API_URL}/delete/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setServices(services.filter((s) => s.id !== id));
      alert('Service deleted successfully');
    } catch (err) {
      console.error('Failed to delete service:', err);
      alert(err.response?.data?.error || 'Failed to delete service');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Manage Services</h3>

      <Button variant="primary" className="mb-3" onClick={() => setShowAddModal(true)}>
        <FaPlus className="me-2" />
        Add Service
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>{service.description}</td>
              <td>{service.category || '-'}</td>
              <td>
                <Button
                  variant="info"
                  className="me-2"
                  onClick={() => openEditModal(service)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteService(service.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Service Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={newService.price}
              onChange={(e) => setNewService({ ...newService, price: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={newService.category}
              onChange={(e) => setNewService({ ...newService, category: e.target.value })}
              placeholder="Optional"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddService}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Service Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedService && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedService.name}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedService.price}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, price: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={selectedService.description}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, description: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedService.category || ''}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, category: e.target.value })
                  }
                  placeholder="Optional"
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateService}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminServices;
