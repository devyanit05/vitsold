import React from "react";
import "./buynow.css";

const Right = () => {
  return (
    <div className="right_buy">
      <img src="" alt="" />
      <h1 style={{ textAlign: "center", paddingX: "10px" }}>VitSolds</h1>
      <div className="cost_right">
        <p>Your order will be considered once you proceed to buy.</p>
        <br />
        <span style={{ color: "#565959" }}>
          Select this option at checkout.{" "}
        </span>
        <h3>
          Subtotal ( 1 item ) :{" "}
          <strong style={{ fontWeight: "700" }}>₹4049.00</strong>
        </h3>
        <button className="rightbuy_btn">Procceed to Buy</button>
      </div>
    </div>
  );
};

export default Right;
