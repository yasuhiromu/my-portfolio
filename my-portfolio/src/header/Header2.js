import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image00 from '../image/head01.jpg' 
import Image01 from '../image/head.jpg' 
export default function SimpleSlider() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
        <div>
            <img src={Image00} alt="Logo" width="100%"/>
        </div>
        <div>
            <img src={Image01} alt="Logo" width="50%"/>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
        </Slider>
    );
}