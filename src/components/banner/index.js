import React, { useRef, useState } from "react";
import "./index.scss";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function Banner() {
    return (
        <div className="banner">
            <Swiper
                loop={true}
                effect={"fade"}
                pagination={true}
                modules={[Autoplay, EffectFade, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="banner__swiper"
            >
                <SwiperSlide>
                    <img src={banner1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
