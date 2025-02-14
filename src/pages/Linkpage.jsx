import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import myGif from "../assets/hello-kitty-pixel-art.gif";
import emoji1 from "../assets/emoji1.png";
import { NavLink } from "react-router";
import { motion } from "framer-motion";


function Linkpage() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className=" absolute inset-0 w-full h-full bg-gradient-to-t from-rose-300 to-rose-50 duration-1000 ease-in-out flex justify-center items-center">
            <div className="z-10 grid grid-cols-2 gap-9 w-full max-w-md mx-9 place-items-center justify-items-center">
              <NavLink to="/">
                <button className="rounded-2xl bg-rose-50 w-36 h-36">

                </button> 
              </NavLink>
                <button className="rounded-2xl bg-rose-50 w-36 h-36">

                </button>
                <button className="rounded-2xl bg-rose-50 w-36 h-36">

                </button>
                <button className="rounded-2xl bg-rose-50 w-36 h-36">

                </button>
            </div>

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