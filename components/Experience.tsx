"use client";

import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0 pointer-events-none" />
      <div className="flex flex-col items-center relative z-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500/80 text-center max-w-[90vw] lg:max-w-[45vw]">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
            work experience
          </span>
        </h1>
      </div>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 relative z-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
