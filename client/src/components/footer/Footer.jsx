import "./footer.css";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one forres">
          <h3>Get to know us</h3>
          <p>About Us</p>
          <p>Help</p>
        </div>
        <div className="footer_details_one forres">
          <h3>Contact Us</h3>
          <p>Address: VIT Pune, 411037</p>
          <p>Contact: 9359619652</p>
          <p>email: devyani.thokal05@gmail.com</p>
        </div>
        <div className="footer_details_one forres">
          <h3>Connect with us</h3>
          <p>facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="lastdetails">
        <p style={{ paddingTop: "10px", color: "gray" }}>
          © 2022 - {year} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All rights
          reserved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms and conditions
          applied
        </p>
      </div>
    </footer>
  );
};

export default Footer;
