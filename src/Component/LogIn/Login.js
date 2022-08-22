import React, { useState } from "react";
import "./LogIn.css";
import log from "../../Image/Login/log.PNG";
import llog from "../../Image/Logo/logo2.png";
import { Form, Nav } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import TopSection from "../Shared/TopSection/TopSection";
import NavSection from "../Shared/NavSection/NavSection";
import AuthUser from "../Dashboard/LoginLogOut/AuthUser/AuthUser";


const Login = () => {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // api call
    http.post("/auth/", { email: email, password: password }).then((res) => {
      // console.log(res.data);
      setToken( res.data.data.email, res.data.data.access, res.data.data.role );
    });
  };

  return (
    <div>
      <div className="top-banner">
        <TopSection />
        <NavSection />
      </div>
      <section>
        <div className="log-flex">
          <div className="log-w-img">
            <img className="l-w-i" src={log} alt="" />
          </div>
          <div className="log-info mt-5">
            <div className="l-logo">
              <img className="lll-img" src={llog} alt="" />
            </div>
            <h4 className="log-h4">Nice to see you again</h4>
            <div className="l-form">
              <from>
                <h6 className="f-t mt-4">Email</h6>
                <input
                  className="login-input"
                  type="email"
                  placeholder="Email or phone number"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h6 className="f-t mt-4">Password</h6>
                <input
                  className="login-input"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-flex mt-3 justify-content-between">
                  <div>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Remember me"
                    />
                  </div>
                  <div>
                    <Nav.Link className="forget-p">Forgot password?</Nav.Link>
                  </div>
                </div>
                <br />
                <button className="log-btn" onClick={submitForm}>
                  Log in
                </button>
                <div className="devider"></div>
                <button className="log-btn-google">
                  <FcGoogle className="g-icon" />
                  Or sign in with Google
                </button>
              </from>
              <div className="d-flex justify-content-center">
                <p className="mt-3">Don't have an account?</p>
                <Nav.Link as={Link} to="/register" className="mt-2">
                  Sign up now
                </Nav.Link>
              </div>
            </div>
            <div>
              <p className="copy-write" style={{ fontSize: "13px" }}>
                © cross-fit 2022
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
