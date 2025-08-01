import React from 'react';

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-primary mb-4">Welcome to Your Admin Dashboard</h1>
      <p className="lead">
        Manage users, bookings, products, services, and more from the sidebar.
      </p>
      <div className="mt-5">
        <h4>Quick Overview</h4>
        <div className="d-flex gap-3 flex-wrap">
          <div className="p-3 bg-info text-white rounded" style={{ minWidth: 150 }}>
            <h5>Users</h5>
            <p className="fs-3">120</p>
          </div>
          <div className="p-3 bg-success text-white rounded" style={{ minWidth: 150 }}>
            <h5>Bookings</h5>
            <p className="fs-3">45</p>
          </div>
          <div className="p-3 bg-warning text-dark rounded" style={{ minWidth: 150 }}>
            <h5>Products</h5>
            <p className="fs-3">30</p>
          </div>
          <div className="p-3 bg-primary text-white rounded" style={{ minWidth: 150 }}>
            <h5>Services</h5>
            <p className="fs-3">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
