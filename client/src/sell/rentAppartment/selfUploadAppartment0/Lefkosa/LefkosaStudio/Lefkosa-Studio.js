import React from 'react';
import '../../../SellMainHome.css'; // Reuse the existing CSS
import { useNavigate } from 'react-router-dom';

function LefkosaStudio() {
    const navigate = useNavigate()
  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('450')}>
            450
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('500')}>
            500
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('550')}>
            550
          </button>
        </div>
        <div className="col-md-4 col-sm-6 my-3">
          <button className="btn btn-lg btn-block button-custom" onClick={() => navigate('600')}>
            600
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

export default LefkosaStudio;
