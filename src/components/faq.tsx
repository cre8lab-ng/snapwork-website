import Link from "next/link";
import React, { useState } from "react";

const faqData: { question: string; answer: string }[] = [
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
      "Yes, Snapwork is free for users. Service fees may apply when hiring or offering services.",
  },
];

const FaqView = () => {
  const [selectedFaq, setSelectedFaq] = useState<string | null>(
    faqData[0].question
  ); 
  const selected = faqData.find((faq) => faq.question === selectedFaq);

  return (
    <div className="p-12 bg-lightblue-100">
      <div className="rounded-2xl w-full flex shadow-xl">
        <div className="w-1/2 p-10 space-y-6">
          <h2 className="text-4xl font-extrabold text-darkblue mb-4">FAQs</h2>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <button
                key={faq.question}
                className="w-full text-left border border-darkblue px-6 py-4 rounded-lg text-lg font-bold transition text-darkblue"
                onClick={() => setSelectedFaq(faq.question)}
              >
                {faq.question}
              </button>
            ))}
          </div>
          <div className="pt-6">
            <Link href="/">See general FAQs →</Link>
          </div>
        </div>
        <div className="w-1/2  p-10 flex flex-col justify-start min-h-screen ">
          <h2 className="text-4xl font-extrabold text-darkblue mb-4">
            Answers
          </h2>
          <div className="rounded bg-darkblue text-lg opacity-90 leading-relaxed text-white h-[400px] overflow-auto p-6">
            <p> {selected ? selected.answer : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqView;
