"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";
import { Spotlight } from "./ui/Spotlight";

const NameWithWave = () => {
  return (
    <motion.span className="relative inline-block group">
      <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text font-semibold">
        Vansh
      </span>
      <motion.span
        className="absolute -right-7 -top-4 text-lg opacity-0 scale-0 origin-bottom-left select-none"
        variants={{
          hidden: { opacity: 0, scale: 0, y: 10 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          },
        }}
        initial="hidden"
        whileHover="visible"
        animate="hidden"
      >
        👋
      </motion.span>
    </motion.span>
  );
};

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.2em] text-xs text-center text-zinc-400 max-w-[85vw] md:max-w-[80vw] font-light"
          >
            Innovative Web Experiences with Next.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full text-center relative"
          >
            <div className="text-center text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl font-bold max-w-[85vw] mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500/80 inline-block"
              >
                Transforming{" "}
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text relative inline-block group">
                  Concepts
                  <motion.span
                    className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 100,
                    }}
                  />
                </span>{" "}
                into{" "}
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative inline-block"
              >
                <motion.span
                  className="absolute -inset-2 rounded-lg bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 blur-xl opacity-70"
                  animate={{
                    opacity: [0.5, 0.7, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <span className="relative bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text inline-block">
                  Seamless
                </span>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500/80 inline-block"
              >
                {" "}
                User{" "}
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text relative inline-block group">
                  Experiences
                  <motion.span
                    className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 100,
                    }}
                  />
                </span>
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-zinc-300 mt-6 max-w-[85vw] md:max-w-[70vw]"
          >
            Hi! I&apos;m <NameWithWave />, a Full Stack Web Developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center"
          >
            <a href="#about" className="w-full sm:w-auto">
              <Button
                borderRadius="1.75rem"
                className="group relative w-full sm:min-w-[200px] p-4 text-base"
                containerClassName="dark:bg-slate-900"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Show my work
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: 5 }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaLocationArrow className="text-sm" />
                  </motion.span>
                </span>
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                borderRadius="1.75rem"
                className="group relative w-full sm:min-w-[200px] p-4 text-base"
                containerClassName="dark:bg-slate-900"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let&apos;s Connect
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                </span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
