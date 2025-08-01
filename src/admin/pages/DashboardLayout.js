import React from 'react';
import Sidebar from '../pages/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1 p-3 bg-light" style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
