// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./games.css";

function Games() {
  return (
    <div className="games">
      <img src="games/dwsOEQ25bEqkDAnNbZlbaUibRB94QfFd7Qeu3Hlv.webp" alt="" />
      <div className="wrapper">
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
            <img
              src="games/t4BJWkDVC1ArHaf0UkB6vvL3m5h0qg10HpmY0sZ5.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="games/p0XgP7OhKY58rwv9mDxXe1xcCzB7Szx1yPYaO82I.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="games/6jZjxtS5qqbK9bMB4GrR98xNDV7ZzG4kloRtidGk.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="games/MpWGzRWvpuoAGFnifyuRIDyW0hWvgkIocB01trtw.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="games/WBzoj5lRYsYBsh2poH3qIty0syRssaZlD9rOHQ2j.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="games/YQbl3UBHLQB0BU6375LMLiwI3d1GltSzSeL0Ohem.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Games;
