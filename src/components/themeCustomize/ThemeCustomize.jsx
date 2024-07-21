import React from "react";

function ThemeCustomize() {
  return (
    <ul className="menu-sub">
      <li className="menu-sub-title">
        <label className="submenu-label back" htmlFor="sub-four">
          تخصيص التصميم
        </label>
        <div className="arrow left">&#8250;</div>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
    </ul>
  );
}

export default ThemeCustomize;
