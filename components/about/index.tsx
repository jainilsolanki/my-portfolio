import { downloadPdf } from "@/data/utils";
import { AboutLinks } from "./components/profile-links.component";

export default function About() {
  return (
    <>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        id="aboutme"
      >
        <div className="order-last md:order-last lg:order-first xl:order-first 2xl:order-first">
          <AboutLinks />
        </div>
        <div className="px-4 justify-self-center max-w-[500px] order-first md:order-first lg:order-last xl:order-last 2xl:order-last relative flex items-end justify-end">
          <img
            src="/avatar.jpg"
            alt="jainil solanki"
            className="rounded-full w-full border-2 p-2 hover:p-0 duration-300 self-start"
          />

          <div
            className="absolute flex justify-center items-center bottom-[-25px] lg:bottom-[100px] max-w-[20vmin] w-full"
            onClick={downloadPdf}
          >
            <div className="w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlLang="en"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 500 500"
                className="border outline  outline-offset-[-12px] md:outline-offset-[-25px] outline-white outline-1 max-w-[20vmin] rounded-full "
              >
                <defs>
                  <path
                    id="textcircle"
                    d="M250,400
                       a150,150 0 0,1 0,-300 a150,150 0 0,1 0,300Z"
                    transform="rotate(12,250,250) "
                  />
                </defs>
                <path
                  className="stroke-path"
                  stroke="rgb(0 0 0 / .4)"
                  strokeWidth="65"
                  fill="none"
                  d="M250 35 A 1 1 0 1 1 250 465 A 1 1 0 1 1 250 35"
                />
                <g className="textcircle">
                  <text textLength="940" className="text-4xl font-bold">
                    <textPath
                      xlinkHref="#textcircle"
                      aria-label="Download Resume"
                      textLength="940"
                    >
                      Download Resume | Download Resume |&#160;
                    </textPath>
                  </text>
                </g>
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="size-8 absolute"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
