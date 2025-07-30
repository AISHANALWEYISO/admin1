import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Alert, Spinner } from 'react-bootstrap';
import { FaEye, FaPlus, FaTrash } from 'react-icons/fa';
import { getToken } from '../utils/auth';

const API_URL = 'http://127.0.0.1:5000/api/v1';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Modal states
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState('');

  const [showAddModal, setShowAddModal] = useState(false);
  const [newBooking, setNewBooking] = useState({
    user_id: '',
    service_id: '',
    status: 'pending',
  });

  // Fetch bookings + users + services
  const fetchData = async () => {
    setLoading(true);
    try {
      const [bRes, sRes, uRes] = await Promise.all([
        axios.get(`${API_URL}/bookings/`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        }),
        axios.get(`${API_URL}/services/`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        }),
        axios.get(`${API_URL}/users/`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        }),
      ]);
      setBookings(bRes.data.bookings);
      setServices(sRes.data.services);
      setUsers(uRes.data.users);
      setErrorMsg('');
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to load data. Please try again later.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Open update status modal
  const openViewModal = (booking) => {
    setSelectedBooking(booking);
    setStatusUpdate(booking.status);
    setShowViewModal(true);
  };

  // Handle update status submit
  const handleStatusUpdate = async () => {
    if (!statusUpdate) {
      alert('Please select a status.');
      return;
    }
    try {
      await axios.put(
        `${API_URL}/bookings/edit/${selectedBooking.id}`,
        { status: statusUpdate },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      alert('Booking status updated successfully');
      setShowViewModal(false);
      fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to update booking status');
    }
  };

  // Handle delete booking
  const handleDelete = async (bookingId) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;

    try {
      await axios.delete(`${API_URL}/bookings/delete/${bookingId}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      alert('Booking deleted successfully');
      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    } catch (err) {
      console.error(err);
      alert('Failed to delete booking');
    }
  };

  // Handle add new booking
  const handleAddBooking = async () => {
    if (!newBooking.user_id || !newBooking.service_id) {
      alert('Please select both User and Service');
      return;
    }

    try {
      // Sending user_id explicitly, assuming your backend supports this for admin-created bookings
      await axios.post(
        `${API_URL}/bookings/create`,
        {
          user_id: newBooking.user_id,
          service_id: newBooking.service_id,
          status: newBooking.status,
        },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      alert('Booking created successfully');
      setShowAddModal(false);
      setNewBooking({ user_id: '', service_id: '', status: 'pending' });
      fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to create booking');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Manage Bookings</h3>

      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <div className="mb-3">
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          <FaPlus className="me-2" />
          Add Booking
        </Button>
      </div>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Service</th>
              <th>Price</th>
              <th>User</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.status}</td>
                  <td>{booking.service?.name || 'N/A'}</td>
                  <td>{booking.service?.price || 'N/A'}</td>
                  <td>{booking.user?.name || booking.user?.email || 'N/A'}</td>
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      className="me-2"
                      onClick={() => openViewModal(booking)}
                    >
                      <FaEye />
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(booking.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}

      {/* Update Status Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Booking Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <>
              <p>
                <strong>Service:</strong> {selectedBooking.service?.name || 'N/A'}
              </p>
              <p>
                <strong>Current Status:</strong> {selectedBooking.status}
              </p>
              <Form.Select
                value={statusUpdate}
                onChange={(e) => setStatusUpdate(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="delivered">Delivered</option>
              </Form.Select>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleStatusUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Booking Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>User</Form.Label>
            <Form.Select
              value={newBooking.user_id}
              onChange={(e) => setNewBooking({ ...newBooking, user_id: e.target.value })}
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username || user.email}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Service</Form.Label>
            <Form.Select
              value={newBooking.service_id}
              onChange={(e) => setNewBooking({ ...newBooking, service_id: e.target.value })}
            >
              <option value="">Select Service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={newBooking.status}
              onChange={(e) => setNewBooking({ ...newBooking, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="delivered">Delivered</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddBooking}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminBookings;
