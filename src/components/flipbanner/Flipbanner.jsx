import ReactFlipCard from "reactjs-flip-card";

import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <ReactFlipCard
        style={{ width: "100%" }}
        frontStyle={{}}
        backStyle={{}}
        frontComponent={
          <img src="flipbanner1.webp" alt="" style={{ width: "100%" }} />
        }
        backComponent={
          <img src="flipbanner2.webp" alt="" style={{ width: "100%" }} />
        }
      />
    </div>
  );
}

export default Banner;
