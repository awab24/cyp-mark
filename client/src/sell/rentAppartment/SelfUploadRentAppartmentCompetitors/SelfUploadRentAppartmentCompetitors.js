import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import './SelfUploadRentAppartmentCompetitors.css';

function SelfUploadRentAppartmentCompetitors() {
  const [apartments, setApartments] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/endpoints/apartments'); // Adjust the endpoint accordingly
        setApartments(response.data); // Set apartment data including photo URLs
      } catch (error) {
        console.error('Error fetching apartment competitors:', error);
      }
    };

    fetchApartments();
  }, []);

  return (
    <Container>
      <h1 className="my-5 text-center">Apartment Competitors</h1>
      <Row>
        {apartments.length === 0 ? (
          <div className="text-center">No apartments found</div>
        ) : (
          apartments.map((apartment) => (
            <Col key={apartment._id} md={4} className="mb-4">
              <div className="apartment-card">
                <Card>
                  {apartment.photos && apartment.photos.length > 0 ? (
                    <Carousel>
                      {apartment.photos.map((photo, index) => (
                        <Carousel.Item key={index}>
                          <Card.Img
                            variant="top"
                            src={photo} // Use the Firebase URL directly
                            alt={`Apartment photo ${index + 1}`}
                            className="img-fluid"
                            style={{ height: '300px', objectFit: 'cover' }} // Adjust height and fit as needed
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ) : (
                    <div>No Image Available</div>
                  )}
                  <Card.Body style={{backgroundColor: 'yellow', color:'black'}}>
                    <Card.Title>{apartment.city} - ${apartment.price}</Card.Title>
                    <Card.Text>
                      <strong>Size:</strong> {apartment.size}<br />
                      <strong>Number of Persons:</strong> {apartment.numberOfPersons}<br />
                      <strong>Required Nationalities:</strong> {apartment.nationalities}<br />
                      <strong>Deposit:</strong> ${apartment.depositAmount}<br />
                      <strong>Rental Period:</strong> {apartment.rentalPeriod}<br/>
                      <strong>Sex:</strong> {apartment.sex}<br/>
                      <strong>Description:</strong> {apartment.description}<br/>
                    </Card.Text>
                  </Card.Body>
                </Card>
                {/* Phone number below the card */}
                <div className="phone-number">
                  Contact: {apartment.phoneNumber ? apartment.phoneNumber : '+905338801877'}
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default SelfUploadRentAppartmentCompetitors;


