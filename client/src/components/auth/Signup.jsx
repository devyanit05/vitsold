import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };

  console.log(udata);

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="" alt="" />
          </div>
          <div className="sign_form">
            <form action="">
              <h1>Register Account</h1>
              <div className="form_data">
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Enter your name here"
                  onChange={adddata}
                  value={udata.fname}
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter vit.edu email here"
                  onChange={adddata}
                  // onChange={adddata}
                  value={udata.email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Contact Number</label>
                <input
                  type="type"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter contact number here"
                  onChange={adddata}
                  // onChange={adddata}
                  value={udata.mobile}
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
                  // onChange={adddata}
                  value={udata.password}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="atleast 6 characters"
                  onChange={adddata}
                  value={udata.cpassword}
                />
              </div>
              <button className="signin_btn">Continue</button>

              <div className="signin_info">
                <p>Already Have an Account ?</p>
                <Link className="linkk" to="/login">
                  sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
