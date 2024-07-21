import Countdown from "react-countdown";

import { motion } from "framer-motion";

import Product from "../product/product";
import "./CountDownProducts.css";

const products = [1, 2, 3, 4];

function CountDownProducts() {
  const loop = {
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  const Finished = () => <span>You are good to go!</span>;
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <div className="count-down-wrapper">
          <span className="count-down">
            <span>
              {days} <span>يوم</span>
            </span>
            <span>
              {hours} <span>ساعة</span>
            </span>
            <span>
              {minutes} <span>دقيقة</span>
            </span>
            <span>
              {seconds} <span>ُثانية</span>
            </span>
          </span>
        </div>
      );
    } else {
      // Render a finished state
      return <Finished />;
    }
  };
  return (
    <div>
      <div className="count-header">
        <div className="break-line"></div>
        <div className="count-header-title">
          <motion.img
            variants={loop}
            animate="animate"
            src="mainlogo.webp"
            style={{ width: "60px" }}
            alt=""
          />
          <h3>عام كامل من الابداع</h3>
          <p>خصم لفترة محدودة</p>
          <Countdown
            date={Date.now() + 500000000}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
          ></Countdown>
          <a className="title" href="#">
            تصفح المزيد
          </a>
        </div>
        <div className="break-line"></div>
      </div>
      <div className="products-wrapper">
        {products.map((product, i) => (
          <Product key={product} index={i} />
        ))}
      </div>
    </div>
  );
}

export default CountDownProducts;
