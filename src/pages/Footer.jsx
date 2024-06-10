import React from "react";
import logo from "../images/logo-remit.png";


const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="h6">Revamp</div> */}
      <figure className="">
        <img src={logo} alt="logo" />
      </figure>
      <div className="eyebrow">All rights reserved ©2024 Revamp</div>
    </div>
  );
};

export default Footer;
