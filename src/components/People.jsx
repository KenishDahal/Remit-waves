import React, { useEffect, useRef } from "react";
import { useTransform, useScroll, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, x: 0, transition: { ease: "linear", duration: 0.7 } },
  hidden: { opacity: 0.6, x: -150 },
};

const People = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="people"
    >
      <motion.div className="people__motion people__one">
        <div className="people__motion__desc" id="ee">
          <div className="h2">David Watson</div>
          <div className="body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sit nam quibusdam.
          </div>
        </div>
      </motion.div>
      <motion.div className="people__motion people__two">
        <div className="people__motion__desc" id="ee">
          <div className="h2">David Watson</div>
          <div className="body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sit nam quibusdam.
          </div>
        </div>
      </motion.div>
      <motion.div className="people__motion people__three">
        <div className="people__motion__desc" id="ee">
          <div className="h2">David Watson</div>
          <div className="body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sit nam quibusdam.
          </div>
        </div>
      </motion.div>
      <motion.div className="people__motion people__four">
        <div className="people__motion__desc" id="ee">
          <div className="h2">David Watson</div>
          <div className="body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sit nam quibusdam.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default People;
