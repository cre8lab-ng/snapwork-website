import WebPageTitle from "@/components/webpagetitle";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function Services() {
  return (
    <>
      <WebPageTitle title="Services - Snapwork" />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-8 text-darkblue">
                Our Services
              </h1>
              <div className="prose prose-lg mx-auto">
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Snapwork connects you with skilled professionals for all your home and business needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-darkblue">Cleaning Services</h3>
                    <p className="text-gray-600">Professional cleaning services for homes and offices.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-darkblue">Electrical Work</h3>
                    <p className="text-gray-600">Licensed electricians for all your electrical needs.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-darkblue">Painting</h3>
                    <p className="text-gray-600">Interior and exterior painting by skilled professionals.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-darkblue">Tailoring</h3>
                    <p className="text-gray-600">Custom tailoring and alterations services.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-darkblue">Construction</h3>
                    <p className="text-gray-600">Reliable construction and renovation services.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-darkblue">Window Services</h3>
                    <p className="text-gray-600">Window installation, repair, and cleaning services.</p>
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