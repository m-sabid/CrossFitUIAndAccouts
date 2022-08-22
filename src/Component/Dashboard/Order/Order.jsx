import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Order.css";
import { Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import AuthUser from "../LoginLogOut/AuthUser/AuthUser";

const Order = () => {
  const { getToken } = AuthUser();
  const token = getToken();

  const [products, setProducts] = useState([]);
  const [packages, setPackages] = useState([]);
  // product
  useEffect(() => {
    const url = "https://gym-management97.herokuapp.com/api/product_orders";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);
  console.log("packages", packages);
  // Package
  useEffect(() => {
    const url = "https://gym-management97.herokuapp.com/api/package_order";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPackages(data.data));
  }, []);

  return (
    <>
      <div className="order-top">
        <div className="d-flex">
          <div>
            <FaShoppingCart className="o-s-i" />
          </div>
          <div className="ms-4">
            <p className="o-p">ORDERS</p>
            <h6 className="o-h6">125</h6>
          </div>
        </div>
      </div>
      <div
        className="mt-4 d-flex justify-content-between res_flex"
        style={{ marginBottom: "50px" }}
      >
        <h6 className="form-h6">Orders List</h6>

        {/* Filter */}
        <NavLink to="" className="fil">
          All
        </NavLink>
        <NavLink to="/dashboard/order/products" className="fil">
          Products
        </NavLink>
        <NavLink to="/dashboard/order/packages" className="fil">
          Packages
        </NavLink>
      </div>

      {/* Bootstrap table */}
      <div className="row d-flex justify-content-between my-STbl">
        <div className="col-md-12 col-12 mt-5">
          <Table striped responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Products */}
              {products.map((dt) => (
                <>
                  {dt.order_details.map((items) => (
                    <tr style={{ lineHeight: "50px" }}>
                      <>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{dt.order_date}</td>
                        <td>৳ {items.price}</td>
                        <td
                          className={`${
                            items.status === "Complete"
                              ? "OPaid"
                              : items.status === "processing"
                              ? "OHold"
                              : items.status === "Un paid"
                              ? "OUnpaid"
                              : ""
                          }`}
                        >
                          {items.status}
                        </td>
                      </>
                    </tr>
                  ))}
                </>
              ))}
              {/* Products */}
              {/*  */}
              {/* packages */}
              {
                packages.map(pk => (
                  <tr key={pk.id} style={{ lineHeight: "50px" }}>
                    <td>{pk.id}</td>
                    <td>{pk.package.package_type.package_title}</td>
                    <td>{pk.order_date}</td>
                    <td>৳ {pk.package.discounted_price}</td>
                    <td>{pk.status}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
      {/* Packages */}
      {/* Bootstrap table */}

      <Outlet />
    </>
  );
};

export default Order;
