"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

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
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.2em] text-xs text-center text-blue-100 max-w-80 font-light"
          >
            Innovative Web Experiences with Next.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-neutral-300 mt-6"
          >
            Hi! I&apos;m Vansh, a Full Stack Web Developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-4"
          >
            <a href="#about">
              <Button
                borderRadius="1.75rem"
                className="group relative min-w-[200px] p-4 text-base"
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
            <a href="#contact">
              <Button
                borderRadius="1.75rem"
                className="group relative min-w-[200px] p-4 text-base"
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
