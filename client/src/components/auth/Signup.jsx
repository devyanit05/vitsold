import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../../store/actions/userAct";

const Signup = (props) => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUdata({
      ...udata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(udata)
    // console.log(props)
    props.signup(udata)
    if(localStorage.getItem('token')){
      navigate('/')
    }
    else{
      alert(localStorage.getItem('auth-error'))
    }
  }


  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header"></div>
          <div className="sign_form">
            <form onSubmit={handleSubmit}>
              <h1>Register Account</h1>
              <div className="form_data">
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  name="name"
                  id="fname"
                  placeholder="Enter your name here"
                  onChange={handleChange}
                  value={udata.name}
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter vit.edu email here"
                  onChange={handleChange}
                  // onChange={adddata}
                  value={udata.email}
                />
              </div>
              
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="atleast 6 characters"
                  onChange={handleChange}
                  // onChange={adddata}
                  value={udata.password}
                />
              </div>
              <button type="submit" className="signin_btn">Continue</button>
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

const mapDispatchToProps = (dispatch) => {
  return{
    signup: (creds) => dispatch(createUser(creds))
  }
}

export default connect(null, mapDispatchToProps)(Signup)
