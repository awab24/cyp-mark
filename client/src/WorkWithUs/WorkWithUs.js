import React from 'react';
import './WorkWithUs.css'; // Import custom styles

const WorkWithUs = () => {
  return (
    <div className="work-with-us-container">
      <div className="content">
        <h1>Join Us & Earn!</h1>
        <p>
          Work with us as a <strong>Marketer</strong> and bring buyers to earn your commission immediately, or as a <strong>Deal Closer</strong>, taking care of the deal until it's finalized.
        </p>
        <p className="contact-info">
          For both you should contact us at: <strong>+905338801877</strong>
        </p>
        
        <div className="buttons-container">
          <a href="tel:+905338801877" className="cta-button marketer">
            Become a Marketer
          </a>
          <a href="tel:+905338801877" className="cta-button deal-closer">
            Become a Deal Closer
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;

