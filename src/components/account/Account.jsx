import Modal from "react-bootstrap/Modal";

import "./account.css";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  const [accountType, setAccountType] = useState("phone");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <div className="wrapper">
          <img src="user.svg" alt="" />
          <h2>تسجيل الدخول</h2>
          {accountType === "phone" ? (
            <>
              <label htmlFor="phone">رقم الجوال</label>
              <input name="number" type="number" placeholder="010 01234567" />
            </>
          ) : (
            <>
              <label htmlFor="email">البريد الإلكتروني</label>
              <input name="email" type="email" placeholder="your@email.com" />
            </>
          )}

          <button>دخول</button>
          {accountType === "phone" ? (
            <span onClick={() => setAccountType("email")}>
              تسجل الدخول بالبريد الإلكتروني
            </span>
          ) : (
            <span onClick={() => setAccountType("phone")}>
              تسجل الدخول برسالة نصية
            </span>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Account({ modalShow, setModalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow === "account"}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Account;
