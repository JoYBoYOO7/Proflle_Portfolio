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
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <motion.h1 
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center p-4 gap-8 md:gap-16 mt-10"
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
