import React from "react";
import { Container, Nav } from "react-bootstrap";
import Map from "../../Map/Map";
import "./HomeContact.css";
import { FaPhoneAlt } from "react-icons/fa";

const HomeContact = () => {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <section>
          <div className="row d-flex justify-content-between">
            <div className="col-md-6 col-12 mt-5 pt-3">
              <div
                className="map"
                style={{
                  border: "10px solid rgb(229, 229, 229)",
                  borderRadius: "20px",
                  height: "600px",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Map />
              </div>
            </div>
            <div className="col-md-6 col-12 con-info">
              <Nav.Link className="ab-btn2">CONTACT US</Nav.Link>
              <h1
                class="font-style"
                style={{
                  fontWeight: "800",
                  fontSize: "3rem",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Start Today
                <br />
                Start Here
              </h1>
              <p
                class="mt-4"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textAlign: "left",
                  marginTop: "10px",
                  color: "grey",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div className="d-flex">
                <Nav.Link className="btn-join nav-link">JOIN CFA NOW</Nav.Link>
                <Nav.Link className="btn-join ms-3 nav-link">
                  <FaPhoneAlt className="c-icon" />
                </Nav.Link>
              </div>
              <p
                class="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "25px",
                  textAlign: "left",
                  color: "grey",
                  lineHeight: "30px",
                }}
              >
                Green Grandeur (8th floor) 58/E, <br /> Kemal Ataturk Avenue{" "}
                <br /> Banani, Dhaka, Bangladesh
              </p>
              <hr />
              <p
                class="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "25px",
                  textAlign: "left",
                  color: "grey",
                  lineHeight: "30px",
                }}
              >
                +880 18475 46080 
                <br />
                +880 18475 46081
              </p>
              <hr />
              <p
                class="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "25px",
                  textAlign: "left",
                  color: "grey",
                  lineHeight: "30px",
                }}
              >
                WhatsApp: +880 18475 46080 
              </p>
              <hr />
              <p
                class="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "25px",
                  textAlign: "left",
                  color: "grey",
                  lineHeight: "30px",
                }}
              >
                fb.com/CrossFitBoxDHK 
              </p>
              <hr />
              <p
                class="mt-4"
                style={{
                  fontWeight: "700",
                  fontSize: "25px",
                  textAlign: "left",
                  color: "grey",
                  lineHeight: "30px",
                }}
              >
                @CrossFitBoxDHK
              </p>
              <hr />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomeContact;
