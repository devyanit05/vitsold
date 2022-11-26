import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <div className="card card_main">
      <img
        src={require(`../../../../server/images/${product.product_img}`)}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body info">
        <h5 className="card-title">{product.product_name}</h5>
        <button className="btn">
          <Link className="linkk" to={`/getproductsone/${product._id}`}>
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
