import React, { useContext, useState, useEffect } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { letterSpacing } from "@mui/system";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Cart = (props) => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="" alt="cartimg" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          {/* <h3>{productData.product_name}</h3>
          <h4>{productData.product_category}</h4>
          <Divider />
          <p className="mrp">{productData.product_mrp}</p> */}
          <p>
            Owner : <span style={{ color: "#b12704" }}>Devyaniii</span>
          </p>
          <p>Owner email : devyani.thokal@gmail.com</p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>47%</span>
            </h5>
          </div>
          <p className="description">
            About the product :{" "}
            <span
              style={{
                color: "#595959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.4px",
              }}
            >
              lorem30 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, quo maxime, illo rem enim debitis non pariatur odio nam
              dicta aliquid laborum saepe consequuntur nesciunt doloremque quis?
              Amet, corrupti voluptatibus iste, veritatis pariatur tempora non
              asperiores voluptatem cumque soluta magnam voluptates tempore
              fAnimi evditiis fugit maxime fugiat repellat. Totam ullam
              reprehenderit quae perspiciatis, ducimus rerum. Facere quod et
              nisi deserunt.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
