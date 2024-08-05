"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    banner?: string;
    liveUrl?: string;
    githubUrl?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#21978b",
    // "#039be5",
    "#242424",
    "#0052a0",
    "#0288d1",
    "#7c1fff",
    "#242424",
  ];

  // const linearGradients = [
  //   "#21978b",
  //   "#242424",
  //   "#0052a0",
  //   "#0288d1",
  //   "#7c1fff",
  //   "#242424",
  // ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0]
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="flex justify-around relative rounded-md p-10"
      ref={ref}
    >
      <p className="hidden xl:block text-neutral-200 text-xl md:text-3xl max-w-3xl text-left mb-10 px-4 sticky top-[100px] z-10000 h-full mt-[80px]">
        Recent Works
      </p>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              {/* <div
                key={activeCard}
                // style={{ background: backgroundGradient }}
                className={cn(
                  "block lg:hidden h-80 w-100 rounded-md overflow-hidden",
                  contentClassName
                )}
              >
                {content[activeCard].content ?? null}
              </div> */}
              <motion.div
                key={item.title + index}
                className="block lg:hidden bg-black rounded-2xl p-1 min-h-[25vh] shadow-xl border border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between"
                style={{
                  transformOrigin: "top center",
                }}
                // animate={{
                //   top: index * -CARD_OFFSET,
                //   scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                //   zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                // }}
              >
                <img
                  src={item.banner}
                  className="h-full w-full object-cover rounded-2xl min-h-[25vh]"
                  alt={item.title}
                />
              </motion.div>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 mt-10 lg:mt-0"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              <div className="flex gap-5">
                {item.liveUrl ? (
                  <motion.a
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-kg text-slate-300 max-w-sm mt-10 flex items-center gap-2 hover:font-semibold"
                    href={item.liveUrl}
                    target="_blank"
                  >
                    Live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </motion.a>
                ) : (
                  <></>
                )}
                {item.githubUrl ? (
                  <motion.a
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-kg text-slate-300 max-w-sm mt-10 flex items-center gap-2 hover:font-semibold"
                    href={item.githubUrl}
                    target="_blank"
                  >
                    Github
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </motion.a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        key={activeCard}
        // style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-80 w-100 rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
