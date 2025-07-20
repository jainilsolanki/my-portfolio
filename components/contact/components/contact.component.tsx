"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from "@/components/loader.component";
import {
  BottomGradient,
  Input,
  Label,
  LabelInputContainer,
} from "./form.components";
import {
  BOOK_CHAPTER,
  CONTACT_NUMBER,
  DAILYDEV,
  EMAIL,
  GITHUB,
  LINKEDIN,
} from "@/data/constants.data";
import { downloadPdf } from "@/data/utils";
import { enqueueSnackbar } from "notistack";

export function ContactComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted", e.target);
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ?? "",
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID ?? ""
      )
      .then(
        (result: any) => {
          // console.log(result);
          e.target.reset();
          enqueueSnackbar("Message Received", { variant: "success" });
          setLoading(false);
        },
        (error: any) => {
          console.error(error);
          enqueueSnackbar(
            "Unable to connect! Please try again or check back soon...",
            { variant: "error" }
          );
          setLoading(false);
        }
      );
  };
  return (
    <div className="max-w-[95rem] w-full mx-auto rounded-none md:rounded-2xl p-4 shadow-input grid grid-cols-1 lg:grid-cols-3">
      <div>
        <h2 className="font-bold text-neutral-200 text-xl md:text-3xl max-w-3xl text-left ">
          Get in touch
        </h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300">
          Need to get in touch with me? Fill in the form and smash the Send it
          or reach out directly via contact details.
        </p>

        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="John"
                  type="text"
                  name="from_first_name"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Foster"
                  type="text"
                  name="from_last_name"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                placeholder="yourawesome@email.com"
                type="email"
                name="from_email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="description">Some details</Label>
              <Input
                id="description"
                placeholder="Let's talk about..."
                type="textarea"
                name="message"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send it &rarr;
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8 h-[2px] w-full lg:rotate-90 lg:mt-[250px]" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-neutral-200 text-xl md:text-3xl max-w-3xl text-left ">
            Contact Details
          </h2>
          <a
            className=" relative group/btn flex space-x-2 items-center justify-start  text-black rounded-md h-10 font-medium shadow-input"
            href={`mailto:${EMAIL}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              {EMAIL}
            </span>
            {/* <BottomGradient /> */}
          </a>
          {/* <a
            className=" relative group/btn flex space-x-2 items-center justify-start  text-black rounded-md h-10 font-medium shadow-input"
            href={`tel:${CONTACT_NUMBER.replace(" ", "")}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              {CONTACT_NUMBER}
            </span>
            <BottomGradient />
          </a> */}
          {/* <button
            className=" relative group/btn flex space-x-2 items-center justify-start  w-full text-black rounded-md h-10 font-medium shadow-input"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              Ahmedabad, India
            </span>
            <BottomGradient />
          </button>  */}

          <button
            className=" relative group/btn flex space-x-2 items-center justify-start  w-full text-black rounded-md h-10 font-medium shadow-input"
            type="submit"
            onClick={downloadPdf}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              Download Resume
            </span>
            {/* <BottomGradient /> */}
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-neutral-200 text-xl md:text-3xl max-w-3xl text-left ">
            Socials
          </h2>
          <a
            className=" relative group/btn flex space-x-2 items-center justify-start  text-black rounded-md h-10 font-medium shadow-input"
            href={LINKEDIN}
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              strokeWidth={1.5}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>

            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              Linkedin
            </span>
            {/* <BottomGradient /> */}
          </a>
          <a
            className=" relative group/btn flex space-x-2 items-center justify-start  text-black rounded-md h-10 font-medium shadow-input"
            href={GITHUB}
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              strokeWidth={1.5}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              GitHub
            </span>
            {/* <BottomGradient /> */}
          </a>
          <a
            className="relative group/btn flex space-x-2 items-center justify-start  text-black rounded-md h-10 font-medium shadow-input"
            href={BOOK_CHAPTER}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              Book Chapter
            </span>
            {/* <BottomGradient /> */}
          </a>

          <a
            className="relative group/btn flex space-x-2 items-center justify-start  text-black rounded-md h-10 font-medium shadow-input"
            href={DAILYDEV}
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" version="1.1">
              <g id="surface1">
                <path style={{ stroke: "none", fillRule: "nonzero", fill: "rgb(100%,100%,100%)", fillOpacity: 1 }} d="M 16.964844 0.0507812 C 17.195312 0.0429688 17.421875 0.0429688 17.660156 0.0429688 C 17.75 0.125 17.839844 0.0859375 17.921875 0.148438 C 18.082031 0.265625 18.222656 0.429688 18.347656 0.652344 C 20.046875 3.675781 21.746094 6.699219 23.445312 9.722656 C 23.5 9.816406 23.550781 9.910156 23.605469 10 C 23.820312 10.359375 23.980469 10.773438 24.019531 11.324219 C 24.023438 11.75 24.023438 12.167969 24.023438 12.605469 C 24.007812 12.65625 24 12.6875 24 12.730469 C 23.976562 13.152344 23.847656 13.480469 23.6875 13.769531 C 22.78125 15.382812 21.875 16.992188 20.96875 18.601562 C 20.121094 20.109375 19.269531 21.609375 18.425781 23.125 C 18.152344 23.621094 17.847656 23.941406 17.445312 23.96875 C 17.078125 23.996094 16.730469 23.910156 16.433594 23.484375 C 16.0625 22.957031 15.859375 22.292969 15.851562 21.425781 C 15.84375 20.632812 16.011719 19.996094 16.316406 19.449219 C 17.65625 17.0625 19 14.679688 20.339844 12.289062 C 20.519531 11.96875 20.519531 11.945312 20.34375 11.628906 C 19.574219 10.253906 18.800781 8.890625 18.03125 7.515625 C 17.902344 7.28125 17.898438 7.28125 17.984375 6.980469 C 18.324219 5.761719 18.667969 4.546875 19.011719 3.328125 C 19.035156 3.238281 19.0625 3.152344 19.097656 3.074219 C 19.105469 3.050781 19.105469 3.101562 19.101562 3.074219 C 19.097656 3.0625 19.09375 3.0625 19.089844 3.074219 C 19.042969 3.214844 18.976562 3.3125 18.914062 3.421875 C 15.871094 8.832031 12.828125 14.242188 9.785156 19.652344 C 9.097656 20.871094 8.417969 22.089844 7.726562 23.300781 C 7.53125 23.644531 7.296875 23.878906 7.019531 23.9375 C 6.59375 24.023438 6.179688 23.972656 5.824219 23.46875 C 5.773438 23.394531 5.726562 23.308594 5.679688 23.226562 C 3.90625 20.074219 2.132812 16.921875 0.359375 13.773438 C 0.175781 13.445312 0.0625 13.0625 0.0273438 12.59375 C 0.0234375 12.179688 0.0234375 11.777344 0.0234375 11.351562 C 0.0664062 11.203125 0.046875 11.046875 0.078125 10.910156 C 0.140625 10.640625 0.222656 10.390625 0.34375 10.179688 C 1.289062 8.492188 2.242188 6.804688 3.1875 5.117188 C 4.007812 3.664062 4.824219 2.214844 5.636719 0.757812 C 5.84375 0.394531 6.066406 0.113281 6.367188 0.0507812 C 6.601562 0.0429688 6.828125 0.0429688 7.066406 0.0429688 C 7.089844 0.0585938 7.097656 0.0742188 7.117188 0.078125 C 7.390625 0.121094 7.601562 0.378906 7.789062 0.714844 C 8.953125 2.789062 10.121094 4.859375 11.285156 6.929688 C 11.464844 7.25 11.464844 7.25 11.285156 7.566406 C 10.710938 8.589844 10.136719 9.605469 9.5625 10.628906 C 9.527344 10.695312 9.492188 10.757812 9.453125 10.816406 C 9.402344 10.902344 9.347656 10.898438 9.296875 10.820312 C 9.257812 10.757812 9.222656 10.695312 9.1875 10.628906 C 8.429688 9.28125 7.671875 7.929688 6.910156 6.582031 C 6.875 6.523438 6.84375 6.460938 6.808594 6.410156 C 6.753906 6.332031 6.703125 6.332031 6.648438 6.40625 C 6.613281 6.453125 6.585938 6.507812 6.554688 6.5625 C 5.601562 8.257812 4.648438 9.949219 3.695312 11.644531 C 3.683594 11.667969 3.667969 11.691406 3.65625 11.71875 C 3.542969 11.921875 3.542969 12 3.65625 12.203125 C 4.027344 12.859375 4.394531 13.519531 4.765625 14.175781 C 5.183594 14.921875 5.605469 15.667969 6.023438 16.414062 C 6.148438 16.640625 6.152344 16.660156 6.074219 16.9375 C 5.734375 18.148438 5.394531 19.359375 5.050781 20.570312 C 5.003906 20.738281 4.945312 20.886719 4.875 21.039062 C 4.871094 21.046875 4.863281 21.0625 4.867188 21.054688 C 4.996094 20.722656 5.15625 20.453125 5.308594 20.179688 C 8.945312 13.71875 12.578125 7.257812 16.214844 0.796875 C 16.269531 0.695312 16.328125 0.589844 16.390625 0.496094 C 16.558594 0.253906 16.742188 0.09375 16.964844 0.0507812 Z M 16.964844 0.0507812 " />
              </g>
            </svg>
            <span className="text-neutral-300 text-sm hover:text-neutral-100">
              Daily Dev
            </span>
            {/* <BottomGradient /> */}
          </a>



        </div>
      </div>

      {loading && <Loader />}
    </div>
  );
}
