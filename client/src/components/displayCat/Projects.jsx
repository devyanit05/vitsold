import React from "react";
import "./display.css";
import Title from "./CatTitle";
import ProductCard from "./ProductCard";

const Projects = () => {
  return (
    <div className="main_container">
      <div className="page_title">
        <Title title="All Projects" />
      </div>
      <div className="all_cards">
        <div className="single_card">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
