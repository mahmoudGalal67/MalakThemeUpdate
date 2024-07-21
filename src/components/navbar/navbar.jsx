import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Marquee from "../marquee/marquee";

import "./navbar.css";
import { useContext, useState } from "react";
import Account from "../account/Account";
import Search from "../search/Search";
import Currency from "../currency/Currency";
import { Link } from "react-router-dom";
import { GeneralContext } from "../context/GeneralStyles";

function OffcanvasExample({ currentTHeme, changeTheme, design }) {
  const { color } = useContext(GeneralContext);

  const [modalShow, setModalShow] = useState(false);

  const handelModal = (modalType) => {
    setModalShow(modalType);
  };

  return (
    <>
      <Account setModalShow={setModalShow} modalShow={modalShow} />
      <Search setModalShow={setModalShow} modalShow={modalShow} />
      <Currency setModalShow={setModalShow} modalShow={modalShow} />

      <Marquee />
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{
            position: "fixed",
            top: "40px",
            width: "100vw",
            backgroundColor: "#09182E",
            opacity: ".8",
            zIndex: "100",
          }}
        >
          <Container>
            <div className="nav-icons-wrapper">
              <span
                className="currency"
                onClick={() => handelModal("currency")}
              >
                العمله : ريال سعودي
              </span>
              <div className="wrapper nav-icons">
                <Link to="/cart" className="cart-link">
                  <div className="counter" style={{ backgroundColor: color }}>
                    1
                  </div>{" "}
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </Link>
                <svg
                  onClick={() => handelModal("account")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <svg
                  onClick={() => handelModal("search")}
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
            </div>
            <Navbar.Brand as={Link} to="/">
              <img src="logo.webp" alt="" style={{ width: "140px" }} />
            </Navbar.Brand>
            <div style={{ display: "flex", alignItems: "center" }}>
              {currentTHeme === "light" ? (
                <div className="icon-theme" onClick={changeTheme}>
                  <img style={{ width: "25px" }} src="sun.svg" alt="" />
                  {"  "}
                </div>
              ) : (
                <div className="icon-theme" onClick={changeTheme}>
                  <img style={{ width: "25px" }} src="moon.svg" alt="" />
                  {"  "}
                </div>
              )}

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                style={{ border: "none" }}
              >
                <Navbar.Brand className="text-menu" href="#">
                  القائمة
                </Navbar.Brand>
                <span className="navbar-toggler-icon">
                  <svg
                    style={{ color }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
              </Navbar.Toggle>
            </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={design && "design"}
            >
              <Offcanvas.Header
                closeButton
                style={{ backgroundColor: "#0A192F" }}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  القائمة الرئيسية
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: "#0A192F" }}>
                <img
                  src="nKlgDCwGwCKH1z7uod8P5lktK1X90KNAFDtuUwn5.png"
                  alt=""
                />
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/catigory" href="#action3">
                    {" "}
                    الشواحن
                    <img
                      src="USxUodnMBAkHCWL0hPmhHTKz1atSAD2Ml8KQFRno.webp"
                      alt=""
                    />{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/catigory">
                    الساعات
                    <img
                      src="q2S1udYoQlaXDFhmZCdcoPiyevYAwE53UCJgXGbU.webp"
                      alt=""
                    />{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/catigory">
                    {" "}
                    السماعات
                    <img
                      src="jWmYKuJTMOJnde3NCdgq1y2dWMH5C3HJFOnuj7hU.webp"
                      alt=""
                    />{" "}
                  </Nav.Link>

                  <NavDropdown
                    title="الجوالات"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/catigory"
                      className="special"
                    >
                      عرض الكل{" "}
                      <img
                        src="RENGAs4TtxxBiKDB5rb08cMj5LWGLnwDEENFPALt.png"
                        alt=""
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/catigory">
                      ريدراجون{" "}
                      <img
                        src="XfqvBsIRFfOY90TxhLBzEjGraUzY5gsmhTkOFDuT.webp"
                        alt=""
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/catigory">
                      أنكر{" "}
                      <img
                        src="XIwBhlX2FTEJPYqCvBvx1bQqaIJvd6TDOo7YDguE.webp"
                        alt=""
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/catigory">
                      أبل{" "}
                      <img
                        src="MKb20xA0170Y5gfqKNIX20wwwym16W6cHo0e74Va.webp"
                        alt=""
                      />
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/catigory">
                    {" "}
                    تخفيضات
                    <img
                      src="mainlogo.webp"
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/catigory">
                    {" "}
                    البراندات
                    <img
                      src="mainlogo.webp"
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/catigory">
                    {" "}
                    المدونة
                    <img
                      src="mainlogo.webp"
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />{" "}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
