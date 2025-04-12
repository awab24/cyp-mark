import React, { useState } from 'react';
import './sellerSignUp.css'; // Reusing the same CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  let responseClient;
  let clientToken;
  let responseProvider;
  let providerToken;
  const [notAllowed, setNotAllowed] = useState(false)
  const [clientResult, setClientResult] = useState(true);
  const [providerResult, setProviderResult] = useState(true);

  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  });
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    const phoneNumberPattern = /^[+]?[0-9]*$/;
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number containing only numbers.");
      return; // Stop form submission
    }

    try {
      const response = await axios.post('http://localhost:3000/api/endpoints/providerSignIn', formData);
      const token = response.data;

      if (!token) {
        setInvalidCredentials(true);
      } else {
        localStorage.setItem('providerToken', JSON.stringify(token));
        navigate("/sell-main-home"); // Navigate to the dashboard or any relevant page
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };



  
  const handleClick = async () => {

    try {
      try {
        responseClient = await axios.post('http://localhost:3000/api/endpoints/clientSignIn', formData);
        clientToken = responseClient.data;
        localStorage.setItem('clientToken', JSON.stringify(clientToken));
      } catch (error) {
        setClientResult(false);

        try {
          responseProvider = await axios.post('http://localhost:3000/api/endpoints/providerSignIn', formData);
          providerToken = responseProvider.data;
          localStorage.setItem('providerToken', JSON.stringify(providerToken));
        } catch (secondError) {
          setProviderResult(false);
          console.error('Both sign-in attempts failed:', secondError);
          return;
        }
      }

      localStorage.setItem('authenticated', 'true');


      responseClient && navigate('/buy-main-home');
      responseProvider && navigate('/sell-main-home');

    } catch (error) {
      console.error('Sign-in failed:', error);
      setNotAllowed(true);
      localStorage.setItem('authenticated', 'false');

    }

  };
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign In</h2>

        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {invalidCredentials && <p style={{ color: 'red' }}>Invalid credentials, please try again.</p>}

        <button
          type="button"
          className="submit-button"
          onClick={handleClick}
        >
          Sign In
        </button>

        <p>Don't have an account? <a href="/auth">Sign up here</a></p>

      </form>

    </div>
  );
};

export default SignIn;
