import React from 'react';
import './SellMainHome.css'; // Reuse the existing CSS
import { useNavigate } from 'react-router-dom';

function DetermineUploadRentAppartment() {
    const navigate = useNavigate();
    
    return (
        <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                
                {/* Self Upload Button */}
                <div className="col-md-4 col-sm-6 my-3 text-center">
                    <button 
                        className="btn btn-lg btn-block button-custom" 
                        onClick={() => navigate('self-upload')} 
                        style={{ backgroundColor: 'purple', color: 'black ' }}>
                        Upload the car yourself
                    </button>
                    <div className="mt-2 p-2" style={{ backgroundColor: 'purple', color: 'white' }}>
                        Pay previously with 5% commission
                    </div>
                </div>
                
                {/* Site Upload Button */}
                <div className="col-md-4 col-sm-6 my-3 text-center">
                    <button 
                        className="btn btn-lg btn-block button-custom" 
                        onClick={() => navigate('site-upload')} 
                        style={{ backgroundColor: 'purple', color: 'black' }}>
                        Let Us Do It for You
                    </button>
                    <div className="mt-2 p-2" style={{ backgroundColor: 'purple', color: 'white' }}>
                        Pay after the deal is done with 8% commission
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetermineUploadRentAppartment;
