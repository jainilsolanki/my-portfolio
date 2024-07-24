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
import { SnackbarProvider, useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
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

  function SnackbarCloseButton({ snackbarKey }: any) {
    const { closeSnackbar } = useSnackbar();

    return (
      <IconButton onClick={() => closeSnackbar(snackbarKey)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </IconButton>
    );
  }

  return (
    <main className={`${courierPrime.className} max-w-[1920px] mx-auto`}>
      <SnackbarProvider
        action={(snackbarKey) => (
          <SnackbarCloseButton snackbarKey={snackbarKey} />
        )}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
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
      </SnackbarProvider>
    </main>
  );
}
