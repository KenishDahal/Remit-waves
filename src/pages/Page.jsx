// import styles from './page.module.css'
import { projects } from "../data";
import Card from "../components/Card";
import React from "react";
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const Page = () => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
  
      target: container,
  
      offset: ['start start', 'end end']
  
    })

  return (
    // <main className={styles.main}>

     <main ref={container} className="main">

      {

        projects.map( (project, i) => {

          const targetScale = 1 - ( (projects.length - i) * 0.05);

          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>

        })

      }

    </main>
  );
};

export default Page;
