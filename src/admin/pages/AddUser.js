import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    password: '',
    user_type: 'admin', // default user type
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    // Frontend validation for password length
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    // Frontend validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Email is not valid');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/auth/register', form);
      setMessage(response.data.message || 'User added successfully!');
      setForm({
        first_name: '',
        last_name: '',
        email: '',
        contact: '',
        password: '',
        user_type: 'admin',
      });
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Failed to add user');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New User</h2>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">User Type</label>
          <select
            name="user_type"
            value={form.user_type}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="client">Client</option>
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
