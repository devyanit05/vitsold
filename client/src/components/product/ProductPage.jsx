import React from "react";
import { connect } from "react-redux";
import { uploadProduct } from "../../store/actions/Uploadactions";

const ProductPage = () => {
  return <div>ProductPage</div>;
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProd: () => dispatch(uploadProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
