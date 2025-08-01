"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { BOOK_CHAPTER, EMAIL, GITHUB, LINKEDIN } from "@/data/constants.data";
export function AboutLinks() {
  return (
    <div className="flex justify-center items-start h-[30rem] md:h-[30rem] lg:h-[40rem] xl:h-[40rem] 2xl:h-[40rem] flex-col px-4 ">
      <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left mb-10">
        Passionate{" "}
        <LinkPreview
          url="https://rxresu.me/jainilsolanki0704/jainil-solanki-resume"
          imageSrc="/resume-preview-icon.png"
          className="font-bold"
          isStatic
        >
          Full-Stack Engineer
        </LinkPreview>{" "}
        crafting delightful user experiences through clean code, with expertise
        in responsive web design and modern JavaScript frameworks.
      </p>

      <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left ">
        Check out my socials{" "}
        <LinkPreview url={LINKEDIN} className="font-bold">
          Linkedin
        </LinkPreview>{" "}
        <LinkPreview url={GITHUB} className="font-bold">
          GitHub
        </LinkPreview>{" "}
        <LinkPreview
          url={`mailto:${EMAIL}`}
          imageSrc="/email-icon.jpg"
          isStatic
          className="font-bold"
        >
          Email
        </LinkPreview>{" "}
        <LinkPreview url={BOOK_CHAPTER} className="font-bold">
          Book Chapter
        </LinkPreview>{" "}
      </p>
    </div>
  );
}

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
    | { isStatic: true; imageSrc: string }
    | { isStatic?: false; imageSrc?: never }
  );

const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
            alt="hidden image"
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open: any) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-white", className)}
          href={url}
          target="_blank"
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <Link
                  href={url}
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                  target="_blank"
                >
                  <Image
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className="rounded-lg"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
