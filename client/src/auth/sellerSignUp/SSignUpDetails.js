import React, { useState } from 'react';
import './sellerSignUp.css'; // Create a separate CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SSignUpDetails = () => {
  const navigate = useNavigate();
  const [alreadyClientExist, setAlreadyClientExist] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

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

    // Password matching validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const responseProvider = await axios.post('http://localhost:3000/api/endpoints/insertSeller', formData);
      const providerToken = responseProvider.data;
      
      if (!providerToken) {
        setAlreadyClientExist(true);
      } else {
        localStorage.setItem('providerToken', JSON.stringify(providerToken));
        navigate("category");
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Surname</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
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

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button
          type="button"
          className="submit-button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <div className="sign-in-link">
        <a href="/sign-in">Already have an account? Let's sign in</a>
      </div>
      </form>

    </div>
  );
};

export default SSignUpDetails;
