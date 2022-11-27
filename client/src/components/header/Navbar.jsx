import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { connect } from "react-redux";
import { logout } from "../../store/actions/userAct";

const Navbar = (props) => {
  const handleClick = () => {
    localStorage.removeItem('token')
  }
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


const mapStateToProps = (state) =>  {
  return{
    auth:state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    Logout : () => dispatch(logout())
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Navbar);
