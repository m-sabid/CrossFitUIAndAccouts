import React, { useEffect, useState } from "react";
import "./SalaryOverview.css";
import "../AccountOverview/AccountOverview.css";
import AuthUser from "../LoginLogOut/AuthUser/AuthUser";
import { Table } from "react-bootstrap";

const SalaryOverview = () => {
  const { getToken } = AuthUser();
  const token = getToken();

  const [salary, setSalary] = useState([]);

  useEffect(() => {
    const url = "https://gym-management97.herokuapp.com/api/salary_overview";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSalary(data.data));
  }, []);

  // console.log(salary);

  // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date

  return (
    <div>
      <div>
        <div className="mt-3">
          <h6 className="form-h6" id="salaryOverview">
            Salary Overview
          </h6>
        </div>
      </div>
      <div className="b-box">
        <div className="d-flex justify-content-between">
          <div className="b-1">
            <p>Total Pending</p>
            <h5 style={{ fontWeight: "700" }}>৳ 100.00</h5>
          </div>
          <div className="b-1">
            <p style={{ color: "#F04F23" }} id="incomeRes">
              Total Unpaid
            </p>
            <h5 style={{ fontWeight: "700", color: "#F04F23" }}>৳ 100.00</h5>
          </div>
          <div className="b-3">
            <p className="ad-top">+</p>
            <h5
              style={{ color: "#7CBC71", display: "block" }}
              className="lCompSal"
            >
              Total Paid
            </h5>
            <h5 style={{ fontWeight: "700", color: "#7CBC71" }}>৳ 100.00</h5>
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
              <input className="date-input ms-4" type="date" />
            </div>
          </div>
          {/* <div>
            <p className="fil">
              <FiFilter className="me-2" />
              Filter list
            </p>
          </div> */}
        </div>
      </div>
      <div className="mt-4">
        {/* Bootstrap table */}
        <div className="row d-flex justify-content-between my-STbl">
          <div className="col-md-12 col-12 mt-5">
            <Table striped responsive="sm">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Post</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {salary.map((dt) => (
                  <>
                    <tr key={dt.id} style={{ lineHeight: "50px" }}>
                      <td>
                        <img className="ava-img" src={dt.profileImage} alt="" />
                      </td>
                      <td> {dt.user.name} </td>
                      <td> {dt.date} </td>
                      <td>৳ {parseInt(dt.total_price)}</td>
                      <td>
                        <b>
                          <p
                            className={`${
                              dt.status === "Paid"
                                ? "SPaid"
                                : dt.status === "Hold"
                                ? "SHold"
                                : dt.status === "Un paid"
                                ? "SUnpaid"
                                : ""
                            }`}
                          >
                            {dt.status} Paid
                          </p>
                        </b>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        {/* Bootstrap table */}
      </div>
    </div>
  );
};

export default SalaryOverview;
