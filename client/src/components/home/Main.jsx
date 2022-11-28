import React, { useEffect } from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import "./home.css";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const nav = useNavigate()
  useEffect(() => {
    console.log(props)
    if(!localStorage.getItem('token')){
      nav('/login')
    }
  }, [])
  
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>

      <div className="slide_part">
        <div className="left_slide">
          <Slide />
        </div>
        <div className="right_slide">
          <h4>
            <strong>VIT Pune</strong>
          </h4>
          <img
            src="https://www.pngitem.com/pimgs/m/140-1401634_vishwakarma-institute-of-technology-pune-logo-hd-png.png"
            alt="vit logo"
          />
          <a href="https://www.vit.edu/">View Site</a>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Main);
