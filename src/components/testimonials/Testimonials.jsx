// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./testimonials.css";

function Testimonials({ mainSlider }) {
  return (
    <div className="testimonials">
      <h3>قالوا عن متجرنا</h3>
      <div className="wrapper">
        <Swiper
          // install Swiper modules
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          speed="1000"
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="item">
              <img src="MC32s5316MeHYch1Oe2X1upqaILxS4QzaAGXQ8S6.webp" alt="" />
              <h3>Mohamed Farid</h3>
              <div className="rating">
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
              </div>
              <span>very good</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="MC32s5316MeHYch1Oe2X1upqaILxS4QzaAGXQ8S6.webp" alt="" />
              <h3>Mohamed Farid</h3>
              <div className="rating">
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
              </div>
              <span>very good</span>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
          >
            <div className="item">
              <img src="MC32s5316MeHYch1Oe2X1upqaILxS4QzaAGXQ8S6.webp" alt="" />
              <h3>Mohamed Farid</h3>
              <div className="rating">
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
              </div>
              <span>very good</span>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
          >
            <div className="item">
              <img src="MC32s5316MeHYch1Oe2X1upqaILxS4QzaAGXQ8S6.webp" alt="" />
              <h3>Mohamed Farid</h3>
              <div className="rating">
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
              </div>
              <span>very good</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
