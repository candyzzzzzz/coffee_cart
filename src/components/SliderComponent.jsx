import React from "react";
import sliderData from "../data/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderComponent.css"; // for custom styling

function SliderComponent() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        modules={[Navigation, Pagination]}
      >
        {sliderData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <div className="slide-content">
                <h2>{slide.caption}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-swiper-prev custom-swiper-nav">
          <FaChevronLeft />
        </div>
        <div className="custom-swiper-next custom-swiper-nav">
          <FaChevronRight />
        </div>
      </Swiper>
      <div className="custom-swiper-pagination" style={{ marginTop: 24 }}></div>
    </div>
  );
}

export default SliderComponent;
