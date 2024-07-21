import Countdown from "react-countdown";

import { delay, motion } from "framer-motion";

import "./product.css";

function product({ slider, index }) {
  const staggerde = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const Finished = () => <span>You are good to go!</span>;
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <span className="count-down">
          <span>{days}</span>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </span>
      );
    } else {
      // Render a finished state
      return <Finished />;
    }
  };
  return (
    <motion.div
      variants={staggerde}
      initial="initial"
      animate="animate"
      transition={{
        delay: index / 2,
        type: "spring",
        mass: 0.2,
        damping: 6,
        stiffness: 20,
      }}
      className={slider ? "product product-slider" : "product"}
    >
      <div className="wrapper">
        <div className="extra-info">ملاك</div>
        <div className="sale">50%</div>
        <img
          src="product/hj8KfYe8zM7mdY4XPHmF7Tfbb0EnluxcH6uDdM8p.webp"
          alt=""
        />
        <div className="count-down-product">
          <Countdown
            date={Date.now() + 500000000}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
          ></Countdown>
        </div>
        <a href="#">
          ميت بوك D 14 2021 مقاس 14 بوصة TGL-i3 UMA LPDDR4X 8 جيجابايت هارد SSD
          256 جيجابايت ويندوز 11 لون فضي من هواوي
        </a>
        <div className="price-wrapper">
          <div className="old-price">ر.س 85</div>
          <div className="new-price">50 ر.س</div>
        </div>
        <div className="button-wrapper">
          <a className="heart" href="#">
            <svg
              style={{ width: "30px", color: "gray" }}
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a className="cart" href="#">
            أضف للسلة
            <svg
              style={{ width: "30px", color: " rgb(53, 53, 53) " }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default product;
