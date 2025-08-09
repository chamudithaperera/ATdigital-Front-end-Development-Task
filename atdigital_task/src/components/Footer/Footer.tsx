import React from 'react';
import atdigitalLogo from '../../assets/atdigitalLogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Company Info - Takes up more space */}
          <div className="md:col-span-6 space-y-8">
            <div className="flex items-center">
             <img 
               src={atdigitalLogo} 
               alt="AT Digital Logo" 
               className="h-12 w-auto"
             />
           </div>
            <p className="text-white/90 leading-relaxed text-lg max-w-md">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>

          {/* Our Technologies */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-white">Our Technologies</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-300">
                ReactJS
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-300">
                Gatsby
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-300">
                NextJS
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-300">
                NodeJS
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-white">Our Services</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-300">
                Social Media Marketing
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-300">
                Web & Mobile App Development
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-300">
                Data & Analytics
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="hidden md:block text-white/50">|</span>
          <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;