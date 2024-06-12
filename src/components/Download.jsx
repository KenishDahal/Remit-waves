import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAndroid) {
      window.location.href = "link here";
      //eg :  "https://play.google.com/store/apps/details?id=com.tetraz.capsigo";
    } else if (isIOS) {
      window.location.href = "link here";

      // eg : "https://apps.apple.com/app/capsigo/id1547746310";
    } else {
      window.location.href = "link here";
      // ("http://localhost:3000/");
    }
    navigate("/");
  });

  return <div></div>;
};

export default Download;
