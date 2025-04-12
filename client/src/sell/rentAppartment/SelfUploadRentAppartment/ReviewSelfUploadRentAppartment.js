import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ApartmentReview = () => {
  const apartmentData = useSelector((state) => state.allow.appartment);
  const navigate = useNavigate()

  if (!apartmentData) {
    return <p>Loading...</p>;
  }
const logAppartmentData = () => {
    console.log(apartmentData)
}
  return (
    <div className="container-fluid" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
       
      <h2 className="text-center" style={{ color: 'yellow' }}>Review Your Apartment Details</h2>

      <div className="mb-3">
        <h5>Phone Number:</h5>
        <p>{apartmentData.phoneNumber || 'Not provided'}</p>
      </div>

      <div className="mb-3">
        <h5>Apartment City:</h5>
        <p>{apartmentData.city || 'Not selected'}</p>
      </div>

      <div className="mb-3">
        <h5>Apartment Size:</h5>
        <p>{apartmentData.size || 'Not selected'}</p>
      </div>

      <div className="mb-3">
        <h5>Apartment Price:</h5>
        <p>${apartmentData.selectedPrice || 'Not provided'}</p>
      </div>

      <div className="mb-3">
        <h5>Number of People:</h5>
        <p>{apartmentData.numberOfPersons && apartmentData.numberOfPersons.length > 0 ? apartmentData.numberOfPersons.join(', ') : 'Not selected'}</p>
      </div>

      <div className="mb-3">
        <h5>Nationalities Needed:</h5>
        <p>{apartmentData.nationalities && apartmentData.nationalities.length > 0 ? apartmentData.nationalities.join(', ') : 'Not selected'}</p>
      </div>

      <div className="mb-3">
        <h5>Sex:</h5>
        <p>{apartmentData.sex || 'Not selected'}</p>
      </div>

      <div className="mb-3">
        <h5>Rental Period:</h5>
        <p>{apartmentData.rentalPeriod || 'Not selected'}</p>
      </div>

      <div className="mb-3">
        <h5>Deposit Amount:</h5>
        <p>${apartmentData.depositAmount || 'Not provided'}</p>
      </div>

      <div className="mb-3">
        <h5>Description:</h5>
        <p>{apartmentData.description || 'No description provided'}</p>
      </div>

      <div className="mb-3">
        <h5>Photos of the Apartment:</h5>
        <div className="d-flex">
          {apartmentData.photos && apartmentData.photos.length > 0 ? (
            apartmentData.photos.map((photo, index) => (
              <img
                key={index}
                src={URL.createObjectURL(photo)}
                alt={`Apartment Photo ${index + 1}`}
                className="img-thumbnail me-2"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            ))
          ) : (
            <p>No photos uploaded</p>
          )}
        </div>
      </div>

      <button className="btn btn-warning w-100"
      onClick={() => navigate('deadend')}
      >Confirm & Submit</button>
    </div>
  );
};

export default ApartmentReview;
