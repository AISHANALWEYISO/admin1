import React from 'react';
import { NavLink ,useNavigate } from 'react-router-dom';
import { FaUserPlus, FaUsers, FaSeedling, FaConciergeBell, FaCalendarAlt, FaUser , FaSignOutAlt} from 'react-icons/fa';

const Sidebar = () => {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active text-white' : 'nav-link text-white');
  const navigate = useNavigate();

const logout = () => {
  localStorage.removeItem('token');  // clear auth token
  navigate('/login');                 // redirect to login page
};

  return (
    <div className="bg-success text-white p-3" style={{ minHeight: '100vh', width: '250px' }}>
      <h4 className="text-center mb-4">Admin Panel</h4>
      <nav className="nav flex-column">
        <NavLink to="/admin" end className={linkClass}>
          <FaUser className="me-2" /> Dashboard
        </NavLink>
        <NavLink to="/admin/add-user" className={linkClass}>
          <FaUserPlus className="me-2" /> Add User
        </NavLink>
        <NavLink to="/admin/show-user" className={linkClass}>
          <FaUsers className="me-2" /> Show Users
        </NavLink>
        <NavLink to="/admin/products" className={linkClass}>
          <FaSeedling className="me-2" /> Products
        </NavLink>
        <NavLink to="/admin/services" className={linkClass}>
          <FaConciergeBell className="me-2" /> Services
        </NavLink>
        <NavLink to="/admin/bookings" className={linkClass}>
          <FaCalendarAlt className="me-2" /> Bookings
        </NavLink>
        <NavLink to="/admin/farmers" className={linkClass}>
          <FaUser className="me-2" /> Farmers
        </NavLink>
          <button onClick={logout} className="btn btn-danger mt-4 w-100">
          <FaSignOutAlt className="me-2" /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
