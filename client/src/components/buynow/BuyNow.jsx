import React from "react";
import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";

const BuyNow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">price</span>
          <Divider />

          <div className="item_containert">
            <img
              src="https://www.xcluma.com/image/cache/catalog/products/BE-00-2408-400x400.png.webp"
              alt="imgitem"
            />
            <div className="item_details">
              <h3>Long Title of Product fulll...</h3>
              <h3>Title of Product</h3>
              <h3 className="differentprice">₹4049</h3>
              <Option />
            </div>
            <h3 className="item_price">₹4049.00</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default BuyNow;
