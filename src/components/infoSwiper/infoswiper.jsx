// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./infoSwiper.css";
import { useRef } from "react";

function infoswiper({ mainSlider }) {
  const ref1 = useRef(null);
  const isInView = useInView(ref1);

  const sliderVarients = {
    hidden: {
      opacity: 0,
      x: -400,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      speed="1000"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide
        className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
      >
        {({ isActive }) => (
          <AnimatePresence>
            <motion.div
              ref={ref1}
              className="wrapper"
              variants={sliderVarients}
              initial="hidden"
              exit="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img
                src="QpxDG46St47Ju40e3uH5ODQxFqS3mM8k8UEnqRdG.webp"
                style={{ width: "60%" }}
                alt=""
              />
              <p>خصم 25% على منتجات Logiteck</p>
              <h3>أفضل التخفيضات 2023</h3>
              <a href="">تسوق التخفيضات %</a>
            </motion.div>
          </AnimatePresence>
        )}
      </SwiperSlide>
      <SwiperSlide
        className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
      >
        {({ isActive }) => (
          <AnimatePresence>
            <motion.div
              className="wrapper"
              variants={sliderVarients}
              initial="hidden"
              exit="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <p>يمكنك إضافة بانر بمقاس كبير أو</p>
              <h3>مقاس مخصص للجوال</h3>
              <a href="">اعرف المزيد</a>
            </motion.div>
          </AnimatePresence>
        )}
      </SwiperSlide>
      <SwiperSlide
        className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
      >
        {({ isActive }) => (
          <AnimatePresence>
            <motion.div
              className="wrapper"
              variants={sliderVarients}
              initial="hidden"
              exit="hidden"
              animate={isActive ? "visible" : "hidden"}
              style={{ flexDirection: "row", display: "flex" }}
            >
              <div className="image-wrapper" style={{ width: "240px" }}>
                <img src="mainlogo.webp" style={{ width: "100%" }} alt="" />
              </div>
              <div
                className="wrapper"
                style={{ padding: "0 8%", textAlign: "end" }}
              >
                <h3>اكتشف عالم جديد من الإبداع</h3>
                <p>
                  وتحكم بأدق تفاصيل تصميم متجرك الإلكتروني مع ثيم مَـلاك المميز
                  والجديد كليًا على منصة سلة.
                </p>
                <a href="">ابدأ الآن</a>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </SwiperSlide>
    </Swiper>
  );
}

export default infoswiper;
