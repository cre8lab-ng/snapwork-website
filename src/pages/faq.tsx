import Link from "next/link";
import React, { useState } from "react";
import WebPageTitle from "../components/webpagetitle";

const generalFaqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is Snapwork?",
        answer: "Snapwork is a comprehensive platform that connects users with verified local service providers for various tasks and services. Whether you need home repairs, cleaning, maintenance, or professional services, Snapwork makes it easy to find, book, and manage quality service providers in your area."
      },
      {
        question: "How do I get started with Snapwork?",
        answer: "Getting started is simple:\n1. Download the Snapwork app or visit our website\n2. Create your account with basic information\n3. Browse available services in your area\n4. Select a service provider and book your appointment\n5. Enjoy hassle-free service delivery"
      },
      {
        question: "Is Snapwork available in my area?",
        answer: "Snapwork is rapidly expanding across multiple cities. You can check availability by entering your location on our app or website. If we&apos;re not in your area yet, you can join our waitlist to be notified when we launch in your city."
      }
    ]
  },
  {
    category: "Booking & Scheduling",
    questions: [
      {
        question: "Do you offer same-day bookings?",
        answer: "Yes! We offer same-day bookings based on the availability of service providers in your area. Many of our providers can accommodate urgent requests, and our platform will show you real-time availability for immediate booking."
      },
      {
        question: "How far in advance can I book a service?",
        answer: "You can book services up to 30 days in advance. This is perfect for planning ahead for regular maintenance, special events, or seasonal services. Early booking also gives you access to a wider selection of providers."
      },
      {
        question: "Can I reschedule or cancel my booking?",
        answer: "Yes, you can reschedule or cancel your booking through the app or website. Please note our cancellation policy:\n• Free cancellation up to 24 hours before service\n• 50% charge for cancellations within 24 hours\n• Full charge for no-shows or same-day cancellations"
      },
      {
        question: "What if a service provider cancels on me?",
        answer: "If a service provider needs to cancel, we&apos;ll immediately notify you and help you find an alternative provider at the same rate. If no suitable replacement is available, you&apos;ll receive a full refund and a service credit for the inconvenience."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        question: "Is Snapwork free to use?",
        answer: "Yes! Snapwork is completely free to use for customers. You only pay the service fee charged by the provider. There are no hidden platform fees, subscription costs, or booking charges."
      },
      {
        question: "How is pricing determined?",
        answer: "Service providers set their own competitive rates based on:\n• Type and complexity of service\n• Duration and materials required\n• Local market rates\n• Provider experience and ratings\n\nYou&apos;ll see transparent pricing upfront before booking, with no surprise charges."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major payment methods including:\n• Credit and debit cards (Visa, MasterCard, American Express)\n• Digital wallets (Apple Pay, Google Pay)\n• Bank transfers\n• Cash payments (where applicable)\n\nAll transactions are secure and encrypted."
      },
      {
        question: "When do I pay for services?",
        answer: "Payment is typically processed after service completion and your approval. For larger projects, some providers may request a deposit upfront. You&apos;ll always know the payment terms before booking."
      }
    ]
  },
  {
    category: "Service Providers",
    questions: [
      {
        question: "How do you vet service providers?",
        answer: "All service providers go through our comprehensive verification process:\n• Background checks and identity verification\n• License and insurance verification (where required)\n• Skills assessment and portfolio review\n• Reference checks from previous clients\n• Ongoing performance monitoring and customer feedback"
      },
      {
        question: "How do I choose the right service provider?",
        answer: "Our platform provides detailed information to help you choose:\n• Provider profiles with photos and descriptions\n• Customer reviews and ratings\n• Portfolio of previous work\n• Response time and availability\n• Pricing and service packages\n• Verification badges and certifications"
      },
      {
        question: "What if I&apos;m not satisfied with the service?",
        answer: "Your satisfaction is our priority. If you&apos;re not happy with the service:\n1. Contact the provider directly to resolve the issue\n2. If unresolved, reach out to our customer support\n3. We&apos;ll mediate and work toward a fair solution\n4. In cases of poor service, we offer refunds or service credits\n5. Providers with consistent issues are removed from our platform"
      }
    ]
  },
  {
    category: "For Service Providers",
    questions: [
      {
        question: "How do I register as a service provider?",
        answer: "To become a Snapwork service provider:\n1. Complete our online application with your details\n2. Upload required documents (ID, licenses, insurance)\n3. Pass our verification and background check process\n4. Complete your profile with photos and service descriptions\n5. Start receiving booking requests from customers\n\nThe entire process typically takes 3-5 business days."
      },
      {
        question: "What are the requirements to join as a provider?",
        answer: "Basic requirements include:\n• Valid government-issued ID\n• Proof of relevant skills/experience\n• Professional liability insurance (for certain services)\n• Clean background check\n• Smartphone with internet access\n• Commitment to quality service and professionalism"
      },
      {
        question: "How much can I earn as a service provider?",
        answer: "Earnings vary based on:\n• Type of services offered\n• Hours worked and availability\n• Customer ratings and repeat business\n• Local demand and competition\n\nMany providers earn $25-75+ per hour. Top-rated providers with consistent availability often earn significantly more through repeat customers and referrals."
      },
      {
        question: "How do I get paid as a service provider?",
        answer: "Payments are processed quickly and securely:\n• Automatic payment after service completion\n• Weekly direct deposits to your bank account\n• Real-time earnings tracking in your provider app\n• Detailed payment history and tax documents\n• No hidden fees or deductions from your earnings"
      }
    ]
  },
  {
    category: "Safety & Support",
    questions: [
      {
        question: "How do you ensure safety and security?",
        answer: "Safety is our top priority:\n• All providers undergo thorough background checks\n• Insurance coverage for qualifying services\n• Real-time GPS tracking during service visits\n• 24/7 customer support and emergency assistance\n• Secure payment processing with fraud protection\n• Regular safety training and updates for providers"
      },
      {
        question: "What if there&apos;s an emergency during service?",
        answer: "In case of emergency:\n• Contact emergency services (911) immediately if needed\n• Report the incident to Snapwork support immediately\n• Our 24/7 support team will assist with next steps\n• We work with insurance providers to handle any claims\n• Follow-up support is provided for all parties involved"
      },
      {
        question: "How can I contact customer support?",
        answer: "Our customer support team is available 24/7:\n• In-app chat support (fastest response)\n• Email: support@snapwork.com\n• Phone: 1-800-SNAPWORK\n• Help center with FAQs and guides\n• Social media channels for general inquiries\n\nWe typically respond within minutes during business hours and within a few hours outside business hours."
      }
    ]
  }
];

const GeneralFaqPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Getting Started");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const currentCategory = generalFaqData.find(cat => cat.category === selectedCategory);

  const toggleQuestion = (question: string) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <>
      <WebPageTitle title="FAQ - Snapwork" />
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about Snapwork&apos;s services, booking process, and more.
              </p>
            </div>

            {/* FAQ Content */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Desktop View */}
              <div className="hidden lg:flex">
                {/* Categories Sidebar */}
                <div className="w-1/3 bg-gray-50 border-r border-gray-200">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-darkblue mb-6">Categories</h2>
                    <div className="space-y-2">
                      {generalFaqData.map((category) => (
                        <button
                           key={category.category}
                           onClick={() => {
                             setSelectedCategory(category.category);
                           }}
                           className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                             selectedCategory === category.category
                               ? 'bg-darkblue text-white'
                               : 'text-gray-700 hover:bg-gray-100'
                           }`}
                         >
                          {category.category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Questions and Answers */}
                <div className="flex-1">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">{selectedCategory}</h2>
                    <div className="space-y-4">
                      {currentCategory?.questions.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleQuestion(faq.question)}
                            className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="font-semibold text-darkblue pr-4">{faq.question}</h3>
                              <svg
                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                  expandedQuestion === faq.question ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              expandedQuestion === faq.question
                                ? 'max-h-96 opacity-100'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="p-4 pt-0 text-gray-600 whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View */}
              <div className="lg:hidden">
                <div className="p-6">
                  <div className="space-y-6">
                    {generalFaqData.map((category) => (
                      <div key={category.category}>
                        <h2 className="text-xl font-bold text-darkblue mb-4">{category.category}</h2>
                        <div className="space-y-3">
                          {category.questions.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                              <button
                                onClick={() => toggleQuestion(faq.question)}
                                className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="flex justify-between items-center">
                                  <h3 className="font-semibold text-darkblue pr-4">{faq.question}</h3>
                                  <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                      expandedQuestion === faq.question ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  expandedQuestion === faq.question
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                }`}
                              >
                                <div className="p-4 pt-0 text-gray-600 whitespace-pre-line">
                                  {faq.answer}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support Section */}
            <div className="bg-gradient-to-r from-darkblue to-blue-600 text-white rounded-lg p-8 mt-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
                <p className="text-lg opacity-90 mb-6">
                  Our support team is here to help you 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-white text-darkblue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                  >
                    Contact Support
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GeneralFaqPage;