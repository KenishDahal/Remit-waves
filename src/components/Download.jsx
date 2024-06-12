import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAndroid) {
      window.location.href = 
      // "link here";
       "https://play.google.com/store/apps/details?id=com.{name}";
    } else if (isIOS) {
      window.location.href = 
      // "link here";
     "https://apps.apple.com/app/{name}/{id}";
    } else {
      window.location.href =
      //  "link here";
      "http://localhost:3000/";
    }
    navigate("/");
  });

  return <div></div>;
};

export default Download;
