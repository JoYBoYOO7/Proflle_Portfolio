"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px]" id="contact">
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500/80 text-center max-w-[90vw] lg:max-w-[45vw]"
        >
          Ready to take{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
            your
          </span>{" "}
          digital presence to the next level?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 md:mt-10 my-5 text-center max-w-[85vw] md:max-w-[60vw] text-sm md:text-base"
        >
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a href="mailto:vansh.15926@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 md:gap-0">
        <p className="md:text-base text-sm md:font-normal font-light text-zinc-400">
          Copyright © 2025 Vansh Yadav
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <motion.a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-black/50 rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
