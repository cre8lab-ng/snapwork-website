import WebPageTitle from "@/components/webpagetitle";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsOfUse() {
  return (
    <>
      <WebPageTitle title="Terms of Use - Snapwork" />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-8 text-darkblue">
                Terms of Use
              </h1>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="prose prose-lg mx-auto">
                  <p className="text-gray-600 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">1. Acceptance of Terms</h2>
                  <p className="mb-6">
                    By accessing and using Snapwork&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">2. Service Description</h2>
                  <p className="mb-6">
                    Snapwork is a platform that connects customers with skilled service providers for various home and business services.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">3. User Responsibilities</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Provide accurate information when booking services</li>
                    <li>Treat service providers with respect</li>
                    <li>Pay for services as agreed</li>
                    <li>Follow safety guidelines during service delivery</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">4. Service Provider Responsibilities</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Provide services as described</li>
                    <li>Maintain professional standards</li>
                    <li>Respect customer property and privacy</li>
                    <li>Complete work within agreed timeframes</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">5. Limitation of Liability</h2>
                  <p className="mb-6">
                    Snapwork acts as a platform connecting customers and service providers. We are not liable for the quality of services provided or any damages that may occur during service delivery.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-darkblue">6. Contact Information</h2>
                  <p>
                    For questions about these Terms of Use, please contact us at snap@work.ng
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