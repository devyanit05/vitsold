import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
  console.log(logdata);

  const adddata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header"></div>
          <div className="sign_form">
            <form>
              <h1>Sign In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter vit.edu email here"
                  onChange={adddata}
                  value={logdata.email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="atleast 6 characters"
                  onChange={adddata}
                  value={logdata.password}
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>Not Registered ?</p>
            <button>
              <Link to="/register">Create Account</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
