import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import myGif from "../assets/hello-kitty-pixel-art.gif";
import emoji1 from "../assets/emoji1.png";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { IoBackspace } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import kitty3 from "../assets/kitty3.gif";
import { IoMailOpen } from "react-icons/io5";

function Linkpage() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const handleClick = () => {
      window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank");
    };
    

    return (
        <div className="  absolute inset-0 w-full h-full bg-gradient-to-t from-rose-300 to-rose-50 duration-1000 ease-in-out flex flex-col justify-center items-center">
            <img src={kitty3} alt="hello kitty" className="w-56 h-auto mb-10" />
            <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }} className="z-10 grid md:flex md:flex-row md:justify-center md:items-center md:gap-14 grid-cols-2 gap-9 w-full max-w-md mx-8 place-items-center justify-items-center">
              <NavLink to="/">
                <motion.button 
                className="hover:bg-transparent hover:scale-105 active:scale-95 text-rose-900 hover:text-rose-50  rounded-2xl bg-rose-50 w-36 h-36 shadow-lg transition-all duration-150 flex justify-center items-center">
                  <IoBackspace size={100} className=""/>
                </motion.button> 
              </NavLink>
              <NavLink to="/Love">
                <button className="hover:bg-transparent hover:scale-105 active:scale-95 text-rose-900 hover:text-rose-50  rounded-2xl bg-rose-50 w-36 h-36 shadow-lg transition-all duration-150 flex justify-center items-center">
                  <IoMailOpen size={100}/>
                </button> 
              </NavLink>
              <NavLink to="/video">
                <button className="hover:bg-transparent hover:scale-105 active:scale-95 text-rose-900 hover:text-rose-50  rounded-2xl bg-rose-50 w-36 h-36 shadow-lg transition-all duration-150 flex justify-center items-center">
                  <IoVideocam size={100}/>
                </button> 
              </NavLink>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDAJ9OBoI-muxY7Jwqf7VoT1bUYA9KC3PVlLChX5pQLyZJ5w/viewform?usp=dialog"
                  target="blank">
                <button className="hover:bg-transparent hover:scale-105 active:scale-95 text-rose-900 hover:text-rose-50  rounded-2xl bg-rose-50 w-36 h-36 shadow-lg transition-all duration-150 flex justify-center items-center">
                  <IoDocument size={100} />
                </button> 
              </a>
            </motion.div>

            <Particles
                    id="tsparticles"
                    className="absolute top-0 left-0 w-full h-full"
                    init={particlesInit}
                    options={{
                      background: { color: "transparent" },
                      particles: {
                        number: { value: 14 },
                        shape: { type: "images", images: [{ src: emoji1 }] },
                        opacity: { value: 0.5 },
                        size: { value: { min: 20, max: 25 } },
                        move: { enable: true, speed: 0.5 },
                      },
                      interactivity: {
                        events: { onClick: { enable: true, mode: "push" } },
                        modes: { push: { quantity: 4 } },
                      },
                    }}
            />
        </div>
    )
}

export default Linkpage