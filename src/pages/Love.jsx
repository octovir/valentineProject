import React, {useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import emoji1 from "../assets/emoji1.png";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import kitty2 from "../assets/kitty2.gif";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router";

function Love() {
    const startDate = new Date("2023-08-20T00:00:00");

    const calculateTime = () => {
    const now = new Date();
    const diffMs = now - startDate;

    return {
      days: Math.floor(diffMs / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diffMs / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diffMs / (1000 * 60)) % 60),
      seconds: Math.floor((diffMs / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //particle
  const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);
  return (
    <div className="font-urbanist font-medium absolute inset-0 w-full h-full bg-gradient-to-t from-rose-200 to-rose-50 duration-1000 ease-in-out  flex flex-col pb-2 pt-6 justify-center items-center overflow-hidden">
      {/* particles */}
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 20 },
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
        <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}  className="z-10 mb-8 text-rose-700">
            <div className="flex flex-col justify-center items-center">
                <img src={kitty2} alt="lovely" className="w-20 h-auto mb-2" />
                <div className="text-sm">together for :3</div>
            </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }} 
            className="z-10 flex flex-col md:flex-row justify-center items-center gap-6">
            <div className=" p-2 flex flex-col justify-center items-center text-2xl text-rose-950 rounded-3xl w-28 h-28 bg-rose-50 shadow-lg">
                <div className="text-3xl  text-rose-700 ">{time.days}</div>
                <div>days</div>
            </div>
            <div className=" p-2 flex flex-col justify-center items-center text-2xl text-rose-950 rounded-3xl w-28 h-28 bg-rose-50 shadow-lg">
                <div className="text-3xl  text-rose-700 ">{time.hours}</div>
                <div>hours</div>
            </div>
            <div className=" p-2 flex flex-col justify-center items-center text-2xl text-rose-950 rounded-3xl w-28 h-28 bg-rose-50 shadow-lg">
                <div className="text-3xl  text-rose-700 ">{time.minutes}</div>
                <div>minutes</div>
            </div>
            <div className=" p-2 flex flex-col justify-center items-center text-2xl text-rose-950 rounded-3xl w-28 h-28 bg-rose-50 shadow-lg mb-2">
                <div className="text-3xl  text-rose-700 ">{time.seconds}</div>
                <div>seconds</div>
            </div>

            <NavLink to="/link">
                <button className="w-12 h-12 bg-rose-700 rounded-full flex justify-center items-center transition-all duration-150 ease-in-out shadow-lg hover:bg-rose-800 active:bg-rose-900 hover:scale-105 active:scale-95">
                    <IoMdArrowBack size={24} color="#ffff"/>
                </button>
            </NavLink>
        </motion.div>

        {/* mail */}
        <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }} className="z-10 rounded-2xl shadow-lg bg-rose-50 mt-10 flex flex-col justify-center items-start w-[60%] p-20 text-rose-900">
          <div className="text-3xl">
            Happy Valentine’s Day na Visaa! ❤️
          </div>
          <div className=" mt-5 text-xl text-start">
          I’m really sorry for making you wait. This website was made with love. I hope you’re having a wonderful time today naaa. This day always special for me. I’m so happy that we’re together. I can’t wait to see you naa. I miss you so much, my lovely Visaa.           </div>
          <div className="mt-4 text-md text-start font-thai1 text-rose-300">
            **อย่าลืมไปกรอกฟอร์มด้วย เดี๋ยวกลับมาแล้วพาไปเที่ยววว
          </div>
          <div className="mt-5 text-xl">
            Love you, Visa 💕
          </div>
        </motion.div>
    </div>
  );
}

export default Love