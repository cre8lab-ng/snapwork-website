import { Button } from "@/components/ui/button";
import { Form, Input, Select, Textarea } from "@/components/ui/form";
import WebPageTitle from "@/components/webpagetitle";
import * as Yup from "yup";
import { FormikHelpers } from "formik";

interface QuoteFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  serviceType: string;
  location: string;
  urgency: string;
  budget: string;
  description: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  phoneNumber: Yup.string()
    .matches(/^[\+]?[0-9\s\-\(\)]{10,}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  serviceType: Yup.string()
    .required("Please select a service type"),
  location: Yup.string()
    .min(5, "Please provide a more specific location")
    .required("Location is required"),
  urgency: Yup.string()
    .required("Please select urgency level"),
  budget: Yup.string()
    .required("Please select your budget range"),
  description: Yup.string()
    .min(10, "Please provide more details about your requirements")
    .required("Project description is required"),
});

export default function GetAQuote() {
  const handleSubmit = async (values: QuoteFormData, { setSubmitting, resetForm }: FormikHelpers<QuoteFormData>) => {
    try {
      // Simulate API call
      console.log("Quote form submitted:", values);
      
      // Here you would typically send the data to your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Thank you for your request! We'll get back to you with a quote soon.");
      resetForm();
    } catch (error) {
      console.error("Error submitting quote form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const serviceTypes = [
    { value: "", label: "Select a service" },
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

  const urgencyOptions = [
    { value: "", label: "Select urgency" },
    { value: "ASAP", label: "ASAP (Within 24 hours)" },
    { value: "This Week", label: "This Week" },
    { value: "Next Week", label: "Next Week" },
    { value: "This Month", label: "This Month" },
    { value: "Flexible", label: "Flexible Timeline" },
  ];

  const budgetOptions = [
    { value: "", label: "Select budget range" },
    { value: "Under ₦10,000", label: "Under ₦10,000" },
    { value: "₦10,000 - ₦25,000", label: "₦10,000 - ₦25,000" },
    { value: "₦25,000 - ₦50,000", label: "₦25,000 - ₦50,000" },
    { value: "₦50,000 - ₦100,000", label: "₦50,000 - ₦100,000" },
    { value: "Over ₦100,000", label: "Over ₦100,000" },
    { value: "Discuss with professional", label: "Discuss with professional" },
  ];

  const initialValues: QuoteFormData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    serviceType: "",
    location: "",
    urgency: "",
    budget: "",
    description: "",
  };

  return (
    <>
      <WebPageTitle title="Get a Quote - Snapwork" />
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
                Get Your Free Quote
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us about your project and we&apos;ll connect you with the right professionals. 
                Get competitive quotes from verified service providers in your area.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    name="fullName"
                    label="Full Name"
                    placeholder="Enter your full name"
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

                <Input
                  name="phoneNumber"
                  type="tel"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  required
                />

                {/* Service Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    name="serviceType"
                    label="Service Type"
                    options={serviceTypes}
                    required
                  />

                  <Input
                    name="location"
                    label="Location"
                    placeholder="Enter your location/address"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    name="urgency"
                    label="When do you need this service?"
                    options={urgencyOptions}
                    required
                  />

                  <Select
                    name="budget"
                    label="Budget Range"
                    options={budgetOptions}
                    required
                  />
                </div>

                <Textarea
                  name="description"
                  label="Project Description"
                  placeholder="Please describe your project in detail. Include any specific requirements, materials needed, or other important information..."
                  rows={5}
                  required
                />

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-darkblue hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get My Free Quote
                  </Button>
                </div>
              </Form>
            </div>

            {/* Additional Information */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-darkblue mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">Get quotes within 24 hours from verified professionals</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-darkblue mb-2">Verified Professionals</h3>
                <p className="text-gray-600 text-sm">All service providers are background-checked and verified</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-darkblue mb-2">Competitive Pricing</h3>
                <p className="text-gray-600 text-sm">Compare quotes and choose the best value for your project</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}