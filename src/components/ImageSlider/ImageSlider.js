import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  //Slider setting
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };


  //Slider Image Url
  const sliderImg = [
    "/images/slider-badging.jpg",
    "/images/slider-scale.jpg ",
    "/images/slider-scales.jpg ",
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {sliderImg.map((url) => {
          return(
            <div className="slider_img">
            <img src={url}></img>
          </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
