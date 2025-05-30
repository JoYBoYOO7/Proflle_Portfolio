"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

// Tool icons mapping
const toolIcons: { [key: string]: string } = {
  "React": "/re.ico",
  "Next.js": "/next.svg",
  "TypeScript": "/ts.svg",
  "Node.js": "/node.svg",
  "Express": "/node.svg",
  "Firebase": "/firebase.svg",
  "Tailwind CSS": "/tail.svg",
  "Astro": "/astro.svg",
  "AI Integration": "/ai.svg",
  "Appwrite": "/app.svg"
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    des: string;
    img: string;
    link: string;
    iconLists: string[];
    tools: string[];
    color: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="lg:min-h-[32.5rem] h-[25rem] sm:w-96 w-[80vw] relative rounded-xl overflow-hidden cursor-pointer group"
        style={{
          backgroundColor: project.color || "#13162D",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />

        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Project Image */}
        <motion.div 
          className="relative h-[60%] flex items-end justify-center p-4 z-20"
          animate={{
            y: isHovered ? -10 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={project.img}
            alt={project.title}
            className="max-h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative p-6 h-[40%] z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
            {project.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base line-clamp-2 mb-4 group-hover:text-white/90 transition-colors">
            {project.des}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <motion.span
                key={index}
                className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm rounded-full bg-white/10 text-white flex items-center gap-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                whileHover={{ scale: 1.05 }}
              >
                {toolIcons[tool] && (
                  <img 
                    src={toolIcons[tool]} 
                    alt={`${tool} icon`} 
                    className="w-3 h-3 md:w-4 md:h-4 object-contain"
                  />
                )}
                {tool}
              </motion.span>
            ))}
          </div>

          {/* View Details Button - Shows on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]"
              >
                <motion.button 
                  className="px-6 py-3 rounded-full bg-purple text-white flex items-center gap-2 hover:bg-opacity-90 transition-colors"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                  <FaLocationArrow className="text-sm" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#13162D] rounded-2xl p-4 md:p-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="relative h-[250px] md:h-[400px] rounded-xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <div className="flex flex-col">
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 text-sm md:text-base mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.des}
                  </motion.p>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-white font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-white flex items-center gap-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.1 * index,
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {toolIcons[tool] && (
                            <img 
                              src={toolIcons[tool]} 
                              alt={`${tool} icon`} 
                              className="w-4 h-4 object-contain"
                            />
                          )}
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple text-white hover:bg-opacity-90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Project
                      <FaLocationArrow />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard; 