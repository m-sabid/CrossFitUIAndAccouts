import React from "react";
import {
  FaFileAlt,
  FaHome,
  FaMoneyBill,
  FaShoppingCart,
  FaSignOutAlt,
  FaUserAlt,
  FaHandHoldingUsd,
  FaBabyCarriage,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AuthUser from "../LoginLogOut/AuthUser/AuthUser";
import "./SideNav.css";

const SideNav = () => {
  const { token, logout } = AuthUser();

  const logOutUser = () => {
    if (token != undefined) {
      logout();
    }
  }
  return (
    <div className="SideNav">
      <div className="Nav">
        <ul>
          <NavLink to="/dashboard/dashboard" className="navItem">
            <li>
              <FaHome />
              <br />
              <span id="sidebarName"> Home </span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/profile" className="navItem">
            <li>
              <FaUserAlt />
              <br />
              <span id="sidebarName"> Profile </span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/salary" className="navItem">
            <li>
              <FaHandHoldingUsd />
              <br />
              <span id="sidebarName"> Salary </span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/form" className="navItem">
            <li>
              {" "}
              <FaFileAlt />
              <br />
              <span id="sidebarName">  Form </span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/order" className="navItem">
            <li>
              {" "}
              <FaShoppingCart />
              <br />
              <span id="sidebarName"> Orders </span>
            </li>
          </NavLink>
          {/* <NavLink to="m/application" className="navItem">
            <li>
              {" "}
              <HiDocumentText />
              <br />
              Applications
            </li>
          </NavLink> */}
          <NavLink to="/dashboard/income" className="navItem">
            <li>
              {" "}
              <FaMoneyBill />
              <br />
              <span id="sidebarName"> Incomes </span>
            </li>
          </NavLink>
          <NavLink to="/dashboard/expense" className="navItem">
            <li>
              {" "}
              <FaBabyCarriage />
              <br />
              <span id="sidebarName"> Expense </span>
            </li>
          </NavLink>
          {/* <NavLink to="m/settings" className="navItem">
            <li>
              {" "}
              <FaRegSun />
              <br />
              Settings
            </li>
          </NavLink> */}
          {/* <NavLink to="/auth" className="navItem">
            <li>
              {" "}
              <FaSignOutAlt />
              <br />
              log in 
            </li>
          </NavLink> */}
          <NavLink to="/login" className="navItem" onClick={logOutUser}>
            <li>
              {" "}
              <FaSignOutAlt />
              <br />
              <span id="sidebarName"> Log out </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
