import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

const Header: React.FC = () => {
    const { isMobileMenuOpen, toggleMobileMenu } = useNavigation();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">AT Digital</div>
        </div>
      </div>
    </header>
  );
};

export default Header;