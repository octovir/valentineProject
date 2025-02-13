import React from 'react'

function tsparticles() {
    const particlesInit = useCallback(async engine => {      
        await loadFull(engine);
      }, []);
    
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);
  return (
    <div>tsparticles</div>
  )
}

export default tsparticles