import { useTransform, useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        className="cardContainer__card"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="h2">{title}</div>
        <div className="cardContainer__card__body">
          <div className="cardContainer__card__body__description">
            <div className="h3">{description}</div>
            <span>
              <div className="body" href={url} target="_blank">
                Get the one that matches your vibe.
                <br />
                Some cards are only available on subscription plans. Fees may
                apply.
              </div>
              <svg
                width="62"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="cardContainer__card__body__imageContainer">
            <motion.div
              style={{ scale: imageScale }}
              className="cardContainer__card__body__imageContainer__inner"
            >
              <img fill src={src} alt="card" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
