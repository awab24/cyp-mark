import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SliderComponent.css'; // Custom CSS file for this slider

function SliderComponent() {
  const navigate = useNavigate();

  return (
    <div className="fullwidth-slider-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 fullwidth-image"
            src="/DefiningPageImages/apartment_rent.jpg"
            alt="Rent an Apartment"
          />
          <Carousel.Caption>
            <h3 className="text-warning">Find Your Dream Apartment</h3>
            <Button className="yellow-button box-btn" onClick={() => navigate('/auth')}>
              Browse Apartments
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fullwidth-image"
            src="/DefiningPageImages/car_rent.jpg"
            alt="Rent a Car"
          />
          <Carousel.Caption>
            <h3 className="text-warning">Rent or Lease a Car</h3>
            <Button className="yellow-button box-btn" onClick={() => navigate('/auth')}>
              Explore Cars
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fullwidth-image"
            src="/DefiningPageImages/electronics_sell.jpg"
            alt="Buy Electronics"
          />
          <Carousel.Caption>
            <h3 className="text-warning">Shop Electronics Deals</h3>
            <Button className="yellow-button box-btn" onClick={() => navigate('/auth')}>
              Shop Electronics
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderComponent;
