import React from 'react';
import heroBanner from '../../assets/herobanner.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="relative h-[500px] lg:h-[600px]">
        <img
          src={heroBanner}
          alt="Modern workspace with laptop"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay Box */}
        <div className="absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 w-[400px] lg:w-[500px]">
          <div className="bg-gradient-to-r from-[#4AE5C3] to-[#00D4FF] p-8 lg:p-12 rounded-lg shadow-2xl">
            <h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight mb-6">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <button className="bg-secondary hover:bg-secondary/50 text-white font-semibold px-8 py-3 rounded transition-all duration-300">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;