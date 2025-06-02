"use client";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const RecentProjects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0 pointer-events-none" />
      <div className="flex flex-col items-center relative z-10">
        <motion.h1
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500/80 text-center max-w-[90vw] lg:max-w-[45vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A small selection of{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
            recent projects
          </span>
        </motion.h1>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center p-4 gap-8 md:gap-16 mt-10 relative z-10"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RecentProjects;
