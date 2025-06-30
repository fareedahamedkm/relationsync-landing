import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = [step1Ref.current, step2Ref.current, step3Ref.current];
    
    steps.forEach((step, index) => {
      if (!step) return;
      
      // Set initial state
      gsap.set(step, {
        scale: 0.5,
        opacity: 0,
        y: 100,
      });

      // Create scroll trigger for each step
      ScrollTrigger.create({
        trigger: step,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(step, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.2,
          });
        },
        onLeave: () => {
          gsap.to(step, {
            scale: 0.8,
            opacity: 0.3,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
        onEnterBack: () => {
          gsap.to(step, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-pink-100 via-purple-50 to-pink-50 dark:from-purple-900/10 dark:via-gray-900 dark:to-pink-900/10 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="haetten text-4xl md:text-6xl lg:text-7xl font-black gradient-text mb-8">
            HOW IT WORKS
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Three powerful steps to transform your relationship
          </p>
        </div>

        <div className="space-y-32">
          {/* Step 1: Answer */}
          <div ref={step1Ref} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <span className="haetten text-8xl md:text-9xl lg:text-[10rem] font-black text-purple-200 dark:text-pink-200 opacity-20 absolute -top-8 -left-4">
                  01
                </span>
                <h3 className="haetten text-5xl md:text-6xl lg:text-7xl font-black text-purple-600 dark:text-pink-400 relative z-10">
                  ANSWER
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-light mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
                Complete our carefully crafted questionnaire designed to unlock the emotions and thoughts you've never shared.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg">
                <div className="space-y-4">
                  <div className="h-4 bg-purple-100 dark:bg-purple-800/30 rounded animate-pulse"></div>
                  <div className="h-4 bg-purple-100 dark:bg-purple-800/30 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-purple-100 dark:bg-purple-800/30 rounded w-1/2 animate-pulse"></div>
                  <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-pink-500/30">
                    <div className="h-20 bg-purple-100 dark:bg-purple-800/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Reflect */}
          <div ref={step2Ref} className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <span className="haetten text-8xl md:text-9xl lg:text-[10rem] font-black text-purple-200 dark:text-pink-200 opacity-20 absolute -top-8 -right-4">
                  02
                </span>
                <h3 className="haetten text-5xl md:text-6xl lg:text-7xl font-black text-purple-600 dark:text-pink-400 relative z-10 text-right lg:text-right">
                  REFLECT
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-light mt-6 leading-relaxed text-gray-700 dark:text-gray-300 text-right lg:text-right">
                Our AI analyzes your responses and generates profound insights about your relationship patterns and emotional landscape.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-lg border border-purple-200 dark:border-pink-500/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-500 dark:bg-pink-400 rounded-full animate-ping"></div>
                  </div>
                  <p className="text-purple-600 dark:text-pink-400 font-medium">AI Analysis in Progress...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Repair */}
          <div ref={step3Ref} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <span className="haetten text-8xl md:text-9xl lg:text-[10rem] font-black text-purple-200 dark:text-pink-200 opacity-20 absolute -top-8 -left-4">
                  03
                </span>
                <h3 className="haetten text-5xl md:text-6xl lg:text-7xl font-black text-purple-600 dark:text-pink-400 relative z-10">
                  REPAIR
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-light mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
                Receive personalized action plans, exercises, and insights to heal, grow, and strengthen your relationship.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Communication Exercise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Trust Building Activity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Emotional Check-in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;