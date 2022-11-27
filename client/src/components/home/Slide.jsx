import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
// import { products } from "./productdata";
import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/Productaction";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "./slide.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = (props) => {
  useEffect(() => {
    props.getProd();
    // console.log(props.products)
    // eslint-disable-next-line
  }, []);

  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>All Products</h3>
        <Link className="linkk" to="/all-products">
          <button className="view_btn">View All</button>
        </Link>
      </div>
      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {props.products.products ? (
          props.products.products.map((e) => {
            return (
              <div className="products_items">
                <div className="product_img">
                  <img
                    src={require(`../../../../images/${e.product_img}`)}
                    alt="productitem"
                  />
                </div>
                <p className="products_name">{e.product_name}</p>
                <p className="products_offer">{e.product_category}</p>
                <p className="products_explore">{e.owner_name}</p>
              </div>
            );
          })
        ) : (
          <div
            className="container"
            style={{
              paddingLeft: "330px",
              paddingTop: "20px",
              height: "120px",
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            </Box>
          </div>
        )}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProd: () => dispatch(getProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Slide);
