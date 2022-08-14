import React from "react";
import "./NavSection.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Image/Logo/logo.png";
import { Link } from "react-router-dom";
import AuthUser from "../../Dashboard/LoginLogOut/AuthUser/AuthUser";

const NavSection = () => {
  const { logout, email } = AuthUser();
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav id="upperCase">
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/about-us">
                About
              </Nav.Link>
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/cross-fit">
                CrossFit
              </Nav.Link>
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/fitness">
                Fitness
              </Nav.Link>
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/trainers">
                Trainers
              </Nav.Link>
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/testimonials">
                Testimonials
              </Nav.Link>
              {/* <Nav.Link className="nav-option" as={Link} to="/">
                Blog
              </Nav.Link> */}
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/contact">
                Contact
              </Nav.Link>              
              {
                email === null ? <Nav.Link className="nav-option" id="hoverNav" as={Link} to="/login">
                Log in 
              </Nav.Link> : <button className="nav-option-btn" onClick={logout}>log Out</button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSection;
