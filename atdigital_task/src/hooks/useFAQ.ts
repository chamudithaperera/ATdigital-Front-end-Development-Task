import { useState } from 'react';
import type { FAQItem } from '../types/index';

export const useFAQ = (initialFAQs: Omit<FAQItem, 'isOpen'>[]) => {
  const [faqs, setFaqs] = useState<FAQItem[]>(
    initialFAQs.map((faq, index) => ({ ...faq, isOpen: index === 0 }))
  );

  const toggleFAQ = (id: number) => {
    setFaqs(prevFaqs =>
      prevFaqs.map(faq =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return {
    faqs,
    toggleFAQ,
  };
};