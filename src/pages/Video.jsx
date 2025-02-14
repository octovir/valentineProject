import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import myGif from "../assets/hello-kitty-pixel-art.gif";
import emoji1 from "../assets/emoji1.png";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";

function Video() {
    // particles
      const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
      }, []);

  return (
    <div className="  absolute inset-0 w-full h-full bg-gradient-to-t from-rose-200 to-rose-50 duration-1000 ease-in-out flex flex-col justify-center items-center">
    <Particles
            id="tsparticles"
            className="absolute top-0 left-0 w-full h-full"
            init={particlesInit}
            options={{
              particles: {
                number: { value: 100 },
                shape: { type: "images", images: [{ src: emoji1 }] },
                opacity: { value: 0.5 },
                size: { value: { min: 30, max: 35 } },
                move: { enable: true, speed: 0.5 },
              },
              interactivity: {
                events: { onClick: { enable: true, mode: "push" } },
                modes: { push: { quantity: 4 } },
              },
            }}
          />

    <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }} className="w-[375px] h-[666px] mx-auto z-10">
      <iframe
        className="w-full h-full rounded-xl shadow-2xl"
        src={`https://www.youtube.com/embed/PMNuTXDqYjc?si=7ai2UyDHSDzp7ZWL`}
        title="YouTube Short"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
    <div className="z-10">
        <NavLink to="/link">
            <button className="z-10 w-16 h-16 hover:text-rose-50 active:text-rose-50 bg-rose-50 rounded-full flex justify-center items-center transition-all duration-150 ease-in-out shadow-lg hover:bg-rose-800 active:bg-rose-900 hover:scale-105 active:scale-95 mt-10">
                <IoMdArrowBack size={28}/>
            </button>
        </NavLink>
    </div>
        
    </div>
    
  )
}

export default Video