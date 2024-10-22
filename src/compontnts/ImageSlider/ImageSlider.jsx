import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="images/slider-scale.jpg" alt="Image 1" />
      </Wrap>
      <Wrap>
        <img src="images/slider-scales.jpg" alt="Image 2" />
      </Wrap>
      <Wrap>
        <img src="images/slider-badging.jpg" alt="Image 3" />
      </Wrap>
      <Wrap>
        <img src="images/slider-badag.jpg" alt="Image 4" />
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-prev,
  .slick-next {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  &:hover .slick-prev,
  &:hover .slick-next {
    opacity: 1;
  }

  button {
    z-index: 1;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
    padding: 0 10px; /* Add space between images */
  img {
    border: 1px solid white;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 300ms ease-in-out;

    &:hover {
      border: 4px solid transparent;
    }
  }
`;

export default ImageSlider;
