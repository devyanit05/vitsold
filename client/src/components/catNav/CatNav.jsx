import React from "react";
import "./catnav.css";
import { Link } from "react-router-dom";

const CatNav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <Link className="linkk" to="">
            <p>All</p>
          </Link>
          <Link className="linkk" to="">
            <p>Electronics</p>
          </Link>
          <Link className="linkk" to="">
            <p>Books</p>
          </Link>
          <Link className="linkk" to="">
            <p style={{ fontWeight: "bolder", fontSize: "16px" }}>
              Sell Your Products
            </p>
          </Link>
          <Link className="linkk" to="">
            <p>HouseHold</p>
          </Link>
          <Link className="linkk" to="">
            <p>Flats</p>
          </Link>
          <Link className="linkk" to="">
            <p>Projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatNav;
