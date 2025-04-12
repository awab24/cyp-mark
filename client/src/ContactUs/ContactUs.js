import React from 'react';


const ContactUs = () => {
  return (
    <div className="contact-us-container" style={{ backgroundColor: 'black', color: 'yellow', padding: '50px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us anytime!</p>
      <p>You can always contact us on WhatsApp at:</p>
      <a href="https://wa.me/905338801877" target="_blank" rel="noopener noreferrer" style={{ color: 'green', fontSize: '24px' }}>
        +90 533 880 1877
      </a>
      <p style={{ marginTop: '20px' }}>We’re here to help you with anything related to Cyprus Market.</p>
    </div>
  );
};

export default ContactUs;
