import WebPageTitle from "@/components/webpagetitle";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <WebPageTitle title="Privacy Policy - Snapwork" />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-8 text-darkblue">
                Privacy Policy
              </h1>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="prose prose-lg mx-auto">
                  <p className="text-gray-600 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">1. Information We Collect</h2>
                  <p className="mb-6">
                    We collect information you provide directly to us, such as when you create an account, book a service, or contact us for support.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">2. How We Use Your Information</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>To provide and maintain our services</li>
                    <li>To process transactions and send related information</li>
                    <li>To communicate with you about services and updates</li>
                    <li>To improve our platform and user experience</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">3. Information Sharing</h2>
                  <p className="mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">4. Data Security</h2>
                  <p className="mb-6">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">5. Your Rights</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">6. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at snap@work.ng
                  </p>
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