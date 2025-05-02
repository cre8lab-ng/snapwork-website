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
    question: "What areas can I find Snapwork?",
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
      "Yes, Snapwork is free for users. Service fees may apply when hiring or offering services.",
  },
];

const FaqView = () => {
  const [selectedFaq, setSelectedFaq] = useState(faqData[0].question);
  const selected = faqData.find((faq) => faq.question === selectedFaq);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex p-6 md:p-12 bg-lightblue-100">
        <div className="rounded-2xl w-full flex shadow-xl gap-6">
          {/* Questions */}
          <div className="w-1/2 p-6 md:p-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-darkblue mb-4">FAQs</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <button
                  key={faq.question}
                  className={`w-full text-left border border-darkblue px-4 py-3 md:px-6 md:py-4 rounded-lg text-base md:text-lg font-bold transition text-darkblue ${
                    selectedFaq === faq.question ? "bg-lightblue-200" : ""
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-darkblue mb-4">Answers</h2>
            <div className="rounded bg-darkblue text-base md:text-lg opacity-90 leading-relaxed text-white h-[300px] md:h-[400px] overflow-auto p-4 md:p-6">
              <p>{selected ? selected.answer : ""}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden min-h-screen bg-lightblue-100 flex flex-col justify-between p-4 rounded-[20px] text-darkblue shadow-xl">
        {/* Answer Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold">FAQs</h2>
          <p className="text-base leading-relaxed">
            {selected ? selected.answer : ""}
          </p>
        </div>

        {/* Scrollable Questions */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4 w-max pb-2">
            {faqData.map((faq) => (
              <button
                key={faq.question}
                onClick={() => setSelectedFaq(faq.question)}
                className={`min-w-[200px] whitespace-nowrap px-4 py-3 rounded-xl shadow-md text-sm font-semibold border border-darkblue ${
                  selectedFaq === faq.question
                    ? "bg-lightblue-200"
                    : "bg-white text-darkblue"
                }`}
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqView;
