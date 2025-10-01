import WebPageTitle from "@/components/webpagetitle";
import ServicesSection from "@/components/services-section";
import WhyUs from "@/components/why-us";
import Faq from "@/components/faq";
import HeroSection from "@/components/hero-section";
import GetAQuote from "@/components/get-a-quote";
import JoinUs from "@/components/join-us";
import HowToBook from "@/components/how-to-book";

export default function LandingPage() {
  return (
    <>
      <WebPageTitle title="Landing Page | Snapwork" />
      <HeroSection />
      <ServicesSection />
      <WhyUs />
      <HowToBook />
      <GetAQuote />

      {/* <CityMap /> */}
      <JoinUs />
      <Faq />
    </>
  );
}
