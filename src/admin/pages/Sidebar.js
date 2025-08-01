// import React from 'react';
// import { NavLink ,useNavigate } from 'react-router-dom';
// import { FaUserPlus, FaUsers, FaSeedling, FaConciergeBell, FaCalendarAlt, FaUser , FaSignOutAlt} from 'react-icons/fa';

// const Sidebar = () => {
//   const linkClass = ({ isActive }) => (isActive ? 'nav-link active text-white' : 'nav-link text-white');
//   const navigate = useNavigate();

// const logout = () => {
//   localStorage.removeItem('token');  // clear auth token
//   navigate('/login');                 // redirect to login page
// };

//   return (
//     <div className="bg-success text-white p-3" style={{ minHeight: '100vh', width: '250px' }}>
//       <h4 className="text-center mb-4">Admin Panel</h4>
//       <nav className="nav flex-column">
//         <NavLink to="/admin" end className={linkClass}>
//           <FaUser className="me-2" /> Dashboard
//         </NavLink>
//         <NavLink to="/admin/add-user" className={linkClass}>
//           <FaUserPlus className="me-2" /> Add User
//         </NavLink>
//         <NavLink to="/admin/show-user" className={linkClass}>
//           <FaUsers className="me-2" /> Show Users
//         </NavLink>
//         <NavLink to="/admin/products" className={linkClass}>
//           <FaSeedling className="me-2" /> Products
//         </NavLink>
//         <NavLink to="/admin/services" className={linkClass}>
//           <FaConciergeBell className="me-2" /> Services
//         </NavLink>
//         <NavLink to="/admin/bookings" className={linkClass}>
//           <FaCalendarAlt className="me-2" /> Bookings
//         </NavLink>
//         <NavLink to="/admin/farmers" className={linkClass}>
//           <FaUser className="me-2" /> Farmers
//         </NavLink>
//           <button onClick={logout} className="btn btn-danger mt-4 w-100">
//           <FaSignOutAlt className="me-2" /> Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="bg-dark text-white p-3" style={{ minHeight: '100vh', width: '200px' }}>
      <h4>Admin Panel</h4>
      <ul className="nav flex-column">
        <li><Link className="nav-link text-white" to="/admin/dashboard">Dashboard</Link></li>
        <li><Link className="nav-link text-white" to="/admin/add-user">Add User</Link></li>
        <li><Link className="nav-link text-white" to="/admin/show-user">Show Users</Link></li>
        <li><Link className="nav-link text-white" to="/admin/products">Products</Link></li>
        <li><Link className="nav-link text-white" to="/admin/services">Services</Link></li>
        <li><Link className="nav-link text-white" to="/admin/bookings">Bookings</Link></li>
        <li><Link className="nav-link text-white" to="/admin/farmers">Farmers</Link></li>
        <li><button onClick={handleLogout} className="btn btn-outline-light mt-3">Sign Out</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaUser, FaUsers, FaChartBar, FaCogs, FaBox, FaClipboardList, FaLeaf, FaComment, FaPowerOff, FaUserShield } from 'react-icons/fa';

// const Sidebar = ({ isSuperAdmin }) => {
//   return (
//     <div className="bg-dark text-white p-3" style={{ height: '100vh', width: '250px' }}>
//       <h4 className="mb-4">Admin Panel</h4>
//       <nav className="nav flex-column">
//         <NavLink to="/admin/overview" className="nav-link text-white"><FaChartBar /> Overview</NavLink>
//         <NavLink to="/admin/profile" className="nav-link text-white"><FaUser /> Profile</NavLink>
//         <NavLink to="/admin/users" className="nav-link text-white"><FaUsers /> Users</NavLink>
//         <NavLink to="/admin/bookings" className="nav-link text-white"><FaClipboardList /> Bookings</NavLink>
//         <NavLink to="/admin/products" className="nav-link text-white"><FaBox /> Products</NavLink>
//         <NavLink to="/admin/services" className="nav-link text-white"><FaLeaf /> Services</NavLink>
//         <NavLink to="/admin/farmers" className="nav-link text-white"><FaUser /> Farmers</NavLink>
//         <NavLink to="/admin/feedback" className="nav-link text-white"><FaComment /> Feedback</NavLink>
//         <NavLink to="/admin/reports" className="nav-link text-white"><FaChartBar /> Reports</NavLink>
//         <NavLink to="/admin/settings" className="nav-link text-white"><FaCogs /> Settings</NavLink>
//         {isSuperAdmin && (
//           <NavLink to="/admin/manage-admins" className="nav-link text-white"><FaUserShield /> Manage Admins</NavLink>
//         )}
//         <NavLink to="/logout" className="nav-link text-white mt-3"><FaPowerOff /> Logout</NavLink>
//       </nav>
//     </div>
//   );
// };

// // export default Sidebar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   FaUser, FaUsers, FaChartBar, FaCogs, FaBox, FaClipboardList, 
//   FaLeaf, FaComment, FaPowerOff, FaUserShield 
// } from 'react-icons/fa';

// const Sidebar = ({ isSuperAdmin }) => {
//   // Active class styling helper
//   const activeClass = ({ isActive }) =>
//     isActive ? 'nav-link active bg-primary text-white' : 'nav-link text-white';

//   return (
//     <div className="bg-dark text-white p-3" style={{ height: '100vh', width: '250px' }}>
//       <h4 className="mb-4">Admin Panel</h4>
//       <nav className="nav flex-column">
//         <NavLink to="/admin/overview" className={activeClass}>
//           <FaChartBar className="me-2" /> Overview
//         </NavLink>
//         <NavLink to="/admin/profile" className={activeClass}>
//           <FaUser className="me-2" /> Profile
//         </NavLink>
//         <NavLink to="/admin/users" className={activeClass}>
//           <FaUsers className="me-2" /> Users
//         </NavLink>
//         <NavLink to="/admin/showusers" className="nav-link">
//           <FaUsers className="me-2" /> Show Users
//         </NavLink>

//         <NavLink to="/admin/bookings" className={activeClass}>
//           <FaClipboardList className="me-2" /> Bookings
//         </NavLink>
//         <NavLink to="/admin/products" className={activeClass}>
//           <FaBox className="me-2" /> Products
//         </NavLink>
//         <NavLink to="/admin/services" className={activeClass}>
//           <FaLeaf className="me-2" /> Services
//         </NavLink>
//         <NavLink to="/admin/farmers" className={activeClass}>
//           <FaUser className="me-2" /> Farmers
//         </NavLink>
//         <NavLink to="/admin/feedback" className={activeClass}>
//           <FaComment className="me-2" /> Feedback
//         </NavLink>
//         <NavLink to="/admin/reports" className={activeClass}>
//           <FaChartBar className="me-2" /> Reports
//         </NavLink>
//         <NavLink to="/admin/settings" className={activeClass}>
//           <FaCogs className="me-2" /> Settings
//         </NavLink>
//         {isSuperAdmin && (
//           <NavLink to="/admin/manage-admins" className={activeClass}>
//             <FaUserShield className="me-2" /> Manage Admins
//           </NavLink>
//         )}
//         <NavLink to="/logout" className="nav-link text-white mt-3">
//           <FaPowerOff className="me-2" /> Logout
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
