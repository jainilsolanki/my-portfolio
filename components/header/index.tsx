"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./nav";
import { useRouter } from "next/router";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  // const pathname = usePathname();
  const [scrollHeight, setScrollHeight] = useState(0);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollHeight(window.pageYOffset);
    });

    return () => {
      window.removeEventListener("scroll", function () {
        setScrollHeight(window.pageYOffset);
      });
    };
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [router.asPath]);

  return (
    <>
      <div
        className={`${styles.main} transition-all duration-300 ease-in-out`}
        style={{
          opacity: scrollHeight > 800 ? "1" : "0",
        }}
      >
        <div className={styles.header}>
          <a
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </a>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </>
  );
}
