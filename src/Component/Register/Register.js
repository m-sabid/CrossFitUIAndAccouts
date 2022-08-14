import React, { useState } from "react";
import "./Register.css";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import log from "../../Image/Login/log.PNG";
import llog from "../../Image/Logo/logo2.png";

const Register = () => {

    const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // log
//   console.log(name);
//   console.log(email);
//   console.log(password);
//   console.log(phone);

  const registerUser = async () => {
    const url = "https://gym-management97.herokuapp.com/api/users/";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name, email:email, password:password, phone:phone
      })
    });
    const data = await res.json();
    if (data.success === true) {
        navigate('/login')
    } else {
        console.log(data);
    }
  };

  return (
    <div>
      <section>
        <div className="log-flex">
          <div className="log-w-img">
            <img className="l-w-i" src={log} alt="" />
          </div>
          <div className="log-info mt-5">
            <div className="l-logo">
              <img className="lll-img" src={llog} alt="" />
            </div>
            <h4 className="log-h4">Register Your Account</h4>
            <div className="l-form">
              <from method="POST">
                <h6 className="f-t mt-4">Name</h6>
                <input
                  className="login-input"
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <h6 className="f-t mt-4">Email</h6>
                <input
                  className="login-input"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h6 className="f-t mt-4">Password</h6>
                <input
                  className="login-input"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <h6 className="f-t mt-4">Phone Number</h6>
                <input
                  className="login-input"
                  type="text"
                  placeholder="Enter Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="d-flex mt-3 justify-content-between">
                  {/* <div>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Remember me"
                                        />
                                    </div>
                                    <div>
                                        <Nav.Link className='forget-p'>Forgot password?</Nav.Link>
                                    </div> */}
                </div>
                <br />
                <button className="log-btn" onClick={registerUser}>
                  Sign in
                </button>
                <div className="devider"></div>
                <button className="log-btn-google">
                  <FcGoogle className="g-icon" />
                  Or sign in with Google
                </button>
              </from>
              <div className="d-flex justify-content-center">
                <p className="mt-3">Already Registered?</p>
                <Nav.Link as={Link} to="/" className="mt-2">
                  Sign in now
                </Nav.Link>
              </div>
            </div>
            <div>
              <p className="copy-write2" style={{ fontSize: "13px" }}>
                © cross-fit 2022
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
