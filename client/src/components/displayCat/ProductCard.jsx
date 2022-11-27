import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <div className="card card_main">
      <img
        src={require(`../../../../images/${product.product_img}`)}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body info">
        {/* <h5 className="card-title">{product.product_name}</h5> */}
        <button className="btn btn_details">
          <Link
            className="linkk"
            to={`/product/${product._id}`}
            style={{ color: "black" }}
          >
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
