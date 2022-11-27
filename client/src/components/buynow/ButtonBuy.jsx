import React, { useState } from "react";
import "./buynow.css";
import emailjs from "emailjs-com";

const templateParams = {
  to_email: "ashhar374@gmail.com",
  from_email: "thokaldevyani123@gmail.com",
  to_name: "Seller",
  from_name: "Buyer",
  product_name: "Calcii",
  product_category: "Other",
  MRP: "500",
};

const ButtonBuy = () => {
  const [active, setActive] = useState(false);
  const [buttonText, setButtonText] = useState("Proceed to Buy");

  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
    setButtonText("Email Sent to Owner");
    emailjs
      .send(
        "service_6bt2jci",
        "template_zp2dtyg",
        templateParams,
        "0FrxCXunj5vdrdn4L"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          console.log(templateParams);
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
