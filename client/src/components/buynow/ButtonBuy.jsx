import React, { useEffect, useState } from "react";
import "./buynow.css";
import emailjs from "emailjs-com";
import {useNavigate} from "react-router-dom"

const templateParams = {
  to_email: "ashhar374@gmail.com",
  from_email: "thokaldevyani123@gmail.com",
  to_name: "Seller",
  from_name: "Buyer",
  product_name: "Calcii",
  product_category: "Other",
  MRP: "500",
};

const ButtonBuy = (props) => {
  const nav = useNavigate()
  const product = props.product
  const user = props.user
  const [template, settemplate] = useState({})

  useEffect(() => {
    console.log(props.user)
    settemplate({
      to_email: product.owner_email,
      from_email: user.email,
      to_name: product.owner_name,
      from_name: user.name,
      product_name: product.product_name,
      product_category: product.product_category,
      MRP: product.product_mrp,
    })
    // eslint-disable-next-line
  }, [])
  
  const [active, setActive] = useState(false);
  const [buttonText, setButtonText] = useState("Proceed to Buy");

  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
    
    // console.log(template);
    setButtonText("Email Sent to Owner");
    emailjs
      .send(
        "service_6bt2jci",
        "template_zp2dtyg",
        template,
        "0FrxCXunj5vdrdn4L"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          console.log(templateParams);
          alert("continue to all products")
          nav('/all-products')
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

      
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="leftbuy_btn"
      style={{ backgroundColor: active ? "yellow" : "#5eff14" }}
    >
      {buttonText}
    </button>
  );
};

export default ButtonBuy;
