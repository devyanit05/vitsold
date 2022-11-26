import React from "react";
import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
import ButtonBuy from "./ButtonBuy";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";


const BuyNow = (props) => {
  let params = useParams();
  let id = params.id.toString()
  let product = props.products ? props.products.products.filter((product) => {
    return product._id === id;
  }):null
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
              src={require(`../../../../server/images/${product.product_img}`)}
              alt="imgitem"
            />
            <div className="item_details">
              <h3>Long Title of Product fulll...</h3>

              <h3>Category of product</h3>
              <h3 className="differentprice">{product.product_price}</h3>
              <Option />
              <div style={{ textAlign: "end" }}>
                <ButtonBuy />
              </div>
            </div>
            <h3 className="item_price">{product.product_mrp}</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    products: state.products
  }
}

export default connect(mapStateToProps)(BuyNow)
