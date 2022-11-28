import React, { useEffect } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonBuy from "../buynow/ButtonBuy";

const Cart = (props) => {
  const params = useParams();
  const id = params.id.toString();
  let product = props.products.products.filter((product) => {
    return product._id === id;
  });
  useEffect(() => {
    // console.log(id)
    // console.log(product)
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src={require(`../../../../images/${product[0].product_img}`)}
            alt="cartimg"
          />

          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <ButtonBuy
              className="cart_btn2"
              product={product[0]}
              user={props.auth.user}
              style={{ backgroundColor: "#FFA41C", fontSize: "14px" }}
            />
          </div>
        </div>
        <div className="right_cart">
          <h3>{product[0].product_name}</h3>
          <h4>{product[0].product_category}</h4>

          <Divider />
          <p className="mrp">Cost: Rs.{product[0].product_mrp}</p>
          <p>
            Owner :{" "}
            <span style={{ color: "#b12704" }}>{product[0].owner_name}</span>
          </p>
          <p>Owner email : {product[0].owner_email}</p>

          <div className="discount_box">
            <h5>
              Discount :{" "}
              <span style={{ color: "#111" }}>
                {product[0].product_discount}%
              </span>
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
              {product[0].product_description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Cart);
