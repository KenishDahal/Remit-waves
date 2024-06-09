import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import Button from "./Button";
import CurrencyConverter from "./CurrencyConverter";
import Slider from "./Slider";
import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";

const Hero = () => {
  const [hidden, setHidden] = useState(false);
  const [resize, setResize] = useState(false);
  const [hide, setHide] = useState(true);

  const { scrollY } = useScroll();

  const parentVariants = {
    /** Define the "visible" and "hidden" state and its styles **/
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-4rem" },
  };

  // const subVariants = {
  //   /** Define the "visible" state and its styles **/
  //   visible: { opacity: 1, y: 0 },
  //   /** Define the "hidden" state and its styles **/
  //   hidden: { opacity: 0, y: "-4rem" },
  // };

  const variants = {
    visible: { opacity: 1, y: 0 },
    /** Define the "hidden" state and its styles **/
    hidden: { opacity: 0, y: "-4rem" },
  };

  const subVarent = {
    size: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
      },
    },
    resize: {
      scaleX: 0.8,
      scaleY: 0.8,
      duration: 3,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
      },
    },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > 3) {
      setHidden(true);
      setHide(false);
      setResize(true);
      console.log("hidden");
    } else {
      setHidden(false);
      setHide(true);
      setResize(false);

      console.log("VISIBLE");
    }
  });

  return (
    <>
      {/* <motion.div className="hero" useRef={targetRef} useRef1={extendedRef} style={{ scale }}> */}
      <motion.div
        variants={parentVariants}
        /** Match boolean state with these variant keys **/
        animate={hidden ? "hidden" : "visible"}
        /** Add a custom easing curve and duration for the animation **/
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.5,
        }}
        className="hero"
      >
        {/* 1st PART */}
        <div className="hero__firstPart">
          <div className="h1">CHANGE THE WAY YOU MONEY</div>
          <div className="body">
            For those who want more from their money — there’s Revolut. Sign up
            for free, in a tap.
          </div>
        </div>
        {/* 2nd PART */}
        <motion.div
          variants={subVarent}
          animate={resize ? "resize" : "size"}
          className="hero__secondPart"
        >
          <div className="h2">$3421</div>
          <Link className="button" to="/download">
            <Button className="hero__secondPart__button" text={"Main"} />
          </Link>
          <div className="hero__secondPart__cashback body">
            <span>
              <FcShop />
            </span>
            Trainer cahback
            <span className="hero__secondPart__cashback__dollar">$1234</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Second Section */}
      {/* <div className="secondSection" style={{ scale2 }}> */}
      {/* <div className="eg"> */}
      <motion.div
        variants={parentVariants}
        animate={hide ? "hidden" : "visible"}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.5,
        }}
        className="secondSection"
      >
        <div className="secondSection__title">
          <div className="h2">MAKE YOUR SPEND, WELL-SPENT</div>
          <div className="body">
            Grabbing a coffee? Add some cashback. When in Japan? Spend in Yen.
            Big life change? Try a Joint Account. However you spend — Revolut is
            all you need.
          </div>
          <div className="eyebrow">
            Shops cashback promotions vary. Joint Account TCs apply.
          </div>
          <Link className="" to="/download">
            <Button text={"Get App"} />
          </Link>
        </div>
        <Slider />
      </motion.div>
    </>
  );
};

export default Hero;
