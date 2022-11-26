import React from "react";
import "./display.css";
import Title from "./CatTitle";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";

const AllProducts = (props) => {
  return (
    <div className="main_container">
      <div className="page_title">
        <Title title="All Products" />
      </div>
      <div className="all_cards all_cards ml-md-5 d-flex align-content-center flex-wrap">
        {props.products &&
          props.products.products.map((product) => {
            return (
              <div className="single_card mx-4">
                <ProductCard product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(AllProducts);
