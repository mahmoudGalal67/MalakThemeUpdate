// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./brands.css";

function Brands() {
  return (
    <div className="brands">
      <div className="info">
        <h3>ماركات ستحبها</h3>
        <p>أفضل الماركات العالمية</p>
      </div>
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 7,
          },
        }}
        // install Swiper modules
        modules={[Navigation, A11y]}
        slidesPerView={2}
        spaceBetween={10}
        speed="1000"
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/3fL5exDNb0IlfGDZhwCXh8Cegwi3ekp08lIzrQDt.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/w4mBzUJ4qjBUQkbhQqgDvvuJpiCYou56fDGUlRFm.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/Q26ivQyuW3UczH634RBhOuiw6YYmjgsuL3PODJYZ.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/nDRx6j72QUPyb5zhCi1CypZRgExv3rriSIJKMs8S.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/LM0NEVtvoIMabuHJQX3mmnAILT6mdcptVlfQVFjo.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/3fL5exDNb0IlfGDZhwCXh8Cegwi3ekp08lIzrQDt.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/w4mBzUJ4qjBUQkbhQqgDvvuJpiCYou56fDGUlRFm.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/Q26ivQyuW3UczH634RBhOuiw6YYmjgsuL3PODJYZ.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/nDRx6j72QUPyb5zhCi1CypZRgExv3rriSIJKMs8S.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper">
            <img
              src="brands/LM0NEVtvoIMabuHJQX3mmnAILT6mdcptVlfQVFjo.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Brands;
