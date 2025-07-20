import { useRef } from "react";
import { useScroll } from "framer-motion";
import Chip from "./components/chip.component";
import { Slide } from "./components/parallex-slider.component";

const skills = [
  "React",
  "NextJS",
  "Gatsby",
  "MaterialUI",
  "AntD",
  "MantineUI",
  "Redux",
  "Zustand",
  "Micro-Frontend & Services",
  "React Query",
  "NestJS",
  "NodeJS",
  "Typescript",
  "GraphQL",
  "Apollo",
  "Astro",
  "Starlight by Astro",
  "PWA",
  "Electron",
  "Tailwind",
  "React Spring",
];
export default function Skills() {
  const container = useRef<any>();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <div className="mt-10">
        <div className="px-4">
          <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl text-left mb-10">
            What I work with
          </p>
          <div className="flex flex-wrap gap-3 max-w-3xl  text-left mb-10">
            {skills.map((skill, index) => (
              <Chip key={index} text={skill} />
            ))}
          </div>
        </div>
        <main className="overflow-hidden mt-[200px]" id="journey">
          <div ref={container} className="flex flex-col gap-3 ">
            <Slide
              direction={"left"}
              left={"-100%"}
              progress={scrollYProgress}
              words={[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                "https://cdn.dribbble.com/userupload/9602981/file/original-e6f9ef9e2c570d0d612b1775155a4d63.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrOVBV91DOimQDgpzAjaNnjv1NEt8_y7Zng&s",
                "https://w7.pngwing.com/pngs/625/531/png-transparent-material-ui-hd-logo.png",
                "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
                "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
                "https://nestjs.com/logo-small-gradient.d792062c.svg",
              ]}
            />

            <Slide
              direction={"right"}
              left={"-100%"}
              progress={scrollYProgress}
              words={[
                "https://redux.js.org/img/redux.svg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBV9Bv0eu8PK3N7uinvi3B6sjLxDA-CEoBQ&s",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
                "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/nfufptp5bctnlfud0pma",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/800px-Svelte_Logo.svg.png",
              ]}
            />

            <Slide
              direction={"left"}
              left={"-100%"}
              progress={scrollYProgress}
              words={[
                "https://avatars.githubusercontent.com/u/44914786?v=4",
                "https://starlight.astro.build/_astro/hero-star.CRrHICv4_Z1i5bYh.webp",
                "https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png",
                "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
                "https://tanstack.com/assets/logo-color-100w-br5_Ikqp.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}
