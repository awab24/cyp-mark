import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from '../../../Firebase/Firebase';

const AwabRCar = () => {
  const navigate = useNavigate();

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedMachineType, setSelectedMachineType] = useState('');
  const [selectedSeats, setSelectedSeats] = useState(''); // Updated seats state to work with buttons
  const [rentalPeriod, setRentalPeriod] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photos, setPhotos] = useState([]);
  const [previewPhotos, setPreviewPhotos] = useState([]); // For photo previews

  // Lists for cars
  const makes = ['Mercedes-Benz', 'Nissan', 'BMW', 'Toyota', 'Ford', 'Honda'];
  const models = {
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLE', 'S-Class', 'G-Class'],
    'Nissan': ['Altima', 'Rogue', 'Maxima', 'Sentra', 'Leaf'],
    'BMW': ['X3', 'M3', 'X5', '5 Series', '3 Series'],
    'Toyota': ['Corolla', 'Camry', 'RAV4', 'Prius', 'Yaris'],
    'Ford': ['Mustang', 'Focus', 'Explorer', 'F-150', 'Edge'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Fit']
  };

  const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015 or Older'];
  const fuelTypes = ['Gasoline', 'Diesel', 'Electric'];
  const machineTypes = ['Manual', 'Automatic'];
  const seatOptions = ['2', '4']; // Added seat options as buttons
  const rentalPeriods = ['1 Week', '2 Weeks', '3 Weeks', '4 Weeks', '1 Month', '2 Months', '3 Months', '4 Months and more'];
  const prices = {
    '1 Week': ['Less than $70', '$70 - $100', '$100 - $150'],
    '1 Month': ['$150 - $230', '$230 - $300', '$300 - $400'],
    '3 Months': ['$400 - $500', '$500 - $600', '$600 - $700'],
    '4 Months and more': ['$700 - $800', '$800 - $1000', '$1000 and more']
  };

  const handleFileUpload = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    setPhotos([...photos, ...selectedFiles]);

    const uploadedFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const storageRef = ref(storage, `cars/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      uploadedFiles.push(downloadURL);
    }
    setPreviewPhotos(uploadedFiles);
    console.log('uploaded files =========>>> ', uploadedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      phoneNumber,
      make: selectedMake,
      model: selectedModel,
      year: selectedYear,
      fuelType: selectedFuelType,
      machineType: selectedMachineType,
      seats: selectedSeats, // Added seats to form data
      rentalPeriod,
      price: selectedPrice,
      description,
      photos: previewPhotos, // Use Firebase URLs instead of local paths
    };

    try {
      const response = await axios.post('http://localhost:3000/api/endpoints/upload-car-rental', formData);
      console.log('Upload success', response.data);
      navigate('/car-rental-upload/success');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2 className="text-center" style={{ color: 'yellow' }}>Upload Car for Rent</h2>
      <form onSubmit={handleSubmit}>
        {/* Phone Number */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Phone Number:</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter phone number" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>

        {/* Car Make */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Car Make:</label>
          <div>
            {makes.map(make => (
              <button
                key={make}
                type="button"
                className={`btn ${selectedMake === make ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => setSelectedMake(make)}
              >
                {make}
              </button>
            ))}
          </div>
        </div>

        {/* Car Model */}
        {selectedMake && (
          <div className="mb-3">
            <label className="form-label" style={{ color: 'purple' }}>Car Model:</label>
            <div>
              {models[selectedMake].map(model => (
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

        {/* Year of Manufacture */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Year of Manufacture:</label>
          <div>
            {years.map(year => (
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

        {/* Fuel Type */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Fuel Type:</label>
          <div>
            {fuelTypes.map(fuelType => (
              <button
                key={fuelType}
                type="button"
                className={`btn ${selectedFuelType === fuelType ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => setSelectedFuelType(fuelType)}
              >
                {fuelType}
              </button>
            ))}
          </div>
        </div>

        {/* Machine Type */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Machine Type:</label>
          <div>
            {machineTypes.map(machineType => (
              <button
                key={machineType}
                type="button"
                className={`btn ${selectedMachineType === machineType ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => setSelectedMachineType(machineType)}
              >
                {machineType}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Seats */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Number of Seats:</label>
          <div>
            {seatOptions.map(seatOption => (
              <button
                key={seatOption}
                type="button"
                className={`btn ${selectedSeats === seatOption ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => setSelectedSeats(seatOption)}
              >
                {seatOption}
              </button>
            ))}
          </div>
        </div>

        {/* Rental Period */}
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

        {/* Price Range */}
        {rentalPeriod && (
          <div className="mb-3">
            <label className="form-label" style={{ color: 'purple' }}>Price Range:</label>
            <div>
              {prices[rentalPeriod]?.map(price => (
                <button
                  key={price}
                  type="button"
                  className={`btn ${selectedPrice === price ? 'btn-success' : 'btn-warning'} me-2`}
                  onClick={() => setSelectedPrice(price)}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Photos Upload */}
        <div className="mb-3">
          <label className="form-label">Photos of the Car:</label>
          <input type="file" className="form-control" multiple onChange={handleFileUpload} />
        </div>

        {/* Photo Previews */}
        <div className="mb-3">
          {previewPhotos.map((photo, index) => (
            <img key={index} src={photo} alt="Preview" style={{ width: '150px', height: '150px', margin: '10px', objectFit: 'cover' }} />
          ))}
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Description:</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning w-100">Submit</button>
      </form>
    </div>
  );
};

export default AwabRCar;
