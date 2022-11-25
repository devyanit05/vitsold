import React from "react";
import "./catnav.css";
import { Link } from "react-router-dom";

const CatNav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <Link className="linkk" to="/projects">
            <p>Projects</p>
          </Link>
          <Link className="linkk" to="/electronics">
            <p>Electronics</p>
          </Link>
          <Link className="linkk" to="/books">
            <p>Books</p>
          </Link>
          <Link className="linkk" to="/sell">
            <p style={{ fontWeight: "bolder", fontSize: "16px" }}>
              Sell Your Products
            </p>
          </Link>
          <Link className="linkk" to="/households">
            <p>HouseHold</p>
          </Link>
          <Link className="linkk" to="/flats">
            <p>Flats</p>
          </Link>
          <Link className="linkk" to="/others">
            <p>Others</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatNav;
