import React from "react";
import logo from "../images/logo-remit.png";


const Footer = () => {
  return (
    <div className="footer">
      <figure className="">
        <img src={logo} alt="logo" />
      </figure>
      <div className="eyebrow">All rights reserved ©2024 RemitWaves</div>
    </div>
  );
};

export default Footer;
