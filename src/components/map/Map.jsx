import React, { useState } from "react";

import "./map.css";

function Map() {
  const [activeMap, setactiveMap] = useState("map1");

  const setactiveNumber = (number) => {
    setactiveMap(number);
  };

  return (
    <div className="map">
      <div className="info">
        <h3> زورونا في فروعنا</h3>
        <p>الأحد إلى الخميس من الساعة 11 ص حتى 6 م</p>
        <div className="button-wrapper">
          <button
            className={activeMap == "map1" ? "active" : ""}
            onClick={() => setactiveNumber("map1")}
          >
            فرع جـدة <img src="location.svg" alt="" />
          </button>
          <button
            className={activeMap == "map2" ? "active" : ""}
            onClick={() => setactiveNumber("map2")}
          >
            فرع الرياض
            <img src="location.svg" alt="" />
          </button>
        </div>
      </div>
      {activeMap == "map1" ? (
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            color: "red",
            width: "100%",
            height: "500px",
          }}
        >
          <div
            id="canvas-for-googlemap"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            <iframe
              style={{ height: "100%", width: "100%", border: "0" }}
              src="https://www.google.com/maps/embed/v1/place?q=شركة+عبداللطيف+جميل+.+فرع+خريص&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
          <a
            className="google-maps-html"
            rel="nofollow"
            href="https://www.bootstrapskins.com/themes"
            id="get-data-for-embed-map"
          >
            premium bootstrap themes
          </a>
        </div>
      ) : (
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            color: "red",
            width: "100%",
            height: "500px",
          }}
        >
          <div
            id="canvas-for-googlemap"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            <iframe
              style={{ height: "100%", width: "100%", border: "0" }}
              src="https://www.google.com/maps/embed/v1/place?q=هيلتون+جدة&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
          <a
            className="google-maps-html"
            rel="nofollow"
            href="https://www.bootstrapskins.com/themes"
            id="get-data-for-embed-map"
          >
            premium bootstrap themes
          </a>
        </div>
      )}
    </div>
  );
}

export default Map;
