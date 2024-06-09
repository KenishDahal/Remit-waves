import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import Headroom from "react-headroom";
import { useNavigate } from "react-router-dom";
import Footer from "../pages/Footer";
import Page from "../pages/Page";
import CurrencyConverter from "./CurrencyConverter";
import Hero from "./Hero";
import LoadingVideo from "./LoadingVideo";
import Navbar from "./Navbar";
import PaymentWay from "./PaymentWay";
import People from "./People";

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.tetraz.capsigo";
    } else if (isIOS) {
      window.location.href = "https://apps.apple.com/app/capsigo/id1547746310";
    } else {
      window.location.href = "http://localhost:3000/";
    }
    navigate("/");
  });

  return <div></div>;
};

export default Download;
