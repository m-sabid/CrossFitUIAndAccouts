import React from "react";
import { Col, Row } from "react-bootstrap";
import NavSection from "../Shared/NavSection/NavSection";
import TopSection from "../Shared/TopSection/TopSection";
import Product from "../../FakeData/ProductData.json";
import "./Shop.css";

const Shop = () => {
  const recentProduct = Product[0];
  return (
    <>
      <div className="top-banner">
        <TopSection />
        <NavSection />
      </div>
      <div className="Shop">
        <Row>
          <Col md={5}>
            <div className="recentProduct">
              <div className="productName"></div>
              <img src={recentProduct.ProductImg} id="productImg" alt="" />
              <h3 id="recentProductName">{recentProduct.PName}</h3>
              <p id="productDetails">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam rerum nihil numquam ex, porro asperiores atque corrupti quia officia consectetur labore quo dolor sit, praesentium nisi cumque adipisci cum? Vero nam vel at enim ipsam impedit tempora, culpa fugit.
              </p>
            </div>
          </Col>
          <Col md={5}></Col>
        </Row>
      </div>
    </>
  );
};

export default Shop;
