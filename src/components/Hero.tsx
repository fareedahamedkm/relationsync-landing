import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, taglineRef.current], {
      opacity: 0,
      y: 100,
      scale: 0.8,
    });

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    })
    .to(taglineRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4");

    // Continuous floating animation for title
    gsap.to(titleRef.current, {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center grain bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 dark:bg-pink-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1
          ref={titleRef}
          className="haetten text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black mb-12 leading-none gradient-text"
          style={{ letterSpacing: '0.2em' }}
        >
          RS
        </h1>
        
        <div className="flex items-center justify-center">
          <p
            ref={taglineRef}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-purple-600 dark:text-pink-400 typewriter"
            style={{ width: 'fit-content', margin: '0 auto' }}
          >
            Truth. Healing. Clarity.
          </p>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown className="w-8 h-8 text-purple-500 dark:text-pink-400" />
      </div>
    </section>
  );
};

export default Hero;
