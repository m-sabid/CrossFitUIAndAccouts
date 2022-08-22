import React from "react";
import { Container, Nav } from "react-bootstrap";
import NavSection from "../../Shared/NavSection/NavSection";
import TopSection from "../../Shared/TopSection/TopSection";
import "./Banner.css";
import img from "../../../Image/Banner/img1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section>
        <div className="banner">
          <TopSection />
          <NavSection />

          <Container>
            <section>
              <div className="row d-flex justify-content-center">
                <div className="header-info col-md-9 col-12 pt-5">
                  <div className="banner-title">
                    <h1 className="tagLine" >
                      EVERY STEPS IS PROGRESS
                      <br />
                      START TODAY
                    </h1>
                    <div className="d-flex justify-content-center">
                      <Nav.Link as={Link} to="/login">
                        {" "}
                        <button className="banner-btn">JOIN GYM</button>{" "}
                      </Nav.Link>
                      <Nav.Link>
                        <button className="banner-btn2">PACKAGES</button>
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </div>
        <Container>
          <section>
            <div className="row d-flex justify-content-between">
              <div className="col-md-6 col-12 pt-5 mt-5 h-img">
                <img
                  src={img}
                  alt=""
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-md-6 col-12 pt-5 mt-5 about_home">
                <Nav.Link  href="/about-us" className="ab-btn">ABOUT US</Nav.Link>
                <h1
                  style={{
                    fontWeight: "800",
                    fontSize: "3rem",
                    textAlign: "left",
                    fontFamily: '"Roboto",sans-serif',
                  }}
                >
                  Mission
                </h1>
                <h3
                  style={{
                    color: "rgb(142, 142, 142)",
                  }}
                >
                 We want to forge a community through elite functional fitness that drives people to be fit and live a healthy
                  life.
                </h3>
                
                <h1
                  style={{
                    fontWeight: "800",
                    fontSize: "3rem",
                    marginTop: "10px",
                    fontFamily: '"Roboto",sans-serif',
                  }}
                >
                  Vision
                </h1>
                <h3
                  style={{
                    color: "rgb(142, 142, 142)",
                  }}
                >
                 We envision to be a hub of health & fitness; a place people can rely on to reach their goals and a platform where they can share their experiences that will enlighten the path for others.
                </h3>

              </div>
            </div>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
