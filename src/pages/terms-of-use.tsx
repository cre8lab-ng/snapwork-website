import WebPageTitle from "@/components/webpagetitle";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "introduction", title: "Introduction & Acceptance", number: "1" },
    { id: "definitions", title: "Definitions", number: "2" },
    { id: "service-description", title: "Service Description", number: "3" },
    { id: "user-accounts", title: "User Accounts & Registration", number: "4" },
    { id: "user-responsibilities", title: "User Responsibilities", number: "5" },
    { id: "provider-responsibilities", title: "Service Provider Responsibilities", number: "6" },
    { id: "booking-payment", title: "Booking & Payment Terms", number: "7" },
    { id: "cancellation", title: "Cancellation & Refund Policy", number: "8" },
    { id: "quality-disputes", title: "Service Quality & Disputes", number: "9" },
    { id: "prohibited-conduct", title: "Prohibited Conduct", number: "10" },
    { id: "intellectual-property", title: "Intellectual Property", number: "11" },
    { id: "limitation-liability", title: "Limitation of Liability", number: "12" },
    { id: "indemnification", title: "Indemnification", number: "13" },
    { id: "termination", title: "Termination", number: "14" },
    { id: "governing-law", title: "Governing Law", number: "15" },
    { id: "changes-terms", title: "Changes to Terms", number: "16" },
    { id: "contact", title: "Contact Information", number: "17" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <WebPageTitle title="Terms of Use - Snapwork" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 text-darkblue  ">
                  Terms of Use
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Please read these terms carefully before using Snapwork&apos;s platform and services.
                </p>
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-medium text-blue-800">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Table of Contents */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4 text-darkblue">Table of Contents</h3>
                    <nav className="space-y-2">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-blue-50 ${
                            activeSection === section.id 
                              ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-500' 
                              : 'text-gray-600 hover:text-blue-600'
                          }`}
                        >
                          <span className="font-medium">{section.number}.</span> {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-8 lg:p-12">
                      
                      <section id="introduction" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                          Introduction & Acceptance of Terms
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Welcome to Snapwork! These Terms of Use (&quot;Terms&quot;) govern your access to and use of Snapwork&apos;s website, mobile application, and related services (collectively, the &quot;Platform&quot;).
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            By accessing, browsing, or using our Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Platform.
                          </p>
                          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-6">
                            <p className="text-amber-800 font-medium">
                              These Terms constitute a legally binding agreement between you and Snapwork Technologies Limited.
                            </p>
                          </div>
                        </div>
                      </section>

                      <section id="definitions" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                          Definitions
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-2">&quot;Customer&quot;</h4>
                              <p className="text-gray-700 text-sm">An individual or entity that books services through our Platform.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-2">&quot;Service Provider&quot;</h4>
                              <p className="text-gray-700 text-sm">A skilled professional who offers services through our Platform.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-2">&quot;Services&quot;</h4>
                              <p className="text-gray-700 text-sm">Professional services offered by Service Providers, including but not limited to cleaning, electrical work, plumbing, and other skilled trades.</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-2">&quot;Platform&quot;</h4>
                              <p className="text-gray-700 text-sm">Snapwork&apos;s website, mobile applications, and related digital services.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-2">&quot;User&quot;</h4>
                              <p className="text-gray-700 text-sm">Any person who accesses or uses our Platform, including both Customers and Service Providers.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-2">&quot;Booking&quot;</h4>
                              <p className="text-gray-700 text-sm">A confirmed appointment for services arranged through our Platform.</p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="service-description" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                          Service Description
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            Snapwork operates as a digital marketplace that connects Customers with qualified Service Providers across Nigeria. Our Platform facilitates:
                          </p>
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                              <h3 className="text-lg font-semibold mb-3 text-darkblue">For Customers</h3>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Browse and book professional services</li>
                                <li>• View Service Provider profiles and ratings</li>
                                <li>• Secure payment processing</li>
                                <li>• Customer support and dispute resolution</li>
                              </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                              <h3 className="text-lg font-semibold mb-3 text-darkblue">For Service Providers</h3>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Create professional profiles</li>
                                <li>• Receive and manage bookings</li>
                                <li>• Process payments securely</li>
                                <li>• Build customer relationships</li>
                              </ul>
                            </div>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-6">
                            <p className="text-red-800 font-medium">
                              Important: Snapwork is a platform facilitator only. We do not directly provide services or employ Service Providers.
                            </p>
                          </div>
                        </div>
                      </section>

                      <section id="user-accounts" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                          User Accounts & Registration
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold mb-3 text-darkblue">Account Requirements</h3>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>You must be at least 18 years old to create an account</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Provide accurate, current, and complete information</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Maintain and update your account information</li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Keep your login credentials secure and confidential</li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-3 text-darkblue">Account Security</h3>
                              <p className="text-gray-700 mb-4">
                                You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use or security breach.
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="user-responsibilities" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                          User Responsibilities
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 text-darkblue">Customer Responsibilities</h3>
                            <ul className="space-y-3 text-gray-700 text-sm">
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">✓</span>
                                <span>Provide accurate service requirements and location details</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">✓</span>
                                <span>Be present or ensure authorized access during service delivery</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">✓</span>
                                <span>Treat Service Providers with respect and professionalism</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">✓</span>
                                <span>Pay for services as agreed and on time</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">✓</span>
                                <span>Provide a safe working environment</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">✓</span>
                                <span>Report any issues or concerns promptly</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 text-darkblue">General User Obligations</h3>
                            <ul className="space-y-3 text-gray-700 text-sm">
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span>Comply with all applicable laws and regulations</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span>Use the Platform only for legitimate purposes</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span>Respect intellectual property rights</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span>Maintain confidentiality of sensitive information</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span>Follow community guidelines and standards</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span>Report violations or suspicious activities</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="provider-responsibilities" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                          Service Provider Responsibilities
                        </h2>
                        <div className="space-y-6">
                          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                            <h3 className="text-lg font-semibold mb-4 text-darkblue">Professional Standards</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Provide services as described and agreed</li>
                                <li>• Maintain professional qualifications and certifications</li>
                                <li>• Use appropriate tools and materials</li>
                                <li>• Follow industry best practices and safety standards</li>
                              </ul>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Complete work within agreed timeframes</li>
                                <li>• Communicate clearly and professionally</li>
                                <li>• Respect customer property and privacy</li>
                                <li>• Provide warranties where applicable</li>
                              </ul>
                            </div>
                          </div>
                          <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                            <h3 className="text-lg font-semibold mb-3 text-darkblue">Legal Compliance</h3>
                            <p className="text-gray-700 text-sm mb-3">
                              Service Providers must maintain all necessary licenses, permits, and insurance required for their trade and location.
                            </p>
                            <p className="text-gray-700 text-sm">
                              You are responsible for tax compliance and reporting related to income earned through our Platform.
                            </p>
                          </div>
                        </div>
                      </section>

                      <section id="booking-payment" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                          Booking & Payment Terms
                        </h2>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold mb-3 text-darkblue">Booking Process</h3>
                              <ol className="space-y-2 text-gray-700 text-sm">
                                <li>1. Customer selects service and provider</li>
                                <li>2. Service details and pricing confirmed</li>
                                <li>3. Payment processed securely</li>
                                <li>4. Booking confirmation sent to both parties</li>
                                <li>5. Service delivery as scheduled</li>
                              </ol>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold mb-3 text-darkblue">Payment Terms</h3>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Payments processed through secure gateways</li>
                                <li>• Service fees clearly displayed before booking</li>
                                <li>• Platform commission deducted from provider payments</li>
                                <li>• Refunds processed according to our policy</li>
                              </ul>
                            </div>
                          </div>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                            <h4 className="font-semibold text-yellow-800 mb-2">Payment Security</h4>
                            <p className="text-yellow-700 text-sm">
                              All payments are processed through PCI-compliant payment processors. We do not store complete payment card information on our servers.
                            </p>
                          </div>
                        </div>
                      </section>

                      <section id="cancellation" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                          Cancellation & Refund Policy
                        </h2>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg text-center">
                              <div className="text-2xl mb-2">✅</div>
                              <h4 className="font-semibold text-darkblue mb-2">24+ Hours</h4>
                              <p className="text-sm text-gray-700">Full refund available</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg text-center">
                              <div className="text-2xl mb-2">⚠️</div>
                              <h4 className="font-semibold text-darkblue mb-2">2-24 Hours</h4>
                              <p className="text-sm text-gray-700">50% cancellation fee</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg text-center">
                              <div className="text-2xl mb-2">❌</div>
                              <h4 className="font-semibold text-darkblue mb-2">&lt; 2 Hours</h4>
                              <p className="text-sm text-gray-700">No refund available</p>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3 text-darkblue">Special Circumstances</h3>
                            <p className="text-gray-700 text-sm mb-3">
                              Refunds may be considered outside normal policy for:
                            </p>
                            <ul className="space-y-1 text-gray-700 text-sm">
                              <li>• Service Provider no-shows or cancellations</li>
                              <li>• Emergency situations or force majeure events</li>
                              <li>• Service quality issues (subject to investigation)</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="quality-disputes" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                          Service Quality & Disputes
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            We strive to ensure high-quality service delivery. If you experience issues:
                          </p>
                          <div className="bg-blue-50 p-6 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold mb-3 text-darkblue">Dispute Resolution Process</h3>
                            <ol className="space-y-2 text-gray-700">
                              <li>1. <strong>Direct Communication:</strong> Attempt to resolve with the other party first</li>
                              <li>2. <strong>Platform Mediation:</strong> Contact our support team for assistance</li>
                              <li>3. <strong>Investigation:</strong> We review evidence and communications</li>
                              <li>4. <strong>Resolution:</strong> Appropriate action taken based on findings</li>
                            </ol>
                          </div>
                        </div>
                      </section>

                      <section id="prohibited-conduct" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                          Prohibited Conduct
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                              <h4 className="font-semibold text-red-800 mb-2">Strictly Prohibited</h4>
                              <ul className="space-y-1 text-red-700 text-sm">
                                <li>• Fraudulent or deceptive practices</li>
                                <li>• Harassment or discriminatory behavior</li>
                                <li>• Circumventing platform payments</li>
                                <li>• Sharing false or misleading information</li>
                              </ul>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                              <h4 className="font-semibold text-orange-800 mb-2">Platform Misuse</h4>
                              <ul className="space-y-1 text-orange-700 text-sm">
                                <li>• Creating multiple accounts</li>
                                <li>• Spamming or unsolicited communications</li>
                                <li>• Attempting to hack or disrupt services</li>
                                <li>• Violating intellectual property rights</li>
                              </ul>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                              <h4 className="font-semibold text-purple-800 mb-2">Safety Violations</h4>
                              <ul className="space-y-1 text-purple-700 text-sm">
                                <li>• Unsafe work practices</li>
                                <li>• Ignoring safety protocols</li>
                                <li>• Threatening or violent behavior</li>
                                <li>• Substance abuse during service</li>
                              </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                              <h4 className="font-semibold text-gray-800 mb-2">Consequences</h4>
                              <p className="text-gray-700 text-sm">
                                Violations may result in warnings, account suspension, or permanent termination, depending on severity.
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="intellectual-property" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                          Intellectual Property
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            The Snapwork Platform, including its design, functionality, content, and trademarks, is owned by Snapwork Technologies Limited and protected by intellectual property laws.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold mb-3 text-darkblue">Our Rights</h3>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Platform design and functionality</li>
                                <li>• Snapwork branding and trademarks</li>
                                <li>• Proprietary algorithms and systems</li>
                                <li>• Content created by Snapwork</li>
                              </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold mb-3 text-darkblue">Your Rights</h3>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Content you create and upload</li>
                                <li>• Your business information and data</li>
                                <li>• Photos and descriptions you provide</li>
                                <li>• Customer reviews and feedback</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="limitation-liability" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                          Limitation of Liability
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                            <h3 className="text-lg font-semibold mb-3 text-red-800">Important Disclaimer</h3>
                            <p className="text-red-700 mb-4">
                              Snapwork acts as an intermediary platform connecting customers with independent service providers. We do not directly provide services or employ service providers.
                            </p>
                            <p className="text-red-700 text-sm">
                              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SNAPWORK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM OR SERVICES.
                            </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-3">We Are Not Liable For:</h4>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Quality of services provided</li>
                                <li>• Actions of service providers or customers</li>
                                <li>• Property damage during service delivery</li>
                                <li>• Personal injury or accidents</li>
                                <li>• Disputes between users</li>
                              </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h4 className="font-semibold text-darkblue mb-3">Maximum Liability:</h4>
                              <p className="text-gray-700 text-sm mb-3">
                                Our total liability for any claim shall not exceed the amount of fees paid to Snapwork in the 12 months preceding the claim.
                              </p>
                              <p className="text-gray-700 text-sm">
                                This limitation applies regardless of the legal theory on which the claim is based.
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="indemnification" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
                          Indemnification
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            You agree to indemnify, defend, and hold harmless Snapwork, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
                          </p>
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>Your use of the Platform</li>
                              <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>Your violation of these Terms</li>
                              <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>Your violation of any law or regulation</li>
                              <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>Services provided or received through the Platform</li>
                              <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>Any content you submit or transmit</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="termination" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">14</span>
                          Termination
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3 text-darkblue">Your Rights</h3>
                            <p className="text-gray-700 text-sm mb-3">
                              You may terminate your account at any time by contacting our support team or using account settings.
                            </p>
                            <p className="text-gray-700 text-sm">
                              Termination does not affect completed transactions or ongoing service commitments.
                            </p>
                          </div>
                          <div className="bg-red-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3 text-darkblue">Our Rights</h3>
                            <p className="text-gray-700 text-sm mb-3">
                              We may suspend or terminate accounts for violations of these Terms, illegal activities, or other reasons at our discretion.
                            </p>
                            <p className="text-gray-700 text-sm">
                              We will provide reasonable notice except in cases of serious violations or legal requirements.
                            </p>
                          </div>
                        </div>
                      </section>

                      <section id="governing-law" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">15</span>
                          Governing Law
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <div className="bg-green-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of Nigerian courts.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              We encourage users to resolve disputes through our internal mediation process before pursuing legal action.
                            </p>
                          </div>
                        </div>
                      </section>

                      <section id="changes-terms" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">16</span>
                          Changes to These Terms
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. We will notify users of material changes through:
                          </p>
                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-2xl mb-2">📧</div>
                              <h4 className="font-semibold text-darkblue">Email Notification</h4>
                              <p className="text-sm text-gray-600">Sent to registered email address</p>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <div className="text-2xl mb-2">🔔</div>
                              <h4 className="font-semibold text-darkblue">Platform Notice</h4>
                              <p className="text-sm text-gray-600">Displayed on website and app</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                              <div className="text-2xl mb-2">📱</div>
                              <h4 className="font-semibold text-darkblue">Push Notification</h4>
                              <p className="text-sm text-gray-600">Mobile app alerts</p>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            Continued use of the Platform after changes constitutes acceptance of the updated Terms.
                          </p>
                        </div>
                      </section>

                      <section id="contact" className="mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">17</span>
                          Contact Information
                        </h2>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            If you have questions about these Terms of Use, need clarification on any provisions, or wish to report violations, please contact us:
                          </p>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold text-darkblue mb-2">Legal Inquiries</h4>
                              <p className="text-blue-600 font-medium">legal@snapwork.ng</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-darkblue mb-2">General Support</h4>
                              <p className="text-blue-600 font-medium">snap@work.ng</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-darkblue mb-2">Dispute Resolution</h4>
                              <p className="text-blue-600 font-medium">disputes@snapwork.ng</p>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-blue-200">
                            <p className="text-sm text-gray-600">
                              <strong>Snapwork Technologies Limited</strong><br />
                              Registered in Nigeria | Business Registration Number: [To be provided]<br />
                              We aim to respond to all inquiries within 48 hours during business days.
                            </p>
                          </div>
                        </div>
                      </section>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}