import { useState } from 'react';
import type { NavigationState } from '../types/index';

export const useNavigation = (): NavigationState & { toggleMobileMenu: () => void } => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
  };
};