import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setAppartment } from '../../../reducers/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './PayPalButton.css'
const SelfUploadSellPosition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appartmentData = useSelector((state) => state.allow.appartment);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedRoomShared, setSelectedRoomShared] = useState('')
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
  const prices = [100, 110, , 120, 130, 140, 150, 160, 170, 180, 190, 200];
  const people = [1, 2, 3, 4, 5, 6];
  const nationalities = ['Turkish', 'Moroccan', 'Sudanese', 'Yemenian', 'Nigerian', 'Kongo', 'Russian', 'Syrian', 'Egyptian'];
  const sexes = ['Male', 'Female'];
  const rentalPeriods = ['3 months', '6 months'];
  const deposits = ['1 deposit', '2 deposits'];
  const roomShared = ['yes', 'No'];

  const toggleSelection = (item, setSelected, selected) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convert FileList to an array
    setPhotos([...photos, ...selectedFiles]); // Append new files
    const preview = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewPhotos([...previewPhotos, ...preview]); // Create previews for selected images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('phoneNumber', phoneNumber);
    formData.append('city', selectedCity);
    formData.append('size', selectedSize);
    formData.append('price', selectedPrice);
    formData.append('numberOfPersons', selectedPeople.join(','));
    formData.append('nationalities', selectedNationalities.join(','));
    formData.append('sex', selectedSex);
    formData.append('rentalPeriod', rentalPeriod);
    formData.append('depositAmount', deposit);
    formData.append('description', description);
    formData.append('roomShared',selectedRoomShared )

    // Append multiple files (photos)
    for (let i = 0; i < photos.length; i++) {
      formData.append('photos', photos[i]); // Sending files as form data
    }

    try {
      const response = await axios.post('http://localhost:3000/api/endpoints/upload-sell-position', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Upload success', response.data);
      navigate('/self-upload-sell-position/deadend');
    } catch (error) {
      console.error('Error:', error);
    }

    
    try {
      await axios.post('http://localhost:3000/api/endpoints/setPaidToFalse');

    } catch (error) {
      console.error('Error:', error);
    }
  };



  
  //payment--/payment--/payment////--payment//start--start--start//
  const [isPaidStatus, setIsPaidStatus] = useState(false);

  useEffect(() => {
    // Load PayPal Script
    const addPayPalScript = () => {
      if (window.paypal) {
        renderPayPalButton();
      } else {
        const script = document.createElement('script');

        // PayPal SDK script to include both PayPal and card payments (no funding sources are disabled)


        script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&components=buttons,funding-eligibility&enable-funding=card`;


        script.type = 'text/javascript';
        script.async = true;
        script.onload = renderPayPalButton;
        document.body.appendChild(script);
      }
    };

    const renderPayPalButton = () => {
      window.paypal.Buttons({
        // No funding source restriction, so both PayPal and card will be available
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '9.00', // Replace with your actual amount
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          return actions.order.capture().then(async (details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            try {
              await axios.patch('http://localhost:3000/api/endpoints/paid');
              setIsPaidStatus(true);

            } catch (error) {
              console.error('Error updating payment status: ', error);
            }
            window.location.reload();
          });
        },        
        onError: (err) => {
          console.error('PayPal Checkout Error: ', err);
          alert('An error occurred during the transaction. Please try again.');
        },
      }).render('#paypal-button-container');
    };

    addPayPalScript();
  }, []);

  useEffect(() => {
    const checkIsPaid = async() => {
      const response = await axios.get('http://localhost:3000/api/endpoints/isPaid');
      setIsPaidStatus(response.data.isPaid);
    }
    checkIsPaid();
  }, []);

  return (
    <div>
      {
        isPaidStatus ? (<>
        <h2 className="text-center" style={{ color: 'yellow' }}>Upload Position for Rent</h2>
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
          <label className="form-label" style={{ color: 'purple' }}>Number of People Inside :</label>
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
          <label className="form-label" style={{ color: 'purple' }}>Is It Shared ? </label>
          <div>
            {roomShared.map(room => (
              <button
                key={room}
                type="button"
                className={`btn ${selectedRoomShared.includes(room) ? 'btn-success' : 'btn-warning'} me-2`}
                onClick={() => toggleSelection(room, setSelectedRoomShared, selectedRoomShared)}
              >
                {room}
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
          <label className="form-label" style={{ color: 'purple' }}>Photos of the Apartment:</label>
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
        </>) : (
          <div className="payment-section">
            <Card className="payment-card">
              <Card.Body>
                <h2 className="payment-title">Unlock the Course</h2>
                <p className="payment-description">Get full access to the Facebook Ads Course by making a one-time payment of $9.00.</p>
                <div className="payment-buttons">
                  <div id="paypal-button-container" className="paypal-button"></div>
                  {/* PayPal payment button will appear here */}
                </div>
  
  
              </Card.Body>
            </Card>
  
          </div>
        )
      }
      
    </div>
  );
};

export default SelfUploadSellPosition;



