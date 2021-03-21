import React from "react";
import Slider from "react-slick";
import SliderImage  from '../components/SliderImage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const SimpleSlider = ({ image, image2, image3 }) => (
  <div>
    <Slider {...settings}>
      <div>
        <SliderImage image={image} position={'center'} title={'Commissioning, Development & Engineering Expertise'} />
      </div>
      <div>
        <SliderImage image={image2} position={'center'} title={'Owner’s Representative & Quality Inspection Services'} />
      </div>
      <div>
        <SliderImage image={image3} position={'top'} title={'Commissioning & Testing Services'} />
      </div>
    </Slider>
  </div>
)

export default SimpleSlider
