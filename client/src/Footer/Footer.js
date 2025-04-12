import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About The Cyprus Market</h5>
            <p>
              The Cyprus Market is your go-to platform for renting apartments, cars, selling vehicles, and buying electronics. 
              We connect buyers and sellers across Cyprus, providing the best deals and a seamless user experience.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/auth" className="text-light">
                Rent an Apartment
              </Nav.Link>
              <Nav.Link href="/auth" className="text-light">
                Rent a Car
              </Nav.Link>
              <Nav.Link href="/auth" className="text-light">
                Buy/Sell a Car
              </Nav.Link>
              <Nav.Link href="/auth" className="text-light">
                Buy/Sell Electronics
              </Nav.Link>
              <Nav.Link href="/auth" className="text-light">
                Sign Up / Login
              </Nav.Link>
              <Nav.Link href="/contact-us" className="text-light">
                Contact Us
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Phone: +905338801877</p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; {new Date().getFullYear()} The Cyprus Market. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
