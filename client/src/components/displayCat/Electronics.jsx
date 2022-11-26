import React, { useEffect } from "react";
import "./display.css";
import Title from "./CatTitle";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { getCat } from "../../store/actions/Productaction";

const Electronics = (props) => {
  useEffect(() => {
    console.log("Before: ",props)
    props.getCat("Electronics")
    console.log("After: ",props)
  }, [])
  
  return (
    <div className="main_container">
      <div className="page_title">
        <Title title="Electronics" />
      </div>
      <div className="all_cards">
      { props.products && props.products.products.map((product) => {
        return(
          <div className="single_card">
            <ProductCard product = {product}/>
          </div>
        )
      })
      }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    products:state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getCat : (cat) => dispatch(getCat(cat))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Electronics);
