import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const BSignUpCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [nextClicked, setNextClicked] = useState(false);
  const navigate = useNavigate()
  const categories = [
    'Rent an apartment',
    'Rent a car',
    'buy a car',
    'buy electronics',
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const handleNextClick = () => {
  navigate('picture')
    // You can handle the 'Next' button logic here, like navigating to the next page.
  };

  return (
    <div
      className="ssignup-details"
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <div>
        <h2 style={{ color: 'yellow', marginBottom: '20px' }}>Choose the categories you're interested in:</h2>
        <div className="categories" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
              style={{
                backgroundColor: selectedCategories.includes(category) ? 'purple' : 'yellow',
                color: 'black',
                margin: '15px',
                padding: '20px 40px',
                fontSize: '20px',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease',
              }}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="next-button"
          style={{
            backgroundColor: nextClicked ? 'purple' : 'yellow',
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

    </div>
  );
};

export default BSignUpCategory;
