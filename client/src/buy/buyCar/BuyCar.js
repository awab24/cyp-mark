import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Carousel, Col } from 'react-bootstrap';

const BuyCar = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedMachineType, setSelectedMachineType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedSeats, setSelectedSeats] = useState('');
  const [cars, setCars] = useState([]);

  const Makes = ['Mercedes-Benz C-Class', 'Nissan Altima', 'BMW X3', 'Toyota Corolla', 'Ford Mustang', 'Honda Civic', 'any'];
  const ModelsByMake = {
    'Mercedes-Benz C-Class': ['C-Class', 'E-Class', 'GLE', 'S-Class', 'G-Class'],
    'Nissan Altima': ['Altima', 'Rogue', 'Maxima', 'Sentra', 'Leaf'],
    'BMW X3': ['X3', 'M3', 'X5', '5 Series', '3 Series'],
    'Toyota Corolla': ['Corolla', 'Camry', 'RAV4', 'Prius', 'Yaris'],
    'Ford Mustang': ['Mustang', 'Focus', 'Explorer', 'F-150', 'Edge'],
    'Honda Civic': ['Civic', 'Accord', 'CR-V', 'Fit', 'Pilot'],
  };

  const YearOfManufacture = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015 or Older', 'any'];
  const FuelTypes = ['Gasoline', 'Diesel', 'Electric', 'any'];
  const MachineTypes = ['Manual', 'Automatic', 'any'];
  const SeatOptions = ['2', '4', 'any']; 

  // Fetch cars based on filters
  useEffect(() => {
    const fetchFilteredCars = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/endpoints/cars-buy-filter', {
          params: {
            make: selectedMake,
            model: selectedModel,
            year: selectedYear,
            fuelType: selectedFuelType,
            machineType: selectedMachineType,
            seats: selectedSeats,
            price: selectedPrice
          }
        });
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching filtered cars', error);
      }
    };

    // Fetch cars whenever any filter is changed
    fetchFilteredCars();
  }, [selectedMake, selectedModel, selectedYear, selectedFuelType, selectedMachineType, selectedSeats, selectedPrice]);

  return (
    <div>
      <h2 className="text-center" style={{ color: 'yellow' }}>Find a Car for Sale</h2>

      {/* Make Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Car Make:</label>
        <div>
          {Makes.map(make => (
            <button
              key={make}
              type="button"
              className={`btn ${selectedMake === make ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => {
                setSelectedMake(make);
                setSelectedModel(''); // Reset model when make changes
              }}
            >
              {make}
            </button>
          ))}
        </div>
      </div>

      {/* Model Filter */}
      {selectedMake && (
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Car Model:</label>
          <div>
            {ModelsByMake[selectedMake]?.map(model => (
              <button
                key={model}
                type="button"
                className={`btn ${selectedModel === model ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => setSelectedModel(model)}
              >
                {model}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Year of Manufacture Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Year of Manufacture:</label>
        <div>
          {YearOfManufacture.map(year => (
            <button
              key={year}
              type="button"
              className={`btn ${selectedYear === year ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Fuel Type Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Fuel Type:</label>
        <div>
          {FuelTypes.map(fuel => (
            <button
              key={fuel}
              type="button"
              className={`btn ${selectedFuelType === fuel ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedFuelType(fuel)}
            >
              {fuel}
            </button>
          ))}
        </div>
      </div>

      {/* Machine Type Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Machine Type:</label>
        <div>
          {MachineTypes.map(machine => (
            <button
              key={machine}
              type="button"
              className={`btn ${selectedMachineType === machine ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedMachineType(machine)}
            >
              {machine}
            </button>
          ))}
        </div>
      </div>

      {/* Number of Seats Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Number of Seats:</label>
        <div>
          {SeatOptions.map(seats => (
            <button
              key={seats}
              type="button"
              className={`btn ${selectedSeats === seats ? 'btn-success' : 'btn-warning'} me-2`}
              onClick={() => setSelectedSeats(seats)}
            >
              {seats}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label className="form-label" style={{ color: 'purple' }}>Car Price:</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter price in USD" 
          value={selectedPrice} 
          onChange={(e) => setSelectedPrice(e.target.value)} 
        />
      </div>

      {/* Display filtered cars */}
      <div>
        <h3 style={{ color: 'purple' }}>Available Cars:</h3>
        {cars.length > 0 ? (
          cars.map((car) => (
            <Col key={car._id} md={4} className="mb-4">
              <div className="car-card">
                <Card>
                  {car.photos && car.photos.length > 0 ? (
                    <Carousel>
                      {car.photos.map((photo, index) => (
                        <Carousel.Item key={index}>
                          <Card.Img
                            variant="top"
                            src={photo}
                            alt={`Car photo ${index + 1}`}
                            className="img-fluid"
                            style={{ height: '300px', objectFit: 'cover' }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ) : (
                    <div>No Image Available</div>
                  )}
                  <Card.Body style={{backgroundColor: 'yellow', color:'black'}}>
                    <Card.Title>{car.make} - ${car.price}</Card.Title>
                    <Card.Text>
                      <strong>Model:</strong> {car.model}<br />
                      <strong>Year:</strong> {car.year}<br />
                      <strong>Fuel Type:</strong> {car.fuelType}<br />
                      <strong>Machine Type:</strong> {car.machineType}<br />
                      <strong>Seats:</strong> {car.seats}<br /> 
                      <strong>Description:</strong> {car.description}<br/>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className="phone-number">
                  Contact: {car.phoneNumber ? car.phoneNumber : '+905338801877'}
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p>No cars found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default BuyCar;
