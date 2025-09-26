import Link from "next/link";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is Snapwork?",
    answer:
      "Snapwork is a platform that connects users with local service providers for various tasks and services.",
  },
  {
    question: "Do you offer same-day bookings?",
    answer:
      "Yes, we offer same-day bookings based on the availability of service providers in your area.",
  },
  {
    question: "What areas can i find Snapwork?",
    answer:
      "Snapwork is currently available in select cities. You can check availability through our app or website.",
  },
  {
    question: "How do I register as a service provider?",
    answer:
      "You can register as a service provider by signing up through our app and completing the verification process.",
  },
  {
    question: "Is Snapwork free to use?",
    answer:
      "Yes!\nSnapwork is completely free to use. You only pay for the service fee charged by the provider.",
  },
];

const FaqView = () => {
  const [selectedFaq, setSelectedFaq] = useState(faqData[4].question); // Start with "Is Snapwork free to use?"
  const [expandedFaq, setExpandedFaq] = useState<string | null>(faqData[4].question); // For mobile accordion
  const selected = faqData.find((faq) => faq.question === selectedFaq);

  const toggleFaq = (question: string) => {
    setExpandedFaq(expandedFaq === question ? null : question);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex p-6 md:p-12 bg-white">
        <div className="rounded-2xl w-full flex shadow-xl gap-6 bg-white">
          <div className="w-1/2 p-6 md:p-10 space-y-6">
            <h2 className="text-h1 mb-4 !text-darkblue">FAQs</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <button
                  key={faq.question}
                  className={`w-full text-left border-2 px-4 py-3 md:px-6 md:py-4 rounded-lg !text-body font-bold transition text-darkblue ${
                    selectedFaq === faq.question 
                      ? "bg-darkblue !text-white border-darkblue" 
                      : "bg-white border-gray-300 hover:border-darkblue"
                  }`}
                  onClick={() => setSelectedFaq(faq.question)}
                >
                  {faq.question}
                </button>
              ))}
            </div>
            <div className="pt-4 md:pt-6">
              <Link href="/" className="text-darkblue underline">
                See general FAQs →
              </Link>
            </div>
          </div>

          {/* Answers */}
          <div className="w-1/2 p-6 md:p-10 flex flex-col justify-start">
            <h2 className="text-h1 mb-4 !text-darkblue">Answers</h2>
            <div className="rounded-lg bg-darkblue !text-body leading-relaxed !text-white h-[300px] md:h-[400px] overflow-auto p-4 md:p-6">
              <p className="whitespace-pre-line">{selected ? selected.answer : ""}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Accordion Style */}
      <div className="md:hidden bg-white p-4 rounded-[20px] shadow-xl">
        <div className="mb-6">
          <h2 className="text-h2 mb-2">Frequently Asked Questions</h2>
          <p className="text-body">Tap on any question to see the answer</p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq) => (
            <div key={faq.question} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.question)}
                className="w-full px-4 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="text-sm font-semibold text-darkblue pr-4 leading-tight">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-darkblue transition-transform duration-200 ${
                      expandedFaq === faq.question ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                expandedFaq === faq.question 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-4 py-4 bg-darkblue text-white">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <Link href="/" className="text-darkblue text-sm font-medium underline">
            See general FAQs →
          </Link>
        </div>
      </div>
    </>
  );
};

export default FaqView;
