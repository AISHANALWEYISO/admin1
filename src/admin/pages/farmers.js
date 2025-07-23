import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Farmers = () => {
  return (
    <div>
      <h2>Manage Farmers</h2>
      <Button variant="success" className="mb-3">
        <FaPlus /> Add Farmer
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td>1</td>
            <td>Jane Smith</td>
            <td>Gulu</td>
            <td>+256 700 000000</td>
            <td>
              <Button variant="warning" size="sm" className="me-2"><FaEdit /></Button>
              <Button variant="danger" size="sm"><FaTrash /></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Farmers;
