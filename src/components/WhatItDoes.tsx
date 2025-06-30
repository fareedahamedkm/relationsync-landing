import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatItDoes: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTextRef = useRef<HTMLHeadingElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const emotionalKeywords = [
    'Trust', 'Communication', 'Vulnerability', 'Understanding',
    'Growth', 'Intimacy', 'Boundaries', 'Forgiveness',
    'Connection', 'Empathy', 'Healing', 'Clarity'
  ];

  useEffect(() => {
    // Horizontal scrolling text effect
    gsap.to(scrollTextRef.current, {
      x: '-50%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    // Animate left panel bullets
    gsap.fromTo(leftPanelRef.current?.children || [], {
      x: -100,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: leftPanelRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      }
    });

    // Animate floating keywords
    emotionalKeywords.forEach((_, index) => {
      gsap.fromTo(`.floating-word-${index}`, {
        y: 100,
        opacity: 0,
        rotation: Math.random() * 20 - 10,
      }, {
        y: 0,
        opacity: 0.8,
        rotation: 0,
        duration: 1,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightPanelRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
        }
      });
    });

  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-purple-100 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 overflow-hidden"
    >
      {/* Scrolling text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          ref={scrollTextRef}
          className="haetten text-4xl md:text-6xl lg:text-8xl opacity-10 whitespace-nowrap font-black italic text-purple-600 dark:text-pink-400"
          style={{ minWidth: '200%' }}
        >
          UNDERSTAND EACH OTHER ON A DEEPER LEVEL UNDERSTAND EACH OTHER ON A DEEPER LEVEL
        </h2>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Panel */}
            <div ref={leftPanelRef} className="space-y-8">
              <h3 className="haetten text-3xl md:text-4xl lg:text-5xl font-black text-purple-600 dark:text-pink-400 mb-8">
                WHAT WE DO
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-pink-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
                    Extract the thoughts and feelings you've never been able to express
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-pink-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
                    Use AI to analyze emotional patterns and relationship dynamics
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-pink-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
                    Generate personalized insights that confront and heal
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-pink-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
                    Provide actionable steps for relationship transformation
                  </p>
                </div>
              </div>
            </div>

            {/* Right Panel - Floating Keywords */}
            <div ref={rightPanelRef} className="relative h-96 lg:h-[500px]">
              {emotionalKeywords.map((keyword, index) => (
                <div
                  key={keyword}
                  className={`floating-word floating-word-${index}`}
                  style={{
                    left: `${Math.random() * 70}%`,
                    top: `${Math.random() * 80}%`,
                  }}
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItDoes;