import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FcShop } from "react-icons/fc";

const Slider = () => {
  const [hide, setHide] = useState(true);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };
  const subVarent = {
    show: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
      },
    },
    hide: {
      scaleX: 0.8,
      scaleY: 0.8,
      duration: 3,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
      },
    },
  };
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const variants = {
    visible: { opacity: 1, y: 0 },
    /** Define the "hidden" state and its styles **/
    hidden: { opacity: 0, y: "-4rem" },
  };
  const parentVariants = {
    /** Define the "visible" state and its styles **/
    visible: { opacity: 1, y: 0 },
    /** Define the "hidden" state and its styles **/
    hidden: { opacity: 0, y: "-4rem" },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > 40) {
      setHidden(true);
      setHide(true);
      console.log("hidden");
    } else {
      setHidden(false);
      setHide(false);

      console.log("VISIBLE");
    }
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > 40) {
      setHidden(false);
      setHide(false);

      console.log("hidden");
    } else {
      setHidden(true);
      setHide(true);
      console.log("VISIBLE");
    }
  });

  return (
    <div>
      <Carousel showDots={true} responsive={responsive}>
        <motion.div
          variants={subVarent}
          animate={hide ? "hide" : "show"}
          className="card card--1"
        >
          <div className="h4">$3421</div>
          <Button className="card__button" text={"Joint account"} />
          <div className="card__cashback body">
            <span>
              <FcShop />
            </span>
            Trainer cahback
            <span className="hero__secondPart__cashback__dollar">$1234</span>
          </div>
        </motion.div>
        <motion.div
          variants={subVarent}
          animate={hide ? "hide" : "show"}
          className="card card--2"
        >
          <div className="h4">$3421</div>
          <Button className="card__button" text={"Main"} />
          <div className="card__cashback body">
            <span>
              <FcShop />
            </span>
            Trainer cahback
            <span className="hero__secondPart__cashback__dollar">$1234</span>
          </div>{" "}
        </motion.div>
        <motion.div
          variants={subVarent}
          animate={hide ? "hide" : "show"}
          className="card card--3"
        >
          <div className="h4">$3421</div>
          <Button className="card__button" text={"Country"} />
          <div className="card__cashback body">
            <span>
              <FcShop />
            </span>
            Trainer cahback
            <span className="hero__secondPart__cashback__dollar">$1234</span>
          </div>{" "}
        </motion.div>
        <motion.div
          variants={subVarent}
          animate={hide ? "hide" : "show"}
          className="card card--4"
        >
          <div className="h4">$3421</div>
          <Button className="card__button" text={"Bills"} />
          <div className="card__cashback body body">
            <span>
              <FcShop />
            </span>
            Trainer cahback
            <span className="hero__secondPart__cashback__dollar">$1234</span>
          </div>{" "}
        </motion.div>
        <motion.div
          variants={subVarent}
          animate={hide ? "hide" : "show"}
          className="card card--5"
        >
          <div className="h4">$3421</div>
          <Button className="card__button" text={"Travel"} />
          <div className="card__cashback body">
            <span>
              <FcShop />
            </span>
            Trainer cahback
            <span className="hero__secondPart__cashback__dollar">$1234</span>
          </div>{" "}
        </motion.div>
      </Carousel>
    </div>
  );
};

export default Slider;
