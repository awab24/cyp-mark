import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import SliderComponent from './SliderComponent';

function DefiningPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <title>The Cyprus Market - Buy, Sell, Rent Apartments, Cars, Electronics</title>
        <meta name="description" content="The Cyprus Market is your one-stop platform to rent apartments, buy cars, and shop electronics in Cyprus." />
      </Helmet>

      {/* Pop-up Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="modal-content">
          <h3 className="modal-title">Join Our Platform Today</h3>
          <p>Sign up now and take the first step towards achieving your goals.</p>
          <Button
            className="yellow-button box-btn"
            onClick={() => {
              handleClose();
              navigate('/auth');
            }}>
            Sign Up Now
          </Button>
        </Modal.Body>
      </Modal>

      {/* Main Content */}

      <Container fluid className="no-padding-container">

        <div className="fullwidth-slider-container">
          <SliderComponent />
        </div>

        <div className="d-flex justify-content-center my-4">
          <Button className="pumping-button yellow-button" onClick={() => navigate('/auth')}>
            Sign Up/In
          </Button>
          <Button className="pumping-button yellow-button" onClick={() => navigate('/work-with-us')}>
            Work With Us
          </Button>
        </div>

        {/* Services Section */}
        <section className="services-section">
          <h2 className="text-center mb-4 text-warning">Explore Our Top Services</h2>
          <Row className="mb-4">
            <Col lg={3} md={6} className="mb-3">
              <Button className="yellow-button box-btn w-100" onClick={() => navigate('/auth')}>
                Rent an Apartment
              </Button>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <Button className="yellow-button box-btn w-100" onClick={() => navigate('/auth')}>
                Upload Your Apartment
              </Button>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <Button className="yellow-button box-btn w-100" onClick={() => navigate('/auth')}>
                Rent a Car
              </Button>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <Button className="yellow-button box-btn w-100" onClick={() => navigate('/auth')}>
                Rent Out Your Car
              </Button>
            </Col>
          </Row>
        </section>

        {/* Content Section - Images and Text */}
        <section className="content-section py-5">
          {/* Rent Apartment */}
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h3 className="text-warning">Rent an Apartment</h3>
              <p className="text-purple">
                Find a wide range of apartments for rent, from cozy studios to luxurious multi-bedroom homes. Whether you're looking for a short-term rental or a long-term home, we’ve got you covered.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="/DefiningPageImages/rent_apartment.jpg"
                alt="Rent Apartment"
                className="img-fluid"
              />
            </Col>
          </Row>

          {/* Rent Car */}
          <Row className="align-items-center mb-5 flex-row-reverse">
            <Col lg={6}>
              <h3 className="text-warning">Rent a Car</h3>
              <p className="text-purple">
                Explore the best rental car deals in Cyprus. Choose from a variety of vehicles, from compact cars to SUVs, perfect for any travel occasion or adventure.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="/DefiningPageImages/rent_car.jpg"
                alt="Rent Car"
                className="img-fluid"
              />
            </Col>
          </Row>

          {/* Sell and Buy Cars */}
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h3 className="text-warning">Sell and Buy Cars</h3>
              <p className="text-purple">
                Whether you’re looking to sell your car or purchase a new one, we provide the best platform to connect buyers and sellers. Discover great deals on all types of vehicles.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="/DefiningPageImages/sell_buy_cars.jpg"
                alt="Sell and Buy Cars"
                className="img-fluid"
              />
            </Col>
          </Row>

          {/* Sell and Buy Electronics */}
          <Row className="align-items-center mb-5 flex-row-reverse">
            <Col lg={6}>
              <h3 className="text-warning">Sell and Buy Electronics</h3>
              <p className="text-purple">
                Buy or sell the latest electronics, including smartphones, laptops, home appliances, and more. Our marketplace makes it easy to find great deals and sell your items quickly.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="/DefiningPageImages/sell_buy_electronics.jpg"
                alt="Sell and Buy Electronics"
                className="img-fluid"
              />
            </Col>
          </Row>
        </section>

        {/* Work With Us Section */}
        <section className="work-with-us-section py-5 text-center text-light" style={{ backgroundColor: '#333' }}>
          <Container>
            <h2 className="text-warning mb-4">Work With Us</h2>
            <p className="lead mb-4">
              Are you looking for easy and rewarding opportunities in Cyprus? Join us at <strong>The Cyprus Market</strong> and take advantage of the growing demand for rentals, sales, and more.
            </p>
            <p className="mb-4">
              Whether you’re interested in working with apartments, cars, or electronics, we have the perfect opportunities waiting for you! We offer flexible work arrangements, easy-to-use tools, and a supportive community to help you thrive.
            </p>
            <Button className="pumping-button yellow-button" onClick={() => navigate('/learn-more')}>
              Learn More
            </Button>
          </Container>
        </section>

        {/* Website Definition Section */}
        <section className="definition-section py-5 text-light">
          <Container>
            <h2 className="text-center text-warning mb-4">Cyprus Market</h2>
            <p className="text-center">
              The Cyprus Market is the number one platform in Northern Cyprus for facilitating buying, selling, and renting of apartments, cars, and electronics. Our highly trusted platform ensures safe transactions, allowing you to pay securely. We offer pay on delivery and pay after deal completion.
            </p>
          </Container>
        </section>

        {/* Footer Section */}
        <Footer />
      </Container>
    </>
  );
}

export default DefiningPage;
