import React from 'react';
import './DetermineSignUp.css'; // You can add your custom CSS here
import { useNavigate } from 'react-router-dom';

function DetermineSignUp() {
  const navigate = useNavigate()
  return (
    <div className="determine-signup-container">
      <h2>Are you a Seller or a Buyer?</h2>
      <div className="button-container">
        <button className="pump-button seller-button"
        onClick={() => navigate('seller-sign-up')}
        >I am a Seller</button>
        <button className="pump-button buyer-button"
        onClick={() => navigate('buyer-sign-up')}
        >I am a Buyer</button>
      </div>
      <div className="sign-in-link">
        <a href="/sign-in">Already have an account? Let's sign in</a>
      </div>
    </div>
  );
}

export default DetermineSignUp;
