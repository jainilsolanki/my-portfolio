import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
export const Slide = (props: any) => {
  const direction = props.direction == "left" ? -1 : 1;

  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className={`relative flex whitespace-nowrap `}
    >
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
      <Phrase words={props.words} type={props.type} />
    </motion.div>
  );
};

const Phrase = ({ words, type }: { words: string[]; type?: string }) => {
  return type === "text" ? (
    <div className={`lg:pl-[23rem] flex gap-5 items-center`}>
      {words.map((word, index) => (
        <p
          className="text-6xl text-neutral-300 font-bold uppercase italic"
          key={index}
        >
          {word}
        </p>
      ))}
    </div>
  ) : (
    <div className={`pl-[23rem] flex gap-5 items-center`}>
      {words.map((word, index) => (
        <img
          key={index}
          src={word}
          className="w-[50px] h-[50px] object-contain rounded-full shadow-md"
        />
      ))}
    </div>
  );
};
