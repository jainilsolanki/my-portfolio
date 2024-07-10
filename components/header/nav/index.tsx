import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import { useRouter } from "next/router";

const navItems = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About Me",
    href: "aboutme",
  },
  {
    title: "Journey",
    href: "journey",
  },
  {
    title: "Portfolio",
    href: "portfolio",
  },
  {
    title: "Contact Me",
    href: "contactme",
  },
];

export default function Navbar() {
  const router = useRouter();
  const [selectedIndicator, setSelectedIndicator] = useState(
    router.asPath.replace("/#", "")
  );

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      // for small menu in desktop
      // className={`${styles.menu} w-screen md:w-auto`}
      className={`${styles.menu} w-screen`}
    >
      <div className={`${styles.body} p-[50px] md:p-[100px]`}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(router.asPath.replace("/#", ""));
          }}
          className={`${styles.nav} text-3xl md:text-6xl `}
        >
          <div className={styles.header}>
            <p>Navigate to</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
