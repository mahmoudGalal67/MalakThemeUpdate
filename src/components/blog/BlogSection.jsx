import React from "react";

import "./blog.css";

function blog() {
  return (
    <div className="blog-section">
      <div className="info">
        <h2>مقالات المدونة</h2>
        <p>كن على اطلاع بآخر مستجدات التكنولوجيا</p>
      </div>
      <div className="wrapper">
        <div className="item">
          <img src="blog.webp" alt="" />
          <a href="#">اكشف فوائد Snapchat لاستراتيجية التسويق الخاصة بك</a>
          <p>تم كتابة هذا المقال وعنوانه بواسطة الذكاء الاصطناعي.</p>
          <a href="" className="more-link">
            اعرف أكثر
          </a>
        </div>
        <div className="item">
          <img src="blog.webp" alt="" />
          <a href="#">اكشف فوائد Snapchat لاستراتيجية التسويق الخاصة بك</a>
          <p>تم كتابة هذا المقال وعنوانه بواسطة الذكاء الاصطناعي.</p>
          <a href="" className="more-link">
            اعرف أكثر
          </a>
        </div>
        <div className="item">
          <img src="blog.webp" alt="" />
          <a href="#">اكشف فوائد Snapchat لاستراتيجية التسويق الخاصة بك</a>
          <p>تم كتابة هذا المقال وعنوانه بواسطة الذكاء الاصطناعي.</p>
          <a href="" className="more-link">
            اعرف أكثر
          </a>
        </div>
      </div>
    </div>
  );
}

export default blog;
