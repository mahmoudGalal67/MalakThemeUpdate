import React from "react";

import CountUp from "react-countup";

import "./Feature.css";

function Features() {
  return (
    <div className="features">
      <div className="info">
        <h3>مميزات المتجر</h3>
        <p>أفضل متجر في السعودية</p>
      </div>
      <div className="wrapper">
        <div className="item">
          <img src="customer.gif" alt="" style={{ width: "60px" }} />
          <CountUp
            start={0}
            end={700}
            duration={5}
            separator=" "
            prefix="Client "
            suffix=" +"
          ></CountUp>
          <p>يحب منتجاتنا</p>
        </div>
        <div className="item">
          <img src="bar-chart.gif" alt="" style={{ width: "60px" }} />
          <CountUp
            start={0}
            end={5}
            duration={5}
            separator=" "
            prefix="Star 5 / "
          ></CountUp>
          <p>أفضل متجـر</p>
        </div>
        <div className="item">
          <img src="like.gif" alt="" style={{ width: "60px" }} />
          <CountUp
            start={0}
            end={160}
            duration={5}
            separator=" "
            prefix="Revision "
            suffix=" +"
          ></CountUp>
          <p>عدد التقييمات</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
