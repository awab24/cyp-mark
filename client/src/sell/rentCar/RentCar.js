import React from 'react';
import './SellMainHome.css'; // Reuse the existing CSS
import { useNavigate } from 'react-router-dom';

function RentCar() {
    const navigate = useNavigate()
  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('self-upload-car-rent')}>
            Upload the car yourself
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('upload-car-rent')}>
            Let Us Do It for You
          </button>
        </div>
      </div>
    </div>
  );
}

export default RentCar;