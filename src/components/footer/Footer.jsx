import "./footer.css";

import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <div className="footer">
      <ScrollToTop smooth />
      <div className="top">
        <div className="socials">
          <img src="socials/instagram.png" alt="" />
          <img src="socials/facebook.png" alt="" />
          <img src="socials/youtube.png" alt="" />
          <img src="socials/video.png" alt="" />
          <img src="socials/snapchat.png" alt="" />
        </div>
        <div className="email">
          <button>اشترك</button>
          <input type="text" placeholder="ادخل البريد الإلكتروني" />
        </div>
        <div className="info">
          <h3>كن أول من يعرف!</h3>
          <p>اشترك بنشرتنا البريدية ليصلك كل جديد.</p>
        </div>
      </div>
      <div className="separation"></div>
      <div className="middle">
        <div className="item">
          <h2>تطبيق متجر تجريبي</h2>
          <div className="wrapper">
            <img src="socials/googleplay.webp" alt="" />
            <img src="socials/googleplay.webp" alt="" />
          </div>
          <div className="wrapper tax">
            <div>
              {" "}
              <span>الرقم الضريبي</span>
              <br />
              <span>123456789</span>
            </div>
            <img src="socials/tax.webp" alt="" />
          </div>
          <div className="wrapper brands">
            <img className="logoSm" src="logo.webp" alt="" />
            <img
              src="socials/FfqaOiGKqLlQBEvqDcupS2sHxRZG6u2xIP0H0sLX.webp"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <h2>خدمة العملاء</h2>
          <div className="call">
            <div className="call-item">
              <img src="socials/telephone.png" alt="" />
              <a href="#">هاتف</a>
            </div>
            <div className="call-item">
              <img src="socials/iphone.png" alt="" />
              <a href="#">جوال</a>
            </div>
            <div className="call-item">
              <img src="socials/whatsapp.png" alt="" />
              <a href="#">واتساب</a>
            </div>
            <div className="call-item">
              <img src="socials/email.png" alt="" />
              <a href="#">ايميل</a>
            </div>
          </div>
        </div>
        <div className="item">
          <h2>روابط تهمك</h2>
          <div className="links">
            <a href="#">المدونة</a>
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الاستبدال والاسترجاع</a>
            <a href="#">نظام الولاء</a>
          </div>
        </div>
        <div className="item main-logo">
          <img src="logo.webp" alt="" />
          <span>متجر تجريبي - Demo Store</span>
        </div>
      </div>
      <div className="separation"></div>

      <div className="bottom">
        <a href="#">الحقوق محفوظة | 2024</a>
        <div className="payments">
          <img src="socials/apple_pay.webp" alt="" />
          <img src="socials/bank.webp" alt="" />
          <img src="socials/cod.webp" alt="" />
          <img src="socials/mada.webp" alt="" />
          <img src="socials/mastercard.webp" alt="" />
          <img src="socials/visa.webp" alt="" />
        </div>
        <div className="wrapper trusted">
          <span>موثّق في منصة الأعمال</span>
          <img src="socials/sbc.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
