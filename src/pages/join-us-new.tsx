import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, Input, Select, Textarea } from "@/components/ui/form";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import WebPageTitle from "@/components/webpagetitle";
import Image from "next/image";
import * as Yup from "yup";
import { FormikHelpers } from "formik";

interface JoinUsFormData {
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  emergencyContact: string;
  serviceCategory: string;
  businessName: string;
  yearsOfExperience: string;
  termsAccepted: boolean;
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  address: Yup.string()
    .min(10, "Please provide a complete address")
    .required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^[\+]?[0-9\s\-\(\)]{10,}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  emergencyContact: Yup.string()
    .min(5, "Please provide name and phone number"),
  serviceCategory: Yup.string()
    .required("Please select a service category"),
  businessName: Yup.string(),
  yearsOfExperience: Yup.number()
    .min(0, "Years of experience cannot be negative")
    .max(50, "Please enter a realistic number of years")
    .required("Years of experience is required"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export default function JoinUsNew() {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values: JoinUsFormData, { setSubmitting, resetForm }: FormikHelpers<JoinUsFormData>) => {
    try {
      // Simulate API call
      console.log("Form submitted:", { ...values, profilePhoto });
      
      // Here you would typically send the data to your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Thank you for your interest! We'll review your application and get back to you soon.");
      resetForm();
      setProfilePhoto(null);
      setPhotoPreview(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const serviceCategories = [
    { value: "", label: "Select your service category" },
    { value: "Electrician", label: "Electrician" },
    { value: "Plumber", label: "Plumber" },
    { value: "Mechanic", label: "Mechanic" },
    { value: "Hairdresser", label: "Hairdresser" },
    { value: "Cleaner", label: "Cleaner" },
    { value: "Painter", label: "Painter" },
    { value: "Carpenter", label: "Carpenter" },
    { value: "Tailor", label: "Tailor" },
    { value: "Gardener", label: "Gardener" },
    { value: "Chef/Cook", label: "Chef/Cook" },
    { value: "Tutor", label: "Tutor" },
    { value: "Photographer", label: "Photographer" },
    { value: "Other", label: "Other" },
  ];

  const initialValues: JoinUsFormData = {
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    emergencyContact: "",
    serviceCategory: "",
    businessName: "",
    yearsOfExperience: "",
    termsAccepted: false,
  };

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
              <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-darkblue mb-6">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      name="fullName"
                      label="Full Name"
                      placeholder="Enter your full name"
                      required
                    />

                    {/* Profile Photo - Custom component since it's not a standard form field */}
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

                  <div className="mt-6">
                    <Textarea
                      name="address"
                      label="Address"
                      placeholder="Enter your complete address"
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-darkblue mb-6">Contact Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      name="phoneNumber"
                      type="tel"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      required
                    />

                    <Input
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <Input
                      name="emergencyContact"
                      label="Emergency Contact"
                      placeholder="Name and phone number of emergency contact"
                      helperText="Optional - for safety purposes"
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-darkblue mb-6">Professional Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Select
                      name="serviceCategory"
                      label="Service Category"
                      options={serviceCategories}
                      required
                    />

                    <Input
                      name="yearsOfExperience"
                      type="number"
                      label="Years of Experience"
                      placeholder="Enter years of experience"
                      min="0"
                      max="50"
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <Input
                      name="businessName"
                      label="Business Name"
                      placeholder="Enter your business name if applicable"
                      helperText="Optional - if you have a registered business"
                    />
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="text-center pt-8">
                  <div className="flex items-center justify-center mb-6">
                    <Input
                      name="termsAccepted"
                      type="checkbox"
                      label="I agree to the terms and conditions"
                      className="w-4 h-4 text-darkblue bg-gray-100 border-gray-300 rounded focus:ring-darkblue focus:ring-2"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-darkblue hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Application
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}