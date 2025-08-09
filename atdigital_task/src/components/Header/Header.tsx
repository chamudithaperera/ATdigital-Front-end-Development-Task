import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation.js';
import atdigitalLogo from '../../assets/atdigitalLogo.png';

const Header: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useNavigation();

  return (
    <header className="bg-primary text-white relative z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={atdigitalLogo} 
              alt="AT Digital Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#services" 
                className="text-white hover:text-secondary px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              >
                SERVICES
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-secondary px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              >
                ABOUT US
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-secondary px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              >
                CONTACT US
              </a>
              <a 
                href="#careers" 
                className="text-white hover:text-secondary px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              >
                CAREERS
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary hover:bg-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark rounded-lg mt-2">
            <a
              href="#services"
              className="text-white hover:text-secondary hover:bg-electric-indigo block px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              SERVICES
            </a>
            <a
              href="#about"
              className="text-white hover:text-secondary hover:bg-electric-indigo block px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              ABOUT US
            </a>
            <a
              href="#contact"
              className="text-white hover:text-secondary hover:bg-electric-indigo block px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              CONTACT US
            </a>
            <a
              href="#careers"
              className="text-white hover:text-secondary hover:bg-electric-indigo block px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              CAREERS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;