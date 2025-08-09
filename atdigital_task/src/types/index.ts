export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
}

export interface NavigationState {
  isMobileMenuOpen: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}
