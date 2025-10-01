import WebPageTitle from "@/components/webpagetitle";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "introduction", title: "Introduction", number: "1" },
    { id: "information-collect", title: "Information We Collect", number: "2" },
    { id: "how-we-use", title: "How We Use Your Information", number: "3" },
    { id: "information-sharing", title: "Information Sharing and Disclosure", number: "4" },
    { id: "data-security", title: "Data Security", number: "5" },
    { id: "data-retention", title: "Data Retention", number: "6" },
    { id: "your-rights", title: "Your Rights and Choices", number: "7" },
    { id: "cookies", title: "Cookies and Tracking", number: "8" },
    { id: "third-party", title: "Third-Party Services", number: "9" },
    { id: "children", title: "Children's Privacy", number: "10" },
    { id: "changes", title: "Changes to This Policy", number: "11" },
    { id: "contact", title: "Contact Information", number: "12" }
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
      <WebPageTitle title="Privacy Policy - Snapwork" />
      <div className="min-h-screen bg-gray-50">
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 text-darkblue  ">
                  Privacy Policy
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Your privacy is important to us. This policy explains how Snapwork collects, uses, and protects your personal information.
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
                          Introduction
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Welcome to Snapwork. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services and tell you about your privacy rights and how the law protects you.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Snapwork operates as a digital platform connecting customers with skilled service providers across Nigeria. This policy applies to all users of our platform, including customers and service providers.
                          </p>
                        </div>
                      </section>

                      <section id="information-collect" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                          Information We Collect
                        </h2>
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-darkblue">Personal Information</h3>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Name, email address, and phone number</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Physical address and location data</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Payment information and billing details</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Profile photos and identification documents</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-darkblue">Usage Information</h3>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Service booking history and preferences</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Communication records with service providers</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Device information and IP addresses</li>
                              <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Website usage patterns and analytics</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="how-we-use" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                          How We Use Your Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                            <h3 className="text-lg font-semibold mb-3 text-darkblue">Service Delivery</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>• Process and fulfill service bookings</li>
                              <li>• Facilitate communication between users</li>
                              <li>• Handle payments and transactions</li>
                              <li>• Provide customer support</li>
                            </ul>
                          </div>
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                            <h3 className="text-lg font-semibold mb-3 text-darkblue">Platform Improvement</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>• Analyze usage patterns and preferences</li>
                              <li>• Develop new features and services</li>
                              <li>• Ensure platform security and safety</li>
                              <li>• Conduct research and analytics</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="information-sharing" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                          Information Sharing and Disclosure
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                          </p>
                          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-6">
                            <h4 className="font-semibold text-amber-800 mb-2">With Service Providers</h4>
                            <p className="text-amber-700">Limited information necessary to complete your service booking, including contact details and service requirements.</p>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                            <h4 className="font-semibold text-red-800 mb-2">Legal Requirements</h4>
                            <p className="text-red-700">When required by law, court order, or to protect our rights and the safety of our users.</p>
                          </div>
                        </div>
                      </section>

                      <section id="data-security" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                          Data Security
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            We implement industry-standard security measures to protect your personal information:
                          </p>
                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-2xl mb-2">🔒</div>
                              <h4 className="font-semibold text-darkblue">Encryption</h4>
                              <p className="text-sm text-gray-600">SSL/TLS encryption for data transmission</p>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <div className="text-2xl mb-2">🛡️</div>
                              <h4 className="font-semibold text-darkblue">Access Control</h4>
                              <p className="text-sm text-gray-600">Restricted access to authorized personnel</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                              <div className="text-2xl mb-2">🔍</div>
                              <h4 className="font-semibold text-darkblue">Monitoring</h4>
                              <p className="text-sm text-gray-600">Regular security audits and monitoring</p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="data-retention" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                          Data Retention
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Typically, we retain account information for 7 years after account closure, and transaction records for 10 years as required by Nigerian financial regulations.
                          </p>
                        </div>
                      </section>

                      <section id="your-rights" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                          Your Rights and Choices
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <div className="bg-blue-100 p-2 rounded-full">
                                <span className="text-blue-600 font-bold">👁️</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-darkblue">Access</h4>
                                <p className="text-gray-600 text-sm">Request a copy of your personal data</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="bg-green-100 p-2 rounded-full">
                                <span className="text-green-600 font-bold">✏️</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-darkblue">Correction</h4>
                                <p className="text-gray-600 text-sm">Update or correct inaccurate information</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="bg-red-100 p-2 rounded-full">
                                <span className="text-red-600 font-bold">🗑️</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-darkblue">Deletion</h4>
                                <p className="text-gray-600 text-sm">Request deletion of your personal data</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <div className="bg-purple-100 p-2 rounded-full">
                                <span className="text-purple-600 font-bold">📤</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-darkblue">Portability</h4>
                                <p className="text-gray-600 text-sm">Export your data in a portable format</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="bg-orange-100 p-2 rounded-full">
                                <span className="text-orange-600 font-bold">✋</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-darkblue">Objection</h4>
                                <p className="text-gray-600 text-sm">Object to certain data processing</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="bg-gray-100 p-2 rounded-full">
                                <span className="text-gray-600 font-bold">📧</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-darkblue">Opt-out</h4>
                                <p className="text-gray-600 text-sm">Unsubscribe from marketing communications</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section id="cookies" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                          Cookies and Tracking
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
                          </p>
                        </div>
                      </section>

                      <section id="third-party" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                          Third-Party Services
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Our platform may integrate with third-party services for payments, analytics, and communication. These services have their own privacy policies, and we encourage you to review them.
                          </p>
                        </div>
                      </section>

                      <section id="children" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                          Children&apos;s Privacy
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child, please contact us immediately.
                          </p>
                        </div>
                      </section>

                      <section id="changes" className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                          Changes to This Policy
                        </h2>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                          </p>
                        </div>
                      </section>

                      <section id="contact" className="mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-darkblue flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                          Contact Information
                        </h2>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            If you have any questions about this Privacy Policy, your data rights, or our privacy practices, please don&apos;t hesitate to contact us:
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-darkblue mb-2">Email</h4>
                              <p className="text-blue-600 font-medium">privacy@snapwork.ng</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-darkblue mb-2">General Inquiries</h4>
                              <p className="text-blue-600 font-medium">snap@work.ng</p>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-blue-200">
                            <p className="text-sm text-gray-600">
                              We aim to respond to all privacy-related inquiries within 30 days of receipt.
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
      </div>
    </>
  );
}