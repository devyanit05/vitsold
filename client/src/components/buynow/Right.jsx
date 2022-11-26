import React from "react";
import { Link } from "react-router-dom";
import "./buynow.css";

const Right = () => {
  return (
    <div className="right_buy">
      <h1 style={{ textAlign: "center", paddingX: "2px", color: "red" }}>
        <strong>Instructions!</strong>
      </h1>
      <div className="cost_right">
        <p>
          Your order will be considered once you proceed to buy. A mail will be
          sent from your mail id to owner's account mentioning your interest in
          there product.
        </p>
        <br />
        <span style={{ color: "brown", fontSize: "14px " }}>
          If you face any problems with your order or inappropriate behaviour
          from our senders, kindly contact us through this{" "}
          <Link to="/help" className="linkk" style={{ color: "blue" }}>
            help
          </Link>{" "}
          button below.
        </span>
        <div style={{ textAlign: "end" }}>
          <Link to="/help" className="linkk">
            <button
              className="leftbuy_btn"
              style={{
                margin: "10px",
                backgroundColor: "black",
                color: "whitesmoke",
                fontWeight: "bold",
              }}
            >
              Help
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Right;
