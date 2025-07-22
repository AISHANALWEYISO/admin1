// import React from 'react'
// import {Nav} from 'react-bootstrap'
// import {Link} from 'react-router-dom'


// const Sidebar = () => {
//   return (
//     <div>
//         <div className=" text-white vh-100 p-3" style={{ width: '250px', backgroundColor:'#366000' }}>
//       <h3 className="text-center mb-4">Dashboard</h3>
//       <Nav defaultActiveKey="/add-user" className="flex-column">
//         <Nav.Link as={Link} to="/add-user" className="text-white">Add User</Nav.Link>
//         <Nav.Link as={Link} to="/show-users" className="text-white">Show Users</Nav.Link>
//       </Nav>
//     </div>
       
//     </div>
//   )
// }

// export default Sidebar
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaUsers, FaSeedling, FaConciergeBell, FaCalendarAlt } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="bg-success text-white p-3" style={{ minHeight: '100vh', width: '250px' }}>
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/admin/add-user" className="nav-link text-white">
            <FaUserPlus /> Add User
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/show-user" className="nav-link text-white">
            <FaUsers /> Show Users
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/products" className="nav-link text-white">
            <FaSeedling /> Products
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/services" className="nav-link text-white">
            <FaConciergeBell /> Services
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/bookings" className="nav-link text-white">
            <FaCalendarAlt /> Bookings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
