import Accordion from "react-bootstrap/Accordion";
import Product from "../../components/product/product";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import Form from "react-bootstrap/Form";

import "./ProductCatigory.css";
import Brands from "../../components/brands/Brands";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/navbar";

import { useState } from "react";

function ProductCatigory({ changeTheme, currentTHeme }) {
  //  Offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //  Offcanvas
  return (
    <div className="view">
      <Navbar changeTheme={changeTheme} currentTHeme={currentTHeme} />
      <div className="product-catigory">
        <div className="header">
          <div>
            <h2>الشواحن</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
          </div>
          <img src="RENGAs4TtxxBiKDB5rb08cMj5LWGLnwDEENFPALt.png" alt="" />
        </div>
        <div className="wrapper">
          <div className="products-container">
            <div style={{ display: "flex", gap: "12px" }}>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "auto" }}
              >
                <option disabled>Open this select menu</option>
                <option value="1">مقترحاتنا</option>
                <option value="2">مقترحاتنا</option>
                <option value="3">مقترحاتنا</option>
              </Form.Select>
              <Button
                variant="primary"
                onClick={handleShow}
                className="show-filters me-2"
              >
                Show Filters
              </Button>
            </div>

            <div className="products">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
          <div className="filters">
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                <Accordion.Body>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>ما هو إيبسوم؟</Accordion.Header>
                <Accordion.Body>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                <Accordion.Body>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                <Accordion.Body>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                <Accordion.Body>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                <Accordion.Body>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                <Accordion.Body>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton style={{ backgroundColor: "#60F4D4" }}>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="filters">
              <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>ما هو إيبسوم؟</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="">الجوالات</label>
                      <Form.Check
                        name="currency"
                        type={"radio"}
                        id={`الجوالات`}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/* Offcanvas */}
      </div>
      <Brands />
      <Footer />
    </div>
  );
}

export default ProductCatigory;
