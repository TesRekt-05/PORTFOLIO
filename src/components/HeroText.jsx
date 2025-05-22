import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const words = ["Secure", "Modern", "Scalable"];
const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-centre md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transistion={{ delay: 2 }}
        >
          Hi I'm Sahil Singh
        </motion.h1>
        <div className="flex flex-col item-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transistion={{ delay: 2.2 }}
          >
            A Developer
            <br />
            Dedicated to Crafting
          </motion.p>
          <motion.div
          initial="hidden"
          animate="visible"
          transistion={{ delay: 2 }}>
            <FlipWords words={words} className="font-black text-white text-8xl" />
          </motion.div>
          <motion.p className="text-4xl font-medium text-neutral-300">Web Solution</motion.p>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex-col flex md:hidden space-y-6">
        <motion.p className="text-text-4xl font-medium"> Hi I'm Sahil Singh </motion.p>
        <div>
          <motion.p className="text-5xl font-black text-neutral-300">Building</motion.p>
          <motion.div>
            <FlipWords words={words} className="font-bold text-white text-7xl" />
          </motion.div>
          <motion.p className="text-4xl font-black text-neutral-300">Web Application</motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;