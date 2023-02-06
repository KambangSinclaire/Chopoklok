import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/Images/ava-1.jpg";
import ava02 from "../../../assets/Images/ava-2.jpg";
import ava03 from "../../../assets/Images/ava-3.jpg";

/* import "../../../Styles/slider.css"; */

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Wooooow! ChopOklok is the real deal bro. Thanks so much. Delicious is the woordd!!!
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          The food here is fire...
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          OMG! Short of words, simply the best I've had in recent times. 
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;