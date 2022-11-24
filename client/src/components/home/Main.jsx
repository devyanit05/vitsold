import React from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import { Link } from "react-router-dom";

import "./home.css";

const Main = () => {
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
          <h4>VIT Pune</h4>
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

export default Main;
