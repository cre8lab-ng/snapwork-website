import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import WebPageTitle from '@/components/webpagetitle';
import ServicesSection from '@/components/services-section';
import Footer from '@/components/footer';

export default function HeroSection() {
  return (
    <>
      <WebPageTitle title="Landing Page | Snapwork" />
      <div className='heroBackground'>
        <Navbar />
        <main className="flex flex-col items-center mt-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-100 mb-6 mt-10">
            One platform, all your services
          </h1>
          <Button className="bg-blue-100 text-blue-200 rounded-xl px-6 py-3">
            Get started with us
          </Button>
        </main>
      </div>

      <ServicesSection/>
      <Footer/>
    </>
  );
}
