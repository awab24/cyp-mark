import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setAppartment } from '../../../reducers/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { storage } from '../../../Firebase/Firebase';

const AwabAppartUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appartmentData = useSelector((state) => state.allow.appartment);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedNationalities, setSelectedNationalities] = useState([]);
  const [selectedSex, setSelectedSex] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState('');
  const [deposit, setDeposit] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photos, setPhotos] = useState([]);
  const [previewPhotos, setPreviewPhotos] = useState([]); // For photo previews

  const cities = ['Lefkosa', 'Girne'];
  const sizes = ['3+1', '2+1', '1+1', 'Studio'];
  const prices = [450, 500, 550, 600];
  const people = [1, 2, 3, 4, 5, 6];
  const nationalities = ['Turkish', 'Moroccan', 'Sudanese', 'Yemenian', 'Nigerian', 'Kongo', 'Russian', 'Syrian', 'Egyptian', 'any'];
  const sexes = ['Male', 'Female', 'any'];
  const rentalPeriods = ['3 months', '6 months'];
  const deposits = ['1 deposit', '2 deposits'];

  const toggleSelection = (item, setSelected, selected) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleFileUpload = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    setPhotos([...photos, ...selectedFiles]);
  
    const uploadedFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const storageRef = ref(storage, `apartments/${file.name}`);
      await uploadBytes(storageRef, file); // Upload the file to Firebase Storage
      const downloadURL = await getDownloadURL(storageRef); // Get the file URL after upload
      uploadedFiles.push(downloadURL); // Store the download URL for future use
    }
    setPreviewPhotos(uploadedFiles); // Set previews using URLs
    console.log('uploaded files =========>>> ',uploadedFiles)
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form submission logic
    const formData = {
      phoneNumber,
      city: selectedCity,
      size: selectedSize,
      price: selectedPrice,
      numberOfPersons: selectedPeople.join(','),
      nationalities: selectedNationalities.join(','),
      sex: selectedSex,
      rentalPeriod,
      depositAmount: deposit,
      description,
      photos: previewPhotos, // Use Firebase URLs instead of local paths
    };
  
    try {
      const response = await axios.post('http://localhost:3000/api/endpoints/upload-rent-apartment', formData);
      console.log('Upload success', response.data);
      navigate('/self-upload-rent-appartment/deadend');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <h2 className="text-center" style={{ color: 'yellow' }}>Upload Apartment for Rent</h2>
      <form onSubmit={handleSubmit}>
        {/* All other form fields */}

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

        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Apartment City:</label>
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

        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Apartment Size:</label>
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

        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Apartment Price:</label>
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

        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Number of People:</label>
          <div>
            {people.map(person => (
              <button
                key={person}
                type="button"
                className={`btn ${selectedPeople.includes(person) ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => toggleSelection(person, setSelectedPeople, selectedPeople)}
              >
                {person} {person === 1 ? 'Person' : 'People'}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" style={{ color: 'purple' }}>Nationalities Needed:</label>
          <div>
            {nationalities.map(nationality => (
              <button
                key={nationality}
                type="button"
                className={`btn ${selectedNationalities.includes(nationality) ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => toggleSelection(nationality, setSelectedNationalities, selectedNationalities)}
              >
                {nationality}
              </button>
            ))}
          </div>
        </div>

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
                ${depositAmount}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Photos of the Apartment:</label>
          <input type="file" className="form-control" multiple onChange={handleFileUpload} />
        </div>

        {/* Photo Previews */}
        <div className="mb-3">
          {previewPhotos.map((photo, index) => (
            <img key={index} src={photo} alt="Preview" style={{ width: '150px', height: '150px', margin: '10px', objectFit: 'cover' }} />
          ))}
        </div>


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

export default AwabAppartUpload;
