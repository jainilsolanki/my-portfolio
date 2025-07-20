import { TextGenerateEffect } from "./components/text-generate-effect.component";
import { TracingBeam } from "./components/tracing-beam.component";
import ImageParallax from "./components/zoom-parallax.component";

export default function Career() {
  return (
    <>
      <div className="mt-[200px] grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 relative gap-5">
        <div className="justify-self-center mb-10 lg:mb-0">
          <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl text-left px-4  lg:top-[200px] lg:sticky">
            Academic Path & Professional Story
          </p>
        </div>
        <TracingBeam className="px-10 md:px-10 lg:px-6 xl:px-6 2xl:px-6">
          <div className="flex flex-col gap-[150px]">
            <div>
              <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl text-left mb-10">
                Academic Path
              </p>
              <div className="flex flex-col gap-10 ">
                <div>
                  <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl text-left font-bold">
                    Diploma in Computer Engineering
                  </p>
                  <TextGenerateEffect words="Government Polytechnic" />
                  <TextGenerateEffect words="9.3 CGPA" />
                  <TextGenerateEffect words="2018 - 2021" />
                </div>
                <div>
                  <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl text-left font-bold">
                    B.Tech Computer Science & Engineering
                  </p>
                  <TextGenerateEffect words="Nirma University" />
                  <TextGenerateEffect words="8.2 CGPA" />
                  <TextGenerateEffect words="2021 - 2023" />
                </div>
              </div>
            </div>

            <div>
              <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl text-left mb-10">
                Professional Story
              </p>
              <div className="flex flex-col gap-10 ">
                <div>
                  <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl text-left font-bold">
                    Junior Front-End Engineer
                  </p>
                  <TextGenerateEffect words="WebOccult Technologies" />
                  <TextGenerateEffect words="Jan 2023 - Feb 2025" />
                </div>

                <div>
                  <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl text-left font-bold">
                    Front-End Engineer
                  </p>
                  <TextGenerateEffect words="Script Assist UK" />
                  <TextGenerateEffect words="Feb 2025 - Present" />
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>
      {/* <div ref={container} className="overflow-hidden mt-[200px]">
        <Slide
          direction={"left"}
          left={"-25%"}
          progress={scrollYProgress}
          words={[
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
          ]}
          type={"text"}
        />
        <Slide
          direction={"right"}
          left={"-35%"}
          progress={scrollYProgress}
          words={[
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
          ]}
          type={"text"}
        />
        <Slide
          direction={"left"}
          left={"-45%"}
          progress={scrollYProgress}
          words={[
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
            "Portfolio",
          ]}
          type={"text"}
        />
      </div> */}
      <div className="mt-[200px] lg:mt-[400px]">
        <ImageParallax />
      </div>
    </>
  );
}
