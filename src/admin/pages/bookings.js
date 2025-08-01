import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Spinner, Alert } from 'react-bootstrap';
import { FaCheck, FaTrash, FaEdit } from 'react-icons/fa';
import { getToken } from '../utils/auth';  // Make sure this returns your JWT token as string

const API_BASE_URL = 'http://127.0.0.1:5000';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  // Fetch bookings from backend
  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getToken();
      if (!token) throw new Error('No auth token found');

      const response = await axios.get(`${API_BASE_URL}/api/v1/bookings/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.bookings) {
        setBookings(response.data.bookings);
      } else {
        setBookings([]);
      }
    } catch (err) {
      console.error('Failed to fetch bookings:', err.response?.data || err.message);
      setError('Failed to load bookings. Please try again later.');
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Open modal to update status
  const handleStatusChange = (booking) => {
    setSelectedBooking(booking);
    setNewStatus(booking.status || 'pending');
    setShowModal(true);
  };

  // Update booking status API call
  const handleUpdateStatus = async () => {
    if (!selectedBooking) return;
    try {
      
      await axios.put(
        `${API_BASE_URL}/api/v1/bookings/edit/${selectedBooking.id}`,
        { status: newStatus },
        { headers: {   Authorization: `Bearer ${getToken()}` } }
      );
      setShowModal(false);
      fetchBookings();
    } catch (err) {
      console.error('Failed to update booking status:', err.response?.data || err.message);
      alert('Failed to update booking status. Please try again.');
    }
  };

  // Delete booking API call
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    try {
      const token = getToken();
      await axios.delete(`${API_BASE_URL}/api/v1/bookings/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings();
    } catch (err) {
      console.error('Failed to delete booking:', err.response?.data || err.message);
      alert('Failed to delete booking. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Bookings</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      {loading ? (
        <Spinner animation="border" />
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Service</th>
              <th>Status</th>
              <th>Verified</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>
                  {booking.user?.name || 'N/A'} <br />
                  <small>({booking.user?.email || 'N/A'})</small>
                </td>
                <td>{booking.service?.name || 'N/A'}</td>
                <td>{booking.status || 'pending'}</td>
                <td>{booking.is_verified ? 'Yes' : 'No'}</td>
                <td>{booking.booking_date || 'N/A'}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleStatusChange(booking)}
                    className="me-2"
                  >
                    <FaEdit /> Update
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(booking.id)}
                  >
                    <FaTrash /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Update Status Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Booking Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdateStatus}>
            <FaCheck /> Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminBookings;
