import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './ListAplikasi.css';

const ListAplikasi = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:6543/api/v1/aplikasi')
      .then((response) => {
        setData(response.data.data.aplikasis);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleModal = (description) => {
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className="top">
      <Container className="mt-4">
        <h4 className="mb-4">Jual Beli Aplikasi Premium</h4>
        <Row>
          {data.map((aplikasi, index) => (
            <Col md={3} key={aplikasi.id} className="mb-4">
              <Card style={{ border: '2px solid pink' }}>
                <Card.Img
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    padding: '7px'
                  }}
                  variant="top"
                  src={aplikasi.image}
                />
                <Card.Body>
                  <Card.Title style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{aplikasi.name}</span>
                    <span style={{ color: 'purple' }}>{aplikasi.code}</span>
                  </Card.Title>
                  <Card.Text>
                    <strong>Harga: </strong> {aplikasi.price}<br />
                    <div className="d-flex justify-content-between mt-2">
                        <Button className="pink-button" onClick={() => handleModal(aplikasi.description)}>
                         Lihat Detail
                        </Button>
                      <i className="bi bi-cart-plus"></i>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Aplikasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDescription}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ListAplikasi;
