"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
