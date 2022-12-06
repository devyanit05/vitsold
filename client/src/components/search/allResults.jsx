import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/Productaction";
import ResultCard from "./resultCard";

const AllProducts = (props) => {
  useEffect(() => {
    console.log(props.searchProduct);
    // eslint-disable-next-line
  }, []);

  let resultList = props.searchProduct
    ? props.searchProduct.product.map((prod) => {
        return (
          <div key={prod._id} className="container">
            <ResultCard searchProduct={prod} />
          </div>
        );
      })
    : null;

  // let resultList = null;

  // console.log(resultList);

  // let psList = null

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h2 style={{ borderBottom: "2px solid black", width: "83%" }}>Results</h2>
      <div className="container row">
        <div className="col-10">
          {props.searchProduct ? resultList : <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchProduct: state.products.searchProduct,
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProd: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
