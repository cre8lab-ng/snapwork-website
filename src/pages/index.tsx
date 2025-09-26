import WebPageTitle from "@/components/webpagetitle";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";
import WhyUs from "@/components/why-us";
import CityMap from "@/components/city-map";
import ServiceProvider from "@/components/service-provider";
import Faq from "@/components/faq";
import HeroSection from "@/components/hero-section";
import Quote from "@/components/quote";
import { Navbar } from "@/components/navbar";

export default function LandingPage() {
  return (
    <>
      <WebPageTitle title="Landing Page | Snapwork" />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUs />
      <Quote/>
      <CityMap />
      <ServiceProvider />
      <Faq />
      <Footer />
    </>
  );
}
