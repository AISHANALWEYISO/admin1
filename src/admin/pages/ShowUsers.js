// // import {React,useEffect} from 'react'
// import {Table} from 'react-bootstrap'
// import axios from 'axios'
// import React, { useState, useEffect } from 'react';



// const ShowUsers = () => {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//     axios.get('http://127.0.0.1:5000/api/v1/auth/register')
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);
//   return (
//     <div>
//         <div className="p-4">
//       <h4>All Users</h4>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u, index) => (
//             <tr key={u.id}>
//               <td>{index + 1}</td>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//     </div>
//   )
// }

// export default ShowUsers
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/v1/auth/register')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h4>All Users</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u.id}>
              <td>{index + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>{u.contact}</td>
              <td>{u.usertype}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowUsers;
