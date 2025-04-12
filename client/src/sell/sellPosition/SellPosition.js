import React from 'react';
import './SellMainHome.css'; // Reuse the existing CSS
import { useNavigate } from 'react-router-dom';

function SellPosition() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#000000', paddingTop: '50px' }}>
      <div className="row justify-content-center align-items-center text-center" style={{ minHeight: '50vh' }}>
        <div className="col-md-4 col-sm-6 my-3">
          <button
            className="btn btn-lg btn-block button-custom"
            onClick={() => navigate('self-upload-position')}
          >
            Upload the position yourself
          </button>
          <p className="text-light mt-3">
            Pay previously, provide your phone number and all the necessary information you need.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button
            className="btn btn-lg btn-block button-custom"
            onClick={() => navigate('upload-position')}
          >
            Let Us Do It for You
          </button>
          <p className="text-light mt-3">
            Contact us, we will upload it ourselves, handle your customer, and ensure the transaction is completed. We will take the commission later.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellPosition;
