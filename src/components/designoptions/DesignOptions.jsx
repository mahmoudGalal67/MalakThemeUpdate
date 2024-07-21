import { useContext, useEffect, useRef } from "react";

import { GeneralContext } from "../context/GeneralStyles";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./DesignOptions.css";

function DesignOptions() {
  const submitButton = useRef(null);

  const { color, dispatch } = useContext(GeneralContext);

  const changeColor = (e) => {
    dispatch({ type: "Change-color", payload: e.target.value });
    submitButton.current.disabled = false;
  };

  const changeState = (e) => {
    e.target.checked = e.target.checked;
  };
  const sumbitChanges = (e) => {
    e.preventDefault();
    // makeAxiosPostRequest
    console.log("submit");
  };

  useEffect(() => {
    submitButton.current.disabled = true;
  }, []);

  return (
    <ul className="menu-sub">
      <li className="menu-sub-title">
        <label className="submenu-label back" htmlFor="sub-one">
          خيارات التصميم
        </label>
        <div className="arrow left">&#8250;</div>
      </li>
      <li>
        لون المتجر
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue={color}
          title="Choose your color"
          onChange={changeColor}
        />
      </li>
      <li>
        ميزة مسار التنقل
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label=""
          onChange={changeState}
        />
      </li>
      <li>
        توحيد ارتفاع المنتجات في الرئيسية والتصنيفات
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label=""
        />
      </li>
      <li>
        توحيد ارتفاع المنتجات في الرئيسية والتصنيفات
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label=""
          onChange={(e) => console.log(e.target.checked)}
        />
      </li>

      <li style={{ padding: "12px 16px", height: "auto" }}>
        <Button
          className="submit-button"
          variant="info"
          ref={submitButton}
          onClick={sumbitChanges}
        >
          حفظ التغييرات
        </Button>
      </li>
    </ul>
  );
}

export default DesignOptions;
