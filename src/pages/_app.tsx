import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen">
      {/* Global floating background elements */}
      {/* <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-20 -left-20 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "var(--color-darkblue)", opacity: 0.15 }}
        ></div>
        <div 
          className="absolute top-40 -right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: "var(--color-orange-100)", opacity: 0.08 }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ backgroundColor: "var(--color-blue-300)", opacity: 0.12 }}
        ></div>
      </div> */}
      
      {/* App content */}
      <div className="relative z-10">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
