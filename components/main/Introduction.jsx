"use client";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

import { FRONTEND_SKILL } from "@/constants";

export const Introduction = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Think better with Next.js 14
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          Making apps with modern technologies.
        </motion.div>
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"> */}
      <div
        className="flex flex-col text-center justifty-center 
      gap-6 mt-6 text-6xl text-bold text-white max-w-[480px] w-auto h-auto lg:max-w-[600px]"
      >
        <span>
          Providing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            the best
          </span>{" "}
          project experience.
        </span>
        <p className="text-lg text-gray-400 my-5 max-w-[600px]">
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </p>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
