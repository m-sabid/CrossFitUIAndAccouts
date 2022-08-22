import React, { useEffect, useState } from "react";
import "./AccountOverview.css";
import { Button, Table } from "react-bootstrap";
import AuthUser from "../LoginLogOut/AuthUser/AuthUser";
import {
  MyVerticallyCenteredModal,
  MyIncomeModals,
} from "./Modal/ModalForForm";

const AccountOverview = () => {
  const { getToken } = AuthUser();
  const token = getToken();
  // console.log(token);

  const [modalShow, setModalShow] = useState(false);
  const [modalShowIncome, setModalShowIncome] = useState(false);
  const [overview, setOverview] = useState([]);
  const [expense, setExpense] = useState([]);

  // const [dateFilter, setDateFilter] = useState([]);

  // Date Filter
  // const x = overview.map(dt=>(dt.order_date))
  // console.log("i am x", x);
  // x.filter(date => getDate)

  const getDate = (e) => {
    const getDataFromUI = e.target.value;
    // console.log("date value", getDataFromUI);

    const dateMatch = overview.filter((element, index) => {
      return element.order_date === getDataFromUI;
    });

    return setOverview(dateMatch);
  };

  // console.log("i am ", orderDate);

  // console.log("after filter", overview);

  // fetch data
  const getAllOverview = () => {
    async function getFetchData(url) {
      await fetch(
        "https://gym-management97.herokuapp.com/api/complete_product_orders",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setOverview(data.data))
        .catch((error) => console.log(error));
    }
    getFetchData();
  };
  // income
  useEffect(() => {
    const url =
      "https://gym-management97.herokuapp.com/api/complete_product_orders";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOverview(data.data));
  }, []);
  // expense

  
  useEffect(() => {
    const expenseUrl = "https://gym-management97.herokuapp.com/api/expense";
    fetch(expenseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setExpense(data.data));
  }, []);

  // totalExpense
  const totalExpense = expense
    .map((dt) => {
      let intExpense = parseInt(dt.amount);
      return intExpense;
    })
    .reduce((a, b) => a + b, 0);
  // Total Income
  const totalIncome = overview
    .map((dt) => {
      let intIncome = parseInt(dt.total_price);
      return intIncome;
    })
    .reduce((a, b) => a + b, 0);
  // Current Balance
  const currentBalance = totalIncome - totalExpense;

  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date
  // console.log("overview", overview);
  
  return (
    <>
      <div>
        <div className="mt-3">
          <h6 className="form-h6" id="accountOverview">
            Account Overview{" "}
          </h6>
        </div>
      </div>
      <div className="b-box">
        <div className="d-flex justify-content-between">
          <div className="b-1">
            <p>Current Balance</p>
            <h5 style={{ fontWeight: "700" }}>৳ {currentBalance}</h5>
          </div>
          <div className="b-1">
            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            <p className="ad-top">
              <Button onClick={() => setModalShow(true)}>+</Button>
            </p>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            {/* Add Expense BS Modals*/}
            <p style={{ color: "#F04F23", marginTop: "-30px" }} id="expenseRes">
              Total Expense
            </p>
            <h5 style={{ fontWeight: "700", color: "#F04F23" }}>
              ৳ {totalExpense}
            </h5>
          </div>
          <div className="b-3">
            {/* add income modal */}
            {/* add income modal */}
            {/* add income modal */}
            <div>
              <p className="ad-top">
                {/* <Button onClick={() => setModalShowIncome(true)}>+</Button> */}
              </p>
            </div>
            <MyIncomeModals
              show={modalShowIncome}
              onHide={() => setModalShowIncome(false)}
            />

            {/* add income modal */}
            {/* add income modal */}
            {/* add income modal */}
            <div>
              <h5 className="lComp" style={{ color: "#7CBC71" }}>
                Total Income
              </h5>
              <h5 style={{ fontWeight: "700", color: "#7CBC71" }}>
                ৳ {totalIncome}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="time-fl">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <p id="bodyDate">{today}</p>
            </div>
            <div>
              <input
                className="date-input ms-4 resDate"
                type="date"
                onBlur={getDate}
              />
              <button className="allBtn" onClick={getAllOverview}>
                All
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bootstrap table */}
      <div className="row d-flex justify-content-between my-Tbl">
        <div className="col-md-12 col-12 mt-5">
          <Table striped responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Order Date</th>
                <th>Total Price</th>
                <th>Payment Type </th>
              </tr>
            </thead>
            <tbody>
              {overview.map((dt) => (
                <>
                  <tr key={dt.id} style={{ lineHeight: "50px" }}>
                    <td>{dt.id}</td>
                    <td>{dt.order_date}</td>
                    <td>৳ {parseInt(dt.total_price)}</td>
                    <td>
                      {" "}
                      <b> {dt.payment_type_value} </b>{" "}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      {/* Bootstrap table */}
    </>
  );
};

export default AccountOverview;
