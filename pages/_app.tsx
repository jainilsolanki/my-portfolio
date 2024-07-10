import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jainil Solanki</title>
      </Head>{" "}
      <div className="hidden lg:block">
        <AnimatedCursor
          innerSize={0}
          outerSize={30}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          outerStyle={{
            border: "3px solid white",
            zIndex: 10000000000000,
          }}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}
