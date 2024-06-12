import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';

const LandingPage = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:8000/api/v1/inventory')
        .then((response) => {
          setData(response.data.data.inventorys);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <Container fluid className="p-4">
        <Container className="mt-4">
          <h4 className="mb-4">Inventory Data List</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Code</th>
                <th>Admin Name</th>
                <th>Type</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {data.map((inventory, index) => (
                <tr key={inventory.id}>
                  <td>{index + 1}</td>
                  <td>{inventory.name}</td>
                  <td>{inventory.code}</td>
                  <td>{inventory.admin_name}</td>
                  <td>{inventory.type}</td>
                  <td>{inventory.year}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    );
  };
  
export default LandingPage;
  
