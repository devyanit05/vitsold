import React from "react";
import "./display.css";
import Title from "./CatTitle";
import ProductCard from "./ProductCard";

const Books = () => {
  return (
    <div className="main_container">
      <div className="page_title">
        <Title title="All Books" />
      </div>
      <div className="all_cards">
        <div className="single_card">
          <ProductCard img="" title="Calciiii" id="3" />
        </div>
      </div>
    </div>
  );
};

export default Books;
