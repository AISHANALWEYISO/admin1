import React from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Table } from 'react-bootstrap';

const Products = () => {
  return (
    <div>
      <h2>Manage Products</h2>
      <Button variant="success" className="mb-3">
        <FaPlus /> Add Product
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Maize Seeds</td>
            <td>Seed</td>
            <td>100</td>
            <td>
              <Button variant="warning" size="sm" className="me-2">
                <FaEdit />
              </Button>
              <Button variant="danger" size="sm">
                <FaTrash />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
