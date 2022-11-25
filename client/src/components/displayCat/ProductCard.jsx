import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const ProductCard = (props) => {
  return (
    <div className="card card_main">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body info">
        <h5 className="card-title">{props.title}</h5>
        <button className="btn">
          <Link className="linkk" to={`/getproductsone/${props.id}`}>
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
