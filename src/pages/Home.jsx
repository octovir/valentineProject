import React from 'react'
import myGif from '../assets/hello-kitty-pixel-art.gif'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Home() {
    const particlesInit = useCallback(async engine => {      
        await loadFull(engine);
      }, []);
    
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

  return (
    <body className='font-urbanist font-semibold bg-linear-to-t from-rose-300 to-rose-100'>
        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 5 },
                    },
                    number: {
                        value: 200,
                    },
                    move: {
                        direction: "none",
                        enable: true,  
                    }
                }
            }}

        />
    </body>
  )
}

export default Home