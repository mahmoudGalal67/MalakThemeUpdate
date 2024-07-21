import Modal from "react-bootstrap/Modal";

import { useState } from "react";

import "./search.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="search">
        <div className="input-wrapper">
          <input type="search" placeholder="ادخل كلمة البحث" dir="rtl" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Search({ modalShow, setModalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow === "search"}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Search;
