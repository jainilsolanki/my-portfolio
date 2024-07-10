import { motion } from "framer-motion";

const Chip = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex items-center justify-center px-3 py-1 text-neutral-300 rounded-full shadow-md border font-bold hover:bg-neutral-500 hover:text-white duration-300"
    >
      {text}
    </motion.div>
  );
};

export default Chip;
