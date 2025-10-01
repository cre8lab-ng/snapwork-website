import WebPageTitle from "@/components/webpagetitle";

export default function About() {
  return (
    <>
      <WebPageTitle title="About Us - Snapwork" />
      <div className="min-h-screen bg-gray-50">        
        {/* Main Content */}
        <main className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
                About Snapwork
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re revolutionizing how you connect with skilled professionals for all your home and business needs.
              </p>
            </div>

            {/* About Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-darkblue mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Snapwork, we believe everyone deserves access to reliable, skilled professionals 
                  who can help them maintain and improve their spaces. Our mission is to bridge the 
                  gap between service seekers and service providers through innovative technology 
                  and exceptional customer service.
                </p>
                <p className="text-gray-600">
                  We&apos;re committed to creating a platform that empowers both customers and service 
                  providers, fostering trust, transparency, and quality in every interaction.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-darkblue mb-6">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  To become the leading platform for connecting people with trusted professionals 
                  across Nigeria and beyond. We envision a world where finding reliable service 
                  providers is as easy as a few taps on your phone.
                </p>
                <p className="text-gray-600">
                  Through continuous innovation and dedication to excellence, we&apos;re building 
                  the future of service marketplace, one connection at a time.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-darkblue text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-darkblue mb-3">Trust</h3>
                  <p className="text-gray-600">
                    Building lasting relationships through transparency, reliability, and consistent quality service.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-darkblue mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    Striving for the highest standards in everything we do, from service quality to customer experience.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-darkblue mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    Continuously improving our platform and services to meet evolving customer needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}