import React from 'react';
import './SellMainHome.css'; // Reuse the existing CSS
import { useNavigate } from 'react-router-dom';

function SUACity() {
    const navigate = useNavigate()
  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Lefkoşa')}>
            3 + 1
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Girne')}>
            2 + 1
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Girne')}>
            1 + 1
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Girne')}>
            studio
          </button>
        </div>
        {/* <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Gazimağusa')}>
          Gazimağusa
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
        <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Güzelyurt')}>
        Güzelyurt
        </button>
      </div>
      
      <div className="col-md-4 col-sm-6 my-3">
      <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('İskele')}>
      İskele
      </button>
    </div>
          <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Lefke')}>
          Lefke
          </button>
        </div>
        
        <div className="col-md-4 col-sm-6 my-3">
        <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('Bafra')}>
        Bafra
        </button>
      </div>
     */}
      </div>
    </div>
  );
}

export default SUACity;
