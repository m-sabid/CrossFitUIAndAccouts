import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import AuthUser from "../../LoginLogOut/AuthUser/AuthUser";
import "./ExpenseDetails.css";

const ExpenseDetails = () => {
  const { id } = useParams();
  const [findItem, setFindItem] = useState([]);
  const [expense, setExpense] = useState([]);
  const { getToken } = AuthUser();
  const token = getToken();

  // console.log("id", id);

  const loadUser = async () => {
    const res = await axios.get(
      `https://gym-management97.herokuapp.com/api/expense/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setFindItem([res.data]);
  };

  useEffect(() => {
    loadUser();
  }, []);

  console.log("this is findItem", findItem);

  const getAllOverview = () => {
    async function getFetchData(url) {
      await fetch("https://gym-management97.herokuapp.com/api/expense", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setExpense(data.data))
        .catch((error) => console.log(error));
    }
    getFetchData();
  };

  const getDate = (e) => {
    const getDataFromUI = e.target.value;
    // console.log("date value", getDataFromUI);
    const dateMatch = expense.filter((element, index) => {
      // console.log(element);
      return element.expense_date === getDataFromUI;
    });
    return setExpense(dateMatch);
  };
  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date

  return (
    <>
      <div>
        <div className="mt-3">
          <h6 className="form-h6">Expense History</h6>
        </div>
      </div>
      <div className="time-fl">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <p id="date">{today}</p>
            </div>
            <div>
              <input className="date-input ms-4" type="date" onBlur={getDate} />
            </div>
          </div>
          <div>
            <NavLink
              className="fil"
              to="/dashboard/expense"
              onClick={getAllOverview}
            >
              All
            </NavLink>
          </div>
          <div>
            <NavLink to="/dashboard/expense/instruments" className="fil">
              {/* <FiFilter className="me-2" /> */}
              Assets
            </NavLink>
          </div>
          <div>
            <NavLink to="/dashboard/expense/pettycash" className="fil">
              {/* <FiFilter className="me-2" /> */}
              Petty Cash
            </NavLink>
          </div>
        </div>
      </div>

      {findItem.map((dt, index) => (
        <div className="myCard">
          <div className="id">
            <p>{dt.id}</p>
          </div>
          <h1>{dt.name}</h1>
          <small>{dt.expense_date}</small>
          <hr />
          <img src={dt.image} alt="detailsImage" />
          <ul>
            <li>AMOUNT : <b> { dt.amount}</b></li>
            <li>MESSAGE : <b> { dt.message}</b></li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default ExpenseDetails;
