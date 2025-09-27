import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import WebPageTitle from "@/components/webpagetitle";
import Image from "next/image";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    profilePhoto: null as File | null,
    address: "",
    phoneNumber: "",
    email: "",
    emergencyContact: "",
    serviceCategory: "",
    businessName: "",
    yearsOfExperience: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePhoto: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We&apos;ll review your application and get back to you soon.");
  };

  const serviceCategories = [
    "Electrician",
    "Plumber", 
    "Mechanic",
    "Hairdresser",
    "Cleaner",
    "Painter",
    "Carpenter",
    "Tailor",
    "Gardener",
    "Chef/Cook",
    "Tutor",
    "Photographer",
    "Other"
  ];

  return (
    <>
      <WebPageTitle title="Join Us | Snapwork" />
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
                Join Our Network of Professionals
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Become part of Snapwork&apos;s trusted community of service providers. 
                Connect with customers who need your expertise and grow your business with us.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-darkblue mb-6">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Profile Photo */}
                     <div className="md:col-span-2">
                       <label className="block text-sm font-medium text-gray-700 mb-4">
                         Profile Photo *
                       </label>
                       
                       {!photoPreview ? (
                         /* Upload Area - Show when no photo is selected */
                         <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-200 bg-gray-50 hover:bg-blue-50">
                           <input
                             type="file"
                             id="profilePhoto"
                             name="profilePhoto"
                             accept="image/*"
                             required
                             onChange={handlePhotoChange}
                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                           />
                           <div className="space-y-3">
                              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                              </div>
                            </div>
                         </div>
                       ) : (
                         /* Photo Preview - Show when photo is selected */
                         <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                             <div className="flex-shrink-0">
                               <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                 <Image
                                   src={photoPreview}
                                   alt="Profile preview"
                                   width={128}
                                   height={128}
                                   className="w-full h-full object-cover"
                                 />
                               </div>
                             </div>
                             <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <p className="text-sm font-medium text-green-600">Photo uploaded successfully!</p>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">Your profile photo looks great. You can change it if needed.</p>
                                <div className="relative">
                                  <input
                                    type="file"
                                    id="profilePhotoChange"
                                    name="profilePhoto"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  />
                                  <button
                                    type="button"
                                    className="bg-darkblue hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <span>Change Photo</span>
                                  </button>
                                </div>
                              </div>
                           </div>
                         </div>
                       )}
                       
                       <p className="text-xs text-gray-500 mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                         <span className="font-medium text-yellow-800">📸 Photo Requirements:</span>
                         <br />• Professional, clear face shot required
                         <br />• Good lighting and high resolution
                         <br />• Face should be clearly visible
                       </p>
                     </div>
                  </div>

                  {/* Address */}
                  <div className="mt-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your complete address"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-darkblue mb-6">Contact Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="mt-6">
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact (Optional)
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Name and phone number of emergency contact"
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-darkblue mb-6">Professional Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Service Category */}
                    <div>
                      <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Category *
                      </label>
                      <select
                        id="serviceCategory"
                        name="serviceCategory"
                        required
                        value={formData.serviceCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your service category</option>
                        {serviceCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Years of Experience */}
                    <div>
                      <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <input
                        type="number"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        required
                        min="0"
                        max="50"
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter years of experience"
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="mt-6">
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your business name if applicable"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  {/* Terms and Conditions Checkbox */}
                  <div className="flex items-center justify-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="w-4 h-4 text-darkblue bg-gray-100 border-gray-300 rounded focus:ring-darkblue focus:ring-2"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-darkblue hover:underline">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={!termsAccepted}
                    className="w-full bg-darkblue hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>

         
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}