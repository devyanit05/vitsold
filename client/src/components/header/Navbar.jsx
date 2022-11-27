import React from "react";
import "./navbar.css";
// import logo from "../../assets/logo_app.png";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <h1>
              <NavLink className="linkk" to="/" style={{ color: "white" }}>
                SellSoldered
              </NavLink>
            </h1>
            {/* <img src={logo} alt="" /> */}
          </div>
          <div className="nav_searchbar">
            <input type="text" placeholder="Search Your Products" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            {/* <a href="/login">signin</a> */}
            <NavLink className="linkk" to="/login">
              signin
            </NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <NavLink className="linkk" to="/cart">
                <ShoppingCartIcon id="icon" />
              </NavLink>
            </Badge>
            {/* <p>cart</p> */}
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
