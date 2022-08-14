import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import DBHome from "../Home/Home";
import AllProducts from "../AccountOverview/AllProducts/AllProducts";
import Applications from "../Applications/Applications";
import Expense from "../Expense/Expense";
import FooterSec from "../Footer/FooterSec";
import Header from "../Header/Header";
import Income from "../Income/Income";
import Order from "../Order/Order";
import PackagesOrder from "../Order/PackagesOrder/PackagesOrder";
import ProductsOrder from "../Order/ProductsOrder/ProductsOrder";
import ProfilePage from "../ProfilePage/ProfilePage";
import SalaryOverview from "../SalaryOverview/SalaryOverview";
import SideNav from "../SideNav/SideNav";
import TFrom from "../TFrom/TFrom";
import AccountsSalary from "../ProfilePage/AccountsSalary/AccountsSalary";
import PettyCash from "../Expense/PettyCash/PettyCash";
import Instruments from "../Expense/Instruments/Instruments";
import ExpenseDetails from "../Expense/ExpenseDetails/ExpenseDetails";


const AuthenticatedUser = () => {
  return (
    <>
      <div className="DashboardApp">
          <SideNav /> <Header />
            <Routes>
              <Route path="/dashboard" element={<DBHome />} />{" "}
              <Route path="/accountsSalary" element={<AccountsSalary />} />{" "}
              <Route path="/profile" element={<ProfilePage />} />{" "}
              <Route path="/form" element={<TFrom />} />{" "}
              <Route path="/income" element={<Income />} />{" "}
              <Route path="/expense" element={<Expense />} />{" "}
              <Route path="/order" element={<Order />} />
              <Route path="/application" element={<Applications />} />{" "}
              <Route path="/salary" element={<SalaryOverview />} />{" "}
              <Route path="/order/packages" element={<PackagesOrder />} />{" "}
              <Route path="/order/products" element={<ProductsOrder />} />{" "}
              <Route path="/expense/pettycash" element={<PettyCash />} />{" "}
              <Route path="/expense/instruments" element={<Instruments />} />{" "}
              <Route path="/overview" element={<AllProducts />} />{" "}
              <Route path="/expense/:id" element={<ExpenseDetails />} />{" "}
            </Routes>
          <div className="DashboardFooter">
            <FooterSec />
          </div>
        </div>
      <Outlet />
    </>
  );
};

export default AuthenticatedUser;
