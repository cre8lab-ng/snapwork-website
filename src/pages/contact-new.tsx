import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import WebPageTitle from "@/components/webpagetitle";
import { Button } from "@/components/ui/button";
import { Form, Input, Textarea } from "@/components/ui/form";
import Icon from "@/components/icon";
import * as Yup from "yup";
import { FormikHelpers } from "formik";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  phone: Yup.string()
    .matches(/^[\+]?[0-9\s\-\(\)]{10,}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  subject: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function ContactNew() {
  const handleSubmit = async (values: ContactFormData, { setSubmitting, resetForm }: FormikHelpers<ContactFormData>) => {
    try {
      // Simulate API call
      console.log("Contact form submitted:", values);
      
      // Here you would typically send the data to your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Thank you for your message! We'll get back to you soon.");
      resetForm();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues: ContactFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  return (
    <>
      <WebPageTitle title="Contact Us | Snapwork" />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
                  Get in Touch
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Have questions about our services? Need help with booking? 
                  We&apos;re here to help you connect with the right professionals.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Contact Information</h2>
                    <p className="text-gray-600 mb-8">
                      Reach out to us through any of these channels. We&apos;re always ready to assist you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon name="phone" className="w-6 h-6 text-darkblue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-darkblue mb-1">Phone</h3>
                        <p className="text-gray-600">+234 (0) 123 456 7890</p>
                        <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon name="mail" className="w-6 h-6 text-darkblue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-darkblue mb-1">Email</h3>
                        <p className="text-gray-600">hello@snapwork.ng</p>
                        <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon name="location" className="w-6 h-6 text-darkblue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-darkblue mb-1">Office</h3>
                        <p className="text-gray-600">123 Business District<br />Lagos, Nigeria</p>
                        <p className="text-sm text-gray-500">Visit us during business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-darkblue mb-6">Send us a Message</h2>
                  
                  <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="firstName"
                        label="First Name"
                        placeholder="Your first name"
                        required
                      />
                      
                      <Input
                        name="lastName"
                        label="Last Name"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                    
                    <Input
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="your.email@example.com"
                      required
                    />
                    
                    <Input
                      name="phone"
                      type="tel"
                      label="Phone Number"
                      placeholder="+234 xxx xxx xxxx"
                      required
                    />
                    
                    <Input
                      name="subject"
                      label="Subject"
                      placeholder="What is this about?"
                      required
                    />
                    
                    <Textarea
                      name="message"
                      label="Message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                    
                    <Button type="submit" className="w-full py-3">
                      Send Message
                    </Button>
                  </Form>
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