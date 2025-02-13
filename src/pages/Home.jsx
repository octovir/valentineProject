import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import myGif from "../assets/hello-kitty-pixel-art.gif";
import emoji1 from "../assets/emoji1.png";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

function Home() {
  const stepSize = 50; // ระยะขยับของปุ่ม No
  const padding = 20; // ป้องกันปุ่มออกนอกขอบจอ

  // ตำแหน่งเริ่มต้นของปุ่ม No (อยู่ใต้ปุ่ม Yes)
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // ให้ปุ่ม No เริ่มอยู่ตรงกลางใต้ปุ่ม Yes
    setPosition({ top: 80, left: 0 });
  }, []);

  const handleNoClick = () => {
    const maxX = window.innerWidth - 100 - padding;
    const maxY = window.innerHeight - 50 - padding;

    // คำนวณตำแหน่งใหม่ (ขยับทีละนิด)
    let newX = position.left + (Math.random() > 0.5 ? stepSize : -stepSize);
    let newY = position.top + (Math.random() > 0.5 ? stepSize : -stepSize);

    // ป้องกันปุ่มออกนอกขอบจอ
    newX = Math.max(-maxX / 2, Math.min(newX, maxX / 2));
    newY = Math.max(padding, Math.min(newY, maxY));

    setPosition({ left: newX, top: newY });
  };

  // particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
        className=" duration-1000 ease-in-out fixed top-0 left-0 w-full h-full bg-gradient-to-t from-rose-300 to-rose-50 flex flex-col justify-center items-center overflow-hidden">
      {/* particles */}
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
      

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }} 
        className="relative z-10 flex flex-col items-center">
        <img src={myGif} className="w-64 h-auto mb-4" />
        <div className="text-2xl text-rose-800">Do you love me Visa???</div>
        <div className=" opacity-30 text-rose-950 text-xs mt-2">made with ❤️ by ur bf</div>
      </motion.div>

      {/* ปุ่ม Yes & No (แนวตั้ง) */}
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex flex-col gap-6 mt-8">
        {/* ปุ่ม Yes */}
        <NavLink to="/love">
            <button
                className=" text-rose-800 bg-gray-50 hover:bg-gray-50 active:bg-transparent active:text-transparent rounded-2xl w-24 h-14 transition duration-200 ease-in- hover:scale-110 active:scale-90 shadow-lg">
            Yes
            </button>
        </NavLink>

        {/* ปุ่ม No ที่ขยับทีละนิด */}
        <button
          className=" text-gray-50 bg-rose-700 hover:bg-rose-800 active:bg-rose-900 hover:scale-105 active:scale-95 rounded-2xl w-24 h-14 absolute transition-all duration-150 ease-in-out shadow-lg"
          onClick={handleNoClick}
          style={{
            transform: `translate(${position.left}px, ${position.top}px)`,
          }}
        >
          No
        </button>
      </motion.div>
    </div>
  );
}

export default Home;