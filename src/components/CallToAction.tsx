import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background pulsing animation
    gsap.to(backgroundRef.current, {
      scale: 1.1,
      duration: 4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Title entrance animation
    gsap.fromTo(titleRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.8,
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      }
    });

    // Button entrance animation
    gsap.fromTo(buttonRef.current, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
      }
    });

    // Button hover animations
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    }

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden"
    >
      {/* Animated background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 opacity-50"
      />

      {/* Floating hearts */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-purple-300 dark:text-pink-300 animate-pulse opacity-30"
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            ref={titleRef}
            className="haetten text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black gradient-text leading-none"
            style={{ letterSpacing: '0.1em' }}
          >
            DIAGNOSE
            <br />
            YOUR LOVE
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stop avoiding the conversations that matter. Start healing the relationship you deserve.
          </p>

          <button
            ref={buttonRef}
            className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-6 text-xl md:text-2xl font-bold rounded-lg transition-all duration-300 pulse-glow"
            onClick={() => window.open('https://relationsync.netlify.app', '_blank')}
          >
            <span className="flex items-center gap-4">
              Start Diagnostic
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={28} />
            </span>
          </button>

          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-light">
            Join thousands of couples who have transformed their relationships
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
