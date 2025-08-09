import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useFAQ } from '../../hooks/useFAQ.ts';
import { faqData } from '../../data/faqData.ts';
import type { FAQItem } from '../../types/index.ts';

const FAQ: React.FC = () => {
  const { faqs, toggleFAQ } = useFAQ(faqData);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#6366f1] text-center mb-16">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq: FAQItem) => (
            <div
              key={faq.id}
              className="bg-[#FAF5FF] rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#F3E8FF] transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-[#6366f1] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {faq.isOpen ? (
                    <Minus size={20} className="text-[#6366f1]" />
                  ) : (
                    <Plus size={20} className="text-[#6366f1]" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  faq.isOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;