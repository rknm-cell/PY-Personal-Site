import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { MetalGearCanvas } from "./canvas";
import './Hero.css';

const Hero = () => {
  const isMobile = window.innerWidth < 768;
  console.log(window.innerWidth)
  console.log(isMobile)
  
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120]px flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#63a774] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div id="headline-container" className="top-[100px] line-height-[3]">
          <div id="text-behind" className={styles.heroBlurText}>PETER {isMobile ? <br/> : ""}YELTON</div>
          <div id="text-behind-blur" className={styles.heroBlurText}>PETER {isMobile ? <br/> : ""}YELTON</div>
          <div id="text-front" className={styles.heroBlurText}>PETER {isMobile ? <br/> : ""}YELTON</div>
        </div>
        {/* <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Peter</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, mobile applications, and 3D visuals.
          </p>
        </div> */}
      </div>
      <MetalGearCanvas id="canvas-container"/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
