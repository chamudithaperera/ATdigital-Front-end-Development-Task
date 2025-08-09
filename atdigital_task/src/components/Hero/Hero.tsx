import React from 'react';
import heroBanner from '../../assets/herobanner.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="relative h-[600px] md:h-[650px] lg:h-[600px]">
        <img
          src={heroBanner}
          alt="Modern workspace with laptop"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay Box - Responsive positioning */}
        <div className="absolute 
          left-4 right-4 bottom-8 
          md:left-8 md:right-8 md:bottom-12 
          lg:left-16 lg:right-auto lg:top-1/2 lg:bottom-auto lg:transform lg:-translate-y-1/2 lg:w-[500px]
          w-auto">
          <div className="bg-gradient-to-r from-dark to-analogous-2 p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl">
            <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <button className="bg-secondary hover:bg-secondary/50 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded transition-all duration-300 text-sm md:text-base">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;