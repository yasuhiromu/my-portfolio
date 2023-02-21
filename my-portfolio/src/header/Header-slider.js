import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image00 from '../image/my-img6.jpg' 
import Image02 from '../image/my-img.jpg' 
import Image03 from '../image/my-img2.jpg' 
import Image04 from '../image/my-img3.jpg'
import Image05 from '../image/my-img4.jpg'
export default function SimpleSlider() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        interval: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
        <div>
            <img src={Image00} alt="自己分析" width="100%"/>
        </div>
        <div>
            <img src={Image02} alt="自己分析" width="100%"/>
        </div>
        <div>
            <img src={Image03} alt="自己分析" width="100%"/>
        </div>
        <div>
            <img src={Image04} alt="自己分析" width="100%"/>
        </div>
        <div>
            <img src={Image05} alt="自己分析" width="100%"/>
        </div>
        </Slider>
    );
}