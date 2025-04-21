import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2 bg-blue-200 p-2 rounded-xl">
        <Image src="/snapwork-logo.svg" alt="Snapwork Logo" width={150} height={150} />
       
      </div>
      <nav className="space-x-6 hidden md:flex bg-blue-200 p-4 rounded-xl">
        <Link href="#why-us" className="text-blue-100 font-bold ">Why Us</Link>
        <Link href="#services" className="text-blue-100 font-bold ">Services</Link>
        <Link href="#pricing" className="text-blue-100 font-bold ">Pricing</Link>
        <Link href="#contact" className="text-blue-100 font-bold ">Contact Us</Link>
      </nav>
      <Button className="bg-blue-100  text-blue-200 rounded-xl p-3">
        Book Now
      </Button>
    </header>
  );
}
