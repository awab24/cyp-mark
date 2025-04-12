import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from 'react-icons/fa';
import './SiteUploadAppartment.css'

function SiteUploadAppartment() {
  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center mb-3">
        <FaWhatsapp color="green" size="1.5em" />
        <h5 className="ml-2">Send all the below information to <a href="https://wa.me/905338801877" target="_blank" rel="noopener noreferrer">+905338801877</a>:</h5>
      </div>
      <div className="p-3 bg-warning rounded steps-box" style={{ transition: 'background-color 0.3s' }}>
      <ol>
  <li>Apartment city</li>
  <li>Apartment size</li>
  <li>Apartment price</li>
  <li>How many people should be inside it</li>
  <li>Photos of the apartment</li>
  <li>Nationalities needed</li>
  <li>Rental period (monthly/annual)</li>
  <li>Deposit amount</li>
</ol>


      </div>
    </div>
  );
}

export default SiteUploadAppartment;
