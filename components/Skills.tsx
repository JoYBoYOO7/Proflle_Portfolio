"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon, name, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center justify-center gap-3 px-4 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700/50 transition-colors",
        className
      )}
    >
      {icon}
      <span className="text-sm font-medium text-zinc-100">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "ReactJS",
          icon: <img src="/icons/react.svg" className="w-5 h-5" alt="React" />,
        },
        {
          name: "NextJS",
          icon: (
            <img src="/icons/nextjs.svg" className="w-5 h-5" alt="Next.js" />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <img
              src="/icons/typescript.svg"
              className="w-5 h-5"
              alt="TypeScript"
            />
          ),
        },
        {
          name: "Tailwind CSS",
          icon: (
            <img src="/icons/tailwind.svg" className="w-5 h-5" alt="Tailwind" />
          ),
        },
        {
          name: "Motion",
          icon: (
            <img
              src="/icons/framer.svg"
              className="w-5 h-5"
              alt="Framer Motion"
            />
          ),
        },
        {
          name: "Sanity",
          icon: (
            <img src="/icons/sanity.svg" className="w-5 h-5" alt="Sanity" />
          ),
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "NodeJS",
          icon: (
            <img src="/icons/nodejs.svg" className="w-5 h-5" alt="Node.js" />
          ),
        },
        {
          name: "ExpressJS",
          icon: (
            <img
              src="/icons/express.svg"
              className="w-5 h-5"
              alt="Express.js"
            />
          ),
        },
        {
          name: "PostgreSQL",
          icon: (
            <img
              src="/icons/postgresql.svg"
              className="w-5 h-5"
              alt="PostgreSQL"
            />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <img src="/icons/mongodb.svg" className="w-5 h-5" alt="MongoDB" />
          ),
        },
        {
          name: "Prisma",
          icon: (
            <img src="/icons/prisma.svg" className="w-5 h-5" alt="Prisma" />
          ),
        },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        {
          name: "Zustand",
          icon: (
            <img src="/icons/zustand.svg" className="w-5 h-5" alt="Zustand" />
          ),
        },
        {
          name: "Zod",
          icon: <img src="/icons/zod.svg" className="w-5 h-5" alt="Zod" />,
        },
        {
          name: "pnpm",
          icon: <img src="/icons/pnpm.svg" className="w-5 h-5" alt="pnpm" />,
        },
        {
          name: "Git",
          icon: <img src="/icons/git.svg" className="w-5 h-5" alt="Git" />,
        },
        {
          name: "GitHub",
          icon: (
            <img src="/icons/github.svg" className="w-5 h-5" alt="GitHub" />
          ),
        },
        {
          name: "Vercel",
          icon: (
            <img src="/icons/vercel.svg" className="w-5 h-5" alt="Vercel" />
          ),
        },
        {
          name: "AWS",
          icon: <img src="/icons/aws.svg" className="w-5 h-5" alt="AWS" />,
        },
        {
          name: "Docker",
          icon: (
            <img src="/icons/docker.svg" className="w-5 h-5" alt="Docker" />
          ),
        },
        {
          name: "Expo",
          icon: <img src="/icons/expo.svg" className="w-5 h-5" alt="Expo" />,
        },
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          rotate,
          scale,
          opacity,
        }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('/steel-flower.webp')",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-widest text-zinc-400"
          >
            MY SKILLS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500/80"
          >
            The Secret{" "}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
              Sauce
            </span>
          </motion.h2>

          <div className="w-full max-w-6xl mx-auto mt-16 grid gap-8 md:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * categoryIndex }}
                className="relative"
              >
                <motion.h3 className="text-xl md:text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 * index + 0.2 * categoryIndex,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="flex items-center justify-center"
                    >
                      <SkillBadge icon={skill.icon} name={skill.name} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50 pointer-events-none" />
    </section>
  );
};

export default Skills;
