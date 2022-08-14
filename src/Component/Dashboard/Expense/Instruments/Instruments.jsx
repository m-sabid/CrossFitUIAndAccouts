import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyVerticallyCenteredModal } from "../../AccountOverview/Modal/ModalForForm";
import AuthUser from "../../LoginLogOut/AuthUser/AuthUser";
import "../Expense.css";

const Instruments = () => {
  const { getToken } = AuthUser();
  const token = getToken();

  // Expense
  const [modalShow, setModalShow] = useState(false);
  const [expense, setExpense] = useState([]);

  const allInstruments = expense.filter((element, index) => {
    const amountInt = parseInt(element.amount);
    // console.log(amountInt);
    if (amountInt >= 501) {
      return element;
    }
  });

  //   console.log(allInstruments);

  // Filter Date
  const getDate = (e) => {
    const getDataFromUI = e.target.value;
    // console.log("date value", getDataFromUI);
    const dateMatch = expense.filter((element, index) => {
      // console.log(element);
      return element.expense_date === getDataFromUI;
    });
    return setExpense(dateMatch);
  };

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

  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date

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

  return (
    <>
      <div>
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
                <input
                  className="date-input ms-4"
                  type="date"
                  onChange={getDate}
                />
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

        {/* add expense */}
        <button className="addExp" onClick={() => setModalShow(true)}>
          Add Expense <br />
          <span> + </span>
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        {allInstruments.map((dt) => (
          <div className="mt-4">
            <div className="sel-list d-flex justify-content-between">
              <div>
                <p>{dt.name}</p>
              </div>
              <div className="ms-5">
                <p>{dt.expense_date}</p>
              </div>
              <div className="ms-5">
                <p>{dt.amount}</p>
              </div>
              <div className="ms-5">
                <p>{dt.message}</p>
              </div>
              <Link
                className="detail-btn ms-5"
                to={"/dashboard/expense/" + dt.id}
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instruments;
