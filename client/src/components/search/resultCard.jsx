import React from "react";
import { Link } from "react-router-dom";

const resultCard = (props) => {
  const searchResult = props.searchProduct;
  return (
    <div className="container my-3" style={{ width: "90%" }}>
      <Link
        to={`/search/${searchResult._id}`}
        className="text-dark"
        style={{ textDecoration: "none" }}
      >
        <div class="card">
          <div class="card-header">
            <h5 className="card-title p-2">
              Category: {searchResult.product_category}
            </h5>
          </div>
          <div class="card-body">
            <p class="card-text mx-1">
              <strong>Product Title: </strong>
              {searchResult.product_name}
            </p>
            <p class="card-text mx-1">
              <strong>Price: ₹ </strong>
              {searchResult.product_mrp}
            </p>
            <p class="card-text mx-1">
              <strong>Owner: </strong>
              {searchResult.owner_name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default resultCard;
