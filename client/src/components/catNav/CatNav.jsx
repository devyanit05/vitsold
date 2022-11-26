import React from "react";
import "./catnav.css";
import { Link } from "react-router-dom";

const CatNav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <Link className="linkk" to="/category/Projects">
            <p>Projects</p>
          </Link>
          <Link className="linkk" to="/category/Electronics">
            <p>Electronics</p>
          </Link>
          <Link className="linkk" to="/category/Books">
            <p>Books</p>
          </Link>
          <Link className="linkk" to="/sell">
            <p style={{ fontWeight: "bolder", fontSize: "16px" }}>
              Sell Your Products
            </p>
          </Link>
          <Link className="linkk" to="/category/HouseHold">
            <p>HouseHold</p>
          </Link>
          <Link className="linkk" to="/category/Flats">
            <p>Flats</p>
          </Link>
          <Link className="linkk" to="/category/Other">
            <p>Others</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatNav;
