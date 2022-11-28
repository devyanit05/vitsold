import React, { useState } from "react";
import "./navbar.css";
import { connect } from "react-redux";
import { searchProduct } from "../../store/actions/Productaction";
// import logo from "../../assets/logo_app.png";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { logout } from "../../store/actions/userAct";

const Navbar = (props) => {
  const [search, setSearch] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(props);
    props.search(search, props.auth.token);
  };

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
          <form onSubmit={handleSearch}>
            <div className="nav_searchbar">
              <input
                type="search"
                placeholder="Search Your Products"
                name="searchTerm"
                className="form-control"
                aria-label="Search"
                value={search.searchTerm}
                onChange={handleChange}
              />
              <div className="search_icon">
                <SearchIcon id="search" />
              </div>
            </div>
          </form>
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
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    search: (search, token) => dispatch(searchProduct(search, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Navbar);
