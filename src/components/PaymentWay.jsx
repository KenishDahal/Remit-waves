import React from "react";
import loading from "../images/loading.png";
import flag from "../images/nepali-flag.png";
import usd from "../images/usd.png";
import key from "../images/key.jpg";

const PaymentWay = () => {
  return (
    <div className="paymentWay">
      <div className="h2">
        Explaing a process
        <br /> with animation
      </div>
      <div className="paymentWay__card">
        <figure>
          <img src={loading} />
        </figure>
        <div className="h4">Get your order</div>
        <div className="eyebrow">in three easy steps</div>
        <div className="paymentWay__card__diagram">
          <figure>
            <img className="img1" src={flag} />
            <div className="body">NPR</div>
          </figure>
          <figure>
            <img className="img2" src={key} />
          </figure>
          <figure>
            <img className="img3" src={usd} />
            <div>USD</div>
          </figure>
        </div>
        <div className="paymentWay__card__labels">
          <div className="eyebrow">
            Choose your
            <br /> currency
          </div>
          <div className="eyebrow">
            Make secure <br /> payment
          </div>
          <div className="eyebrow">
            Get use <br /> in minutes.
          </div>
          <div className="paymentWay__card__labels__line">
            <div className="paymentWay__card__labels__line__indicator paymentWay__card__labels__line__indicator1"></div>
            <div className="paymentWay__card__labels__line__indicator paymentWay__card__labels__line__indicator2"></div>
            <div className="paymentWay__card__labels__line__indicator paymentWay__card__labels__line__indicator3"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentWay;
