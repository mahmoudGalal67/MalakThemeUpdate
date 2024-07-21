// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Product from "../product/product";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./ProductSection.css";

function ProductSection() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="products-section">
      <div className="product-banner">
        <div className="info-section">
          <h3>الحقوق محفوظة متجر تجريبي 2024</h3>
          <p>اكتشف أحدث الساعات والأجهزة الذكية 2023</p>
          <a className="more-link" href="">
            <svg
              style={{ width: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            أعرف المزيد
          </a>
        </div>
        <video
          className="header-video"
          width="100%"
          loop
          autoPlay
          muted
          playsInline
          __idm_id__="163841"
        >
          <source
            src="https://www.apple.com/105/media/ww/ipad-pro/2022/08087f4b-7539-4b1e-ae8a-adc18f4242ae/anim/hover/large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="products-slider-wrapper">
        <Swiper
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          // install Swiper modules
          modules={[Navigation, A11y]}
          slidesPerView={2}
          spaceBetween={10}
          navigation
          speed="1000"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {products.map((product) => (
            <SwiperSlide key={product}>
              <Product slider={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSection;
