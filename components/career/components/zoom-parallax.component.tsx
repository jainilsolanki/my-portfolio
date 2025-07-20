import styles from "./styles.module.scss";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ImageParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/assets/portfolio.png",
      scale: scale4,
    },
    {
      src: "/assets/portfolio/chatto/chatto-logo.png",
      scale: scale6,
    },
    {
      src: "/assets/portfolio/swe/swe-logo.png",
      scale: scale4,
    },
    {
      src: "/assets/portfolio/flux/flux-logo.png",
      scale: scale7,
    },
    {
      src: "/assets/portfolio/quotes-app/quotes-logo.png",
      scale: scale8,
    },

    {
      src: "/assets/portfolio/vid-on/vid-on-logo.png",
      scale: scale9,
    },
  ];

  return (
    <div
      ref={container}
      className={`${styles.container} h-[70vh] lg:h-[300vh]`}
      id="portfolio"
    >
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                {/* <Image src={src} fill alt="image" placeholder="blur" /> */}
                <img src={src} alt="image" className="" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
