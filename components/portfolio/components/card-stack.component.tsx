"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogTitle, Tooltip } from "@mui/material";
import { ImagesSlider } from "./image-slider.component";

let interval: any;

type Card = {
  id: string;
  src: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [autoplayOn, isAutoplayOn] = useState(true);
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [showAvatarDialog, setShowAvatarDialog] = useState<{
    show: boolean;
    src: string | null;
  }>({
    show: false,
    src: null,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === items.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <>
      {showAvatarDialog.show && (
        <Dialog
          open={showAvatarDialog.show}
          onClose={() => setShowAvatarDialog({ show: false, src: null })}
          className="rounded-2xl"
          sx={{
            "& .MuiDialog-paper": {
              borderRadius: "1rem",
              background: "transparent",
              boxShadow: "none",
              maxWidth: "100%",
            },
          }}
        >
          <DialogTitle
            sx={{
              px: 0,
              py: 1,
              alignItems: "flex-end ",
              justifyContent: "flex-end",
              display: "flex",
              gap: 2,
            }}
          >
            <Tooltip title="Previous" placement="top">
              <a onClick={() => handleNext()}>
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <a onClick={() => handlePrevious()}>
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </Tooltip>
            {autoplayOn ? (
              <Tooltip title="Pause Autoplay" placement="top">
                <a onClick={() => isAutoplayOn(false)}>
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
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                </a>
              </Tooltip>
            ) : (
              <Tooltip title="Resume Autoplay" placement="top">
                <a onClick={() => isAutoplayOn(true)}>
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
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                </a>
              </Tooltip>
            )}
            <Tooltip title="Close Preview" placement="top">
              <a
                onClick={() => setShowAvatarDialog({ show: false, src: null })}
              >
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
              </a>
            </Tooltip>
          </DialogTitle>
          <ImagesSlider
            autoplay={autoplayOn}
            images={items}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          >
            <div className="h-[50vh] w-[50vw]"></div>
          </ImagesSlider>
        </Dialog>
      )}
      <div className="relative  h-60 w-60 md:h-60 md:w-96">
        {cards.map((card, index) => {
          return (
            <motion.a
              key={card.id}
              className="absolute bg-black h-60 w-60 md:h-60 md:w-96 rounded-2xl p-1 shadow-xl border border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
              onClick={() => setShowAvatarDialog({ show: true, src: card.src })}
            >
              <img
                src={card.src}
                width={300}
                height={300}
                className="h-full w-full object-cover rounded-2xl"
                alt={card.id}
              />
            </motion.a>
          );
        })}
      </div>
    </>
  );
};
