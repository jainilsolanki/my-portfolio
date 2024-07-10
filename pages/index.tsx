import { Courier_Prime } from "next/font/google";
import { Lamp } from "@/components/hero-title";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";
import { useEffect, useState } from "react";
import About from "@/components/about";
import Skills from "@/components/skills";
import Career from "@/components/career";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Lenis from "lenis";
import Header from "@/components/header";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    loadingTimeout;

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <main className={`${courierPrime.className} max-w-[1920px] mx-auto`}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      {!isLoading && (
        <>
          <Lamp />
          <About />
          <Skills />
          <Career />
          <Portfolio />
          <Contact />
        </>
      )}
    </main>
  );
}
