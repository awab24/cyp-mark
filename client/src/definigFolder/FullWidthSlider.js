// FullWidthSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FullWidthSlider.css';

const FullWidthSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <img src="Headers/slider1.png" alt="Slide 1" />
                </div>
                <div className="slide">
                    <img src="Headers/slider5.png" alt="Slide 2" />
                </div>
                <div className="slide">
                    <img src="Headers/slider3.png" alt="Slide 3" />
                </div>


            </Slider>
        </div>
    );
};

export default FullWidthSlider;
