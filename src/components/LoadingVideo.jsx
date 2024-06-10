import React from "react";
import load from "../images/liquid-loading-animation.gif";
import Button from "./Button";
import { Link } from "react-router-dom";

const LoadingVideo = () => {
  return (
    <div className="loadingVideo">
      <div className="loadingVideo__text h2">
        <div>AND SEND ACROSS THE GLOBE TOO</div>
        <div className="body">
          Whether it’s Morocco or Mexico, you can transfer there — really,
          really fast. Oh, and the rates are as good as you’ve heard.
        </div>
        <div>
          <Link to="/download">
            <Button text={"Get the app"} />
          </Link>
        </div>
      </div>

      <figure className="loadingVideo__figure">
        <img src={load} alt="loading..." />
      </figure>
    </div>
  );
};

export default LoadingVideo;
