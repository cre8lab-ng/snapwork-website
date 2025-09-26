import WebPageTitle from "@/components/webpagetitle";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";
import WhyUs from "@/components/why-us";
import Faq from "@/components/faq";
import HeroSection from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import GetAQuote from "@/components/get-a-quote";
import JoinUs from "@/components/join-us";

export default function LandingPage() {
  return (
    <>
      <WebPageTitle title="Landing Page | Snapwork" />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUs />
      <GetAQuote/>
      {/* <CityMap /> */}
      <JoinUs />
      <Faq />
      <Footer />
    </>
  );
}
