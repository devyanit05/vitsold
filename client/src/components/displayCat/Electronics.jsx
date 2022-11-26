import React, { useEffect } from "react";
import "./display.css";
import Title from "./CatTitle";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Electronics = (props) => {
  let params = useParams()

  let category = params.cat.toString()
  let prod = props.products.products.filter((product) => {
    return product.product_category === category
  })


  useEffect(() => {
    console.log("Before: ",props)
    console.log(params.cat.toString())
    console.log("After: ",props)
  }, [])
  
  return (
    <div className="main_container">
      <div className="page_title">
        <Title title={category} />
      </div>
      <div className="all_cards">
      { props.products && prod.map((product) => {
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



export default connect(mapStateToProps)(Electronics);
