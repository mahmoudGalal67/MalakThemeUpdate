import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./currency.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <Form className="currencyControl">
          <div key={`default-radio`} className="mt-2">
            <div className="radio-wrapper">
              <span>AED</span>
              <Form.Check
                name="currency"
                type={"radio"}
                label={`درهم اماراتي`}
                id={`درهم اماراتي`}
              />
            </div>
            <div className="radio-wrapper">
              <span>SAR</span>
              <Form.Check
                name="currency"
                type={"radio"}
                label={`ريال سعودي`}
                id={`ريال سعودي`}
              />
            </div>
            <div className="radio-wrapper">
              <span>USD</span>
              <Form.Check
                name="currency"
                type={"radio"}
                label={`دولار أمريكي`}
                id={`دولار أمريكي`}
              />
            </div>
          </div>
          <button className="modal-button">موافق</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Currency({ modalShow, setModalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow === "currency"}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Currency;
