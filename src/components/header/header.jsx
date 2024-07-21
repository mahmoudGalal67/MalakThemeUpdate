import React from "react";

import "./header.css";

function header() {
  return (
    <div>
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
      <div className="main-cards">
        <div className="wrapper flex">
          <div className="img-wrapper">
            <img src="3LKUF3GIbvVePQSC9RAZHFT1X2vzywkGDwachqmY.webp" alt="" />
          </div>

          <div className="img-wrapper">
            <img src="wVTBsy2GTiD7uiN7oh74P13rSbQxL9oNVktauuJZ.webp" alt="" />{" "}
          </div>
          <div className="img-wrapper">
            <img src="XKR0ThIpAiqtnzggWr9PjahcD0pyTvqS19LN1ff4.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
