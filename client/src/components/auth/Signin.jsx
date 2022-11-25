import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions/userAct";

const Signin = (props) => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const adddata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(logdata)
    props.login(logdata)
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

const mapDispatchToProps = (dispatch) => {
  return{
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(null, mapDispatchToProps)(Signin)
