import React from "react";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";
import Hero from "./components/Hero";
import Page from "./pages/Page";
import Slider from "./components/Slider";

import People from "./components/People";
import Footer from "./pages/Footer";
import LoadingVideo from "./components/LoadingVideo";
import CurrencyConverter from "./components/CurrencyConverter";
import PaymentWay from "./components/PaymentWay";

const Home = () => {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Hero />
      <Page />
      <People />
      <LoadingVideo />
      <PaymentWay />
      <CurrencyConverter />
      <Footer />
    </>
  );
};

export default Home;
