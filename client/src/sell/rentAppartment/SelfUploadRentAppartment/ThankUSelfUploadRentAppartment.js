import React from 'react';
import './ThankYouPage.css'; // Import a separate CSS file for body styling
import { useNavigate } from 'react-router-dom';

const ThankUSelfUploadRentAppartment = () => {
    const navigate = useNavigate()
  return (
    <div className="thank-you-container text-center my-5">
      <div className="checkmark" style={{ fontSize: '100px', color: 'green' }}>✔</div>
      <h1 className="my-4" style={{ color: 'yellow' }}>Apartment Uploaded Successfully!</h1>
      <p className="lead mb-5" style={{ color: 'yellow' }}>
        Congratulations! Now your apartment has been uploaded successfully. Related customers will see it and they will contact you in your phone number, so stay tuned!
      </p>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button 
          className="btn btn-warning btn-lg"
          style={{ backgroundColor: 'yellow', color: 'black', borderRadius: '5px' }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = 'green'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'yellow'}
          onClick={() => navigate('/rent-your-appartment')}
        >
          Upload Another
        </button>
        <button 
          className="btn btn-warning btn-lg"
          style={{ backgroundColor: 'yellow', color: 'black', borderRadius: '5px' }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = 'green'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'yellow'}
          onClick={() => navigate('/rent-appartment-competitors')}
        >
          See Your Competitors
        </button>
      </div>
    </div>
  );
}

export default ThankUSelfUploadRentAppartment;