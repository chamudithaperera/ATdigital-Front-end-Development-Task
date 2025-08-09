import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useFAQ } from '../../hooks/useFAQ.ts';
import { faqData } from '../../data/faqData.ts';
import type { FAQItem } from '../../types/index.ts';

const FAQ: React.FC = () => {
  const { faqs, toggleFAQ } = useFAQ(faqData);

  return (
    <section className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-analogous-1 text-center mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq: FAQItem) => (
            <div
              key={faq.id}
              className="bg-[#FAF8FF] rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
              >
                <h3 className={`text-lg font-medium pr-4 transition-colors duration-300 ${
                  faq.isOpen ? 'text-analogous-1' : 'text-black'
                }`}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {faq.isOpen ? (
                    <Minus size={20} className="text-gray-600" />
                  ) : (
                    <Plus size={20} className="text-gray-600" />
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
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 font-semibold leading-relaxed pt-4">
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