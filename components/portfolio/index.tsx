"use client";
import React, { useRef } from "react";
import { StickyScroll } from "./components/sticky-scroll-reveal.component";
import { CardStack } from "./components/card-stack.component";
import { Slide } from "../skills/components/parallex-slider.component";
import { useScroll } from "framer-motion";
import { GITHUB } from "@/data/constants.data";

const chatto = [
  { id: "chatto-1.png", src: "/assets/portfolio/chatto/chatto-1.png" },
  { id: "chatto-2.png", src: "/assets/portfolio/chatto/chatto-2.png" },
  { id: "chatto-3.png", src: "/assets/portfolio/chatto/chatto-3.png" },
  { id: "chatto-4.png", src: "/assets/portfolio/chatto/chatto-4.png" },
  { id: "chatto-5.png", src: "/assets/portfolio/chatto/chatto-5.png" },
  { id: "chatto-6.png", src: "/assets/portfolio/chatto/chatto-6.png" },
  { id: "chatto-7.png", src: "/assets/portfolio/chatto/chatto-7.png" },
  { id: "chatto-8.png", src: "/assets/portfolio/chatto/chatto-8.png" },
  { id: "chatto-9.png", src: "/assets/portfolio/chatto/chatto-9.png" },
  { id: "chatto-10.png", src: "/assets/portfolio/chatto/chatto-10.png" },
  { id: "chatto-11.png", src: "/assets/portfolio/chatto/chatto-11.png" },
];

const quotes = [
  { id: "quotes-1.png", src: "/assets/portfolio/quotes-app/quotes-1.png" },
  { id: "quotes-2.png", src: "/assets/portfolio/quotes-app/quotes-2.png" },
  { id: "quotes-3.png", src: "/assets/portfolio/quotes-app/quotes-3.png" },
  { id: "quotes-4.png", src: "/assets/portfolio/quotes-app/quotes-4.png" },
  { id: "quotes-5.png", src: "/assets/portfolio/quotes-app/quotes-5.png" },
  { id: "quotes-6.png", src: "/assets/portfolio/quotes-app/quotes-6.png" },
  { id: "quotes-7.png", src: "/assets/portfolio/quotes-app/quotes-7.png" },
];

const flux = [
  { id: "flux-1.png", src: "/assets/portfolio/flux/flux-1.png" },
  { id: "flux-2.png", src: "/assets/portfolio/flux/flux-2.png" },
  { id: "flux-3.png", src: "/assets/portfolio/flux/flux-3.png" },
  { id: "flux-4.png", src: "/assets/portfolio/flux/flux-4.png" },
  { id: "flux-5.png", src: "/assets/portfolio/flux/flux-5.png" },
  { id: "flux-6.png", src: "/assets/portfolio/flux/flux-6.png" },
];

const bcm = [
  {
    id: "b-c-m-1.png",
    src: "/assets/portfolio/business-card-maker/b-c-m-1.png",
  },
  {
    id: "b-c-m-2.png",
    src: "/assets/portfolio/business-card-maker/b-c-m-2.png",
  },
  {
    id: "b-c-m-3.png",
    src: "/assets/portfolio/business-card-maker/b-c-m-3.png",
  },
  {
    id: "b-c-m-4.png",
    src: "/assets/portfolio/business-card-maker/b-c-m-4.png",
  },
  {
    id: "b-c-m-5.png",
    src: "/assets/portfolio/business-card-maker/b-c-m-5.png",
  },
];

const photo_effects = [
  {
    id: "p-e-1.png",
    src: "/assets/portfolio/photo-effects/p-e-1.png",
  },
  {
    id: "p-e-2.png",
    src: "/assets/portfolio/photo-effects/p-e-2.png",
  },
  {
    id: "p-e-3.png",
    src: "/assets/portfolio/photo-effects/p-e-3.png",
  },
  {
    id: "p-e-4.png",
    src: "/assets/portfolio/photo-effects/p-e-4.png",
  },
  {
    id: "p-e-5.png",
    src: "/assets/portfolio/photo-effects/p-e-5.png",
  },
];

const vid_on = [
  {
    id: "vid-on-1.png",
    src: "/assets/portfolio/vid-on/vid-on-1.png",
  },
  {
    id: "vid-on-2.png",
    src: "/assets/portfolio/vid-on/vid-on-2.png",
  },
  {
    id: "vid-on-3.png",
    src: "/assets/portfolio/vid-on/vid-on-3.png",
  },
  {
    id: "vid-on-4.png",
    src: "/assets/portfolio/vid-on/vid-on-4.png",
  },
  {
    id: "vid-on-5.png",
    src: "/assets/portfolio/vid-on/vid-on-5.png",
  },
];

const content = [
  {
    title: "Chatto",
    description:
      "A sleek Next.js-based chatting platform with a modern UI. It’s designed to be mobile-friendly and includes progressive web app (PWA) functionality, allowing users to install and use it seamlessly across devices. Whether you’re chatting on your phone, tablet, or desktop, Chatto provides an intuitive and enjoyable experience. ",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <CardStack items={chatto} />
      </div>
    ),
    banner: "/assets/portfolio/chatto/chatto-3.png",
    liveUrl: "https://chatto-fe.vercel.app",
    githubUrl: `${GITHUB}/chatto-fe`,
  },

  {
    title: "Minimal Quotes App",
    description:
      "An elegant application that allows users to explore and read an extensive collection of quotes. With a sleek dark mode, it ensures a pleasant reading experience even in low-light conditions. Featuring categories like love, happiness, famous quotes and many more, you will get quotes that are tailored to your interests. Plus, it’s a progressive web app (PWA), enabling seamless experience across devices. ",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <CardStack items={quotes} />
      </div>
    ),
    banner: "/assets/portfolio/quotes-app/quotes-1.png",
    liveUrl: "https://minimal-quotes-app.vercel.app",
    githubUrl: `${GITHUB}/minimal-quotes-app`,
  },
  {
    title: "Flux",
    description:
      "A design showcase project built on Ant Design. With its modern UI, Flux highlights the elegance and functionality of Ant Design components.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <CardStack items={flux} />
      </div>
    ),
    banner: "/assets/portfolio/flux/flux-2.png",
    liveUrl: "https://flux-eight.vercel.app",
    githubUrl: `${GITHUB}/Flux`,
  },
  {
    title: "Business Card Maker",
    description:
      "An intuitive tool that allows users to design modern-looking business cards effortlessly. With a range of default design components, you can create a personalized card that reflects your brand. Once you’re satisfied, simply download your professionally crafted business card.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <CardStack items={bcm} />
      </div>
    ),
    banner: "/assets/portfolio/business-card-maker/b-c-m-1.png",
    liveUrl: "https://business-card-maker-zeta.vercel.app",
    githubUrl: `${GITHUB}/business-card-maker`,
  },
  {
    title: "Photo Effects",
    description:
      "An interactive platform where users can upload their own images and experiment with various effects such as blur, hue adjustments, and more. See how these effects transform your photos in real time! Plus, you can download the modified images with your chosen effects applied.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <CardStack items={photo_effects} />
      </div>
    ),
    banner: "/assets/portfolio/photo-effects/p-e-1.png",
    liveUrl: "https://photo-effects.vercel.app",
    githubUrl: `${GITHUB}/photo-effects`,
  },
  {
    title: "Vidon",
    description:
      "A video conferencing app powered by the Jitsi library. With Vidon, you can seamlessly host secure and high-quality video meetings. Schedule meetings in advance or rejoin ongoing ones effortlessly. Whether it’s team collaboration, virtual events, or personal catch-ups, Vidon ensures smooth communication.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <CardStack items={vid_on} />
      </div>
    ),
    banner: "/assets/portfolio/vid-on/vid-on-1.png",
    liveUrl: "",
    githubUrl: "",
  },
];

export default function Portfolio() {
  const container = useRef<any>();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <div className=" mt-[200px]">
      <p className="block xl:hidden text-neutral-400 text-xl md:text-3xl max-w-3xl text-left mb-10 px-4 sticky top-0 z-10000">
        Recent Works
      </p>
      <StickyScroll content={content} />
      <div ref={container} className="overflow-hidden mt-[200px]">
        <Slide
          direction={"left"}
          left={"-25%"}
          progress={scrollYProgress}
          words={[
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
          ]}
          type={"text"}
        />
        <Slide
          direction={"right"}
          left={"-35%"}
          progress={scrollYProgress}
          words={[
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
          ]}
          type={"text"}
        />
        <Slide
          direction={"left"}
          left={"-45%"}
          progress={scrollYProgress}
          words={[
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
            "Reach out!",
          ]}
          type={"text"}
        />
      </div>
    </div>
  );
}
