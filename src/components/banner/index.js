import React, { useRef, useState } from "react";
import "./index.scss";
import banner1 from "../../assets/banner/banner1.webp";
import banner2 from "../../assets/banner/banner2.webp";
import banner3 from "../../assets/banner/banner3.webp";

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
        <div className="banner" id="idHome">
            <Swiper
                loop={true}
                effect={"fade"}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="banner__swiper"
            >
                <SwiperSlide>
                    <div className="banner__swiper--img">
                        <img src={banner1} />
                    </div>
                    <div className="banner__swiper--text">
                        <h2>Inovação Audiovisual</h2>
                        <p>Contamos histórias cativantes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__swiper--img">
                        <img src={banner2} />
                    </div>
                    <div className="banner__swiper--text">
                        <h2>Equipamentos de qualidade</h2>
                        <p>Produzimos histórias cativantes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__swiper--img">
                        <img src={banner3} />
                    </div>
                    <div className="banner__swiper--text">
                        <h2>Gravações de excelência</h2>
                        <p>Divulgamos histórias cativantes</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
