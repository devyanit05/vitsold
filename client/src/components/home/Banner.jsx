import React from "react";
import "./banner.css";
import Img1 from "./imgs/img_1.png";
import Img2 from "./imgs/img_2.png";
import Img3 from "./imgs/img_3.png";
import Img4 from "./imgs/img_4.png";

import Carousel from "react-material-ui-carousel";

const data = [Img1, Img2, Img3, Img4];

const Banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        },
      }}
    >
      {data.map((img, i) => {
        return (
          <>
            <img src={img} alt="" className="banner_img" />
          </>
        );
      })}
    </Carousel>
  );
};

export default Banner;
