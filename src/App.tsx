import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import WhatItDoes from './components/WhatItDoes';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 0,
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <Hero />
      <WhatItDoes />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}

export default App;