import React from "react";
import {
  DiEclipse,
  DiJava,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTailwindCssFill, RiVercelLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export const About = () => {
  return (
    <div className="p-5 w-full h-full">
      <h1
        className="text-2xl md:text-3xl md:max-w-xl mt-10"
        style={{ fontFamily: "incognito" }}
      >
        I'm Abhishek. I live in Gurgaon India, where I build the future.
      </h1>
      <h1 className=" md:max-w-xl mt-3">
        I am a self-driven, career-oriented software engineer specializing in
        front-end development , currently working as Software Engineer.
         My expertise lies in building interactive
        web applications on the client side. Primarily working with technologies
        like JavaScript, React.JS, Node.JS and Java. I strongly believe in
        continuous learning and improving myself, so I try my best to learn in
        any situation possible, unfavorable or not. Beyond learning, I enjoy
        writing technical articles and creating projects that both inspire and
        benefit fellow developers.
      </h1>

      <h1
        className="text-2xl md:text-3xl md:max-w-xl mt-10"
        style={{ fontFamily: "incognito" }}
      >
        <span className="text-gray-500 p-3 italic">#</span>What I'm Currently
        Hacking on?
      </h1>
      <h1 className=" md:max-w-xl flex flex-row gap-1">
        I'm still trying to grind <a className="text-blue-500 font-semibold flex flex-row items-center gap-1 cursor-pointer">leetcode<FaExternalLinkAlt/></a> problems.
      </h1>

      <h1
        className="text-2xl md:text-3xl md:max-w-xl mt-10"
        style={{ fontFamily: "incognito" }}
      >
      Usage
      </h1>
      <h1 className=" md:max-w-xl">
        Tools, technologies I use on a daily basis but not limited to.
      </h1>
      <h1
        className="text-2xl md:text-3xl md:max-w-xl mt-10"
        style={{ fontFamily: "incognito" }}
      >
       Technologies
      </h1>
      <div className="flex-row flex items-center gap-2">
        
        <DiJava size={35} className="m-1" /> <a href="https://www.java.com/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">Java</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <DiJavascript size={35} className="m-1" />
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="cursor-pointer text-blue-500 font-semibold">Javascript</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <DiMongodb size={35} className="m-1" />
        <a href="https://www.mongodb.com/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">MongoDB</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <DiReact size={35} className="m-1" />
        <a href="https://react.dev/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">React JS</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <DiNodejs size={35} className="m-1" />
        <a href="https://nodejs.org/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">Node JS</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <RiTailwindCssFill size={35} className="m-1" />
        <a href="http://tailwindcss.com/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">Tailwind CSS</a>
      </div>
      <h1
        className="text-2xl md:text-3xl md:max-w-xl mt-10"
        style={{ fontFamily: "incognito" }}
      >
       Tools
      </h1>
      <div className="flex-row flex items-center gap-2">
        
        <VscVscode size={35} className="m-1" />
        <a href="http://tailwindcss.com/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">VS Code</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <DiEclipse size={35} className="m-1" />
        <a href="http://tailwindcss.com/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">Eclipse</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <FaGithub size={35} className="m-1" />
        <a href="http://tailwindcss.com/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">Github</a>
      </div>
      <div className="flex-row flex items-center gap-2">
        
        <RiVercelLine size={35} className="m-1" />
        <a href="http://tailwindcss.com/" target="_blank" className="cursor-pointer text-blue-500 font-semibold">Vercel</a>
      </div>
    </div>
  );
};
