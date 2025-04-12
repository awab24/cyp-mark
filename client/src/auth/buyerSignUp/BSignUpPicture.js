import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const BSignUpPicture = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // You can send the file to your backend here
      console.log('File ready to be uploaded:', file);
    } else {
      console.log('No file selected');
    }
  };
const handleNextClick = () => {
  navigate('/buy-main-home')
}
  return (
    <div className="upload-profile-container" style={{ backgroundColor: 'black', color: 'white' }}>
      <h2>Upload Your Profile Picture</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ margin: '20px 0', color: 'yellow' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'yellow',
            color: 'black',
            padding: '10px 20px',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'blue'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'yellow'}
        >
          Upload Picture
        </button>
      </form>
      
      <button
          onClick={handleNextClick}
          className="next-button"
          style={{
            backgroundColor:  'yellow',
            color: 'black',
            marginTop: '30px',
            padding: '15px 60px',
            fontSize: '22px',
            cursor: 'pointer',
            borderRadius: '8px',
            transition: 'background-color 0.3s ease',
          }}
     
        >
          Next
        </button>
        <div className="sign-in-link">
        <a href="/sign-in">Already have an account? Let's sign in</a>
      </div>
    </div>
  );
};

export default BSignUpPicture;
