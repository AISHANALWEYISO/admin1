import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import AddUser from './pages/AddUser';
import ShowUsers from './pages/ShowUsers';
import Booking from './pages/bookings'
import Services from './pages/services'
import { isAuthenticated } from './utils/auth';

const DashboardApp = () => {
  if (!isAuthenticated()) return <Navigate to="/admin/login" replace />;

  return (
    <Routes>
      {/* All /admin/* routes will render inside the DashboardLayout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="showusers" element={<ShowUsers />} />
        <Route path="bookings" element={<Booking />} />
         <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default DashboardApp;
