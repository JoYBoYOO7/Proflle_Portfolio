"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""));

      // Check if we're at the top of the page for home section
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      let currentSection = "";
      for (const section of sections) {
        if (section === "") continue; // Skip empty section
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      // Only update if we found a section or if we're not at the top
      if (currentSection || window.scrollY >= 100) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-8 py-4 rounded-2xl border border-white/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => {
          const itemSection = navItem.link.replace("#", "") || "home";
          const isActive = activeSection === itemSection;

          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-all duration-300 ease-in-out py-1 px-2",
                isActive && "text-purple-500 dark:text-purple-400"
              )}
            >
              <motion.div
                className="absolute inset-0 rounded-lg"
                initial={false}
                animate={{
                  backgroundColor: isActive
                    ? "rgba(139, 92, 246, 0.1)"
                    : "rgba(139, 92, 246, 0)",
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="block sm:hidden relative z-10">
                {navItem.icon}
              </span>
              <span className="text-sm font-medium relative z-10 !cursor-pointer">
                {navItem.name}
              </span>
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-2 right-2 h-0.5 bg-purple-500 dark:bg-purple-400"
                  layoutId="underline"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
