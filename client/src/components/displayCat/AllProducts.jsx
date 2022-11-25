import React from "react";
import "./display.css";
import Title from "./CatTitle";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  return (
    <div className="main_container">
      <div className="page_title">
        <Title title="All Products" />
      </div>
      <div className="all_cards">
        <div className="single_card">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
