import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Carousel, Col } from 'react-bootstrap';

const BuyPosition = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedPeople, setSelectedPeople] = useState(''); // Single value for people
  const [selectedNationalities, setSelectedNationalities] = useState(''); // Single value for nationality
  const [selectedSex, setSelectedSex] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState('');
  const [deposit, setDeposit] = useState('');
  const [apartments, setApartments] = useState([]);
  const [selectedSharedRoom, setSelectedSharedRoom] = useState('')

  const cities = ['Lefkosa', 'Girne', 'any'];
  const sizes = ['3+1', '2+1', '1+1', 'Studio', 'any'];
  const prices = [450, 500, 550, 600, 'any'];
  const people = [1, 2, 3, 4, 5, 6, 'any'];
  const nationalities = ['Turkish', 'Moroccan', 'Sudanese', 'Yemenian', 'Nigerian', 'Kongo', 'Russian', 'Syrian', 'Egyptian', 'any'];
  const sexes = ['Male', 'Female'];
  const rentalPeriods = ['3 months', '6 months', 'any'];
  const deposits = ['1 deposit', '2 deposits', 'any'];
  const sharedRoom = ['yes', 'No', 'any'];

  // Use useEffect to trigger a backend request every time a filter changes
  useEffect(() => {
    const fetchFilteredApartments = async () => {
      try {
        const response = await axios.get('/api/endpoints/positions-filter', {
          params: {
            city: selectedCity,
            size: selectedSize,
            price: selectedPrice,
            people: selectedPeople,
            nationality: selectedNationalities, // Send a single nationality
            sex: selectedSex,
            rentalPeriod,
            deposit,
            sharedRoom: selectedSharedRoom
          }
        });
        setApartments(response.data); // Set the apartments state with the filtered apartments
      } catch (error) {
        console.error('Error fetching filtered apartments', error);
      }
    };

    // Fetch apartments whenever any filter is changed
    fetchFilteredApartments();
  }, [selectedCity, selectedSize, selectedPrice, selectedPeople, selectedNationalities, selectedSex, rentalPeriod, deposit]);

  return (
    <div>
      <h2 className="text-center" style={{ color: 'yellow' }}>Buy a position </h2>

      {/* Apartment City Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>position City:</label>
        <div>
          {cities.map(city => (
            <button
              key={city}
              type="button"
              className={`btn ${selectedCity === city ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Apartment Size Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Positoin Size:</label>
        <div>
          {sizes.map(size => (
            <button
              key={size}
              type="button"
              className={`btn ${selectedSize === size ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Position Price:</label>
        <div>
          {prices.map(price => (
            <button
              key={price}
              type="button"
              className={`btn ${selectedPrice === price ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedPrice(price)}
            >
              ${price}
            </button>
          ))}
        </div>
      </div>

      {/* Number of People Filter (Single Selection) */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Number of People:</label>
        <div>
          {people.map(person => (
            <button
              key={person}
              type="button"
              className={`btn ${selectedPeople === person ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedPeople(person)} // Only one selection allowed
            >
              {person} 
            </button>
          ))}
        </div>
      </div>


      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Is it shared ? </label>
        <div>
          {sharedRoom.map(shared => (
            <button
              key={shared}
              type="button"
              className={`btn ${selectedSharedRoom === shared ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedSharedRoom(shared)}
            >
              ${shared}
            </button>
          ))}
        </div>
      </div>
      {/* Nationalities Filter (Single Selection) */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Nationalities Needed:</label>
        <div>
          {nationalities.map(nationality => (
            <button
              key={nationality}
              type="button"
              className={`btn ${selectedNationalities === nationality ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedNationalities(nationality)} // Only one selection allowed
            >
              {nationality}
            </button>
          ))}
        </div>
      </div>

      {/* Sex Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Sex:</label>
        <div>
          {sexes.map(sex => (
            <button
              key={sex}
              type="button"
              className={`btn ${selectedSex === sex ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedSex(sex)}
            >
              {sex}
            </button>
          ))}
        </div>
      </div>

      {/* Rental Period Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Rental Period:</label>
        <div>
          {rentalPeriods.map(period => (
            <button
              key={period}
              type="button"
              className={`btn ${rentalPeriod === period ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setRentalPeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Deposit Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Deposit Amount:</label>
        <div>
          {deposits.map(depositAmount => (
            <button
              key={depositAmount}
              type="button"
              className={`btn ${deposit === depositAmount ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setDeposit(depositAmount)}
            >
              {depositAmount}
            </button>
          ))}
        </div>
      </div>

      {/* Display filtered apartments */}
      <div>
        <h3 style={{ color: 'purple' }}>Available Positions :</h3>
        {apartments.length > 0 ? (
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
                    <strong>Is it shared: </strong> {apartment.roomShared}<br/>
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
        ) : (
          <p>No apartments found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default BuyPosition;

