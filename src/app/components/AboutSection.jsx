"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Android Development</li>
        <li>HTML/CSS</li>
        <li>iOS Development</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Kotlin</li>
        <li>Machine Learning</li>
        <li>NextJS</li>
        <li>Python</li>
        <li>React Native</li>
        <li>ReactJS</li>
        <li>Redux/Redux Saga</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Singapore University of Technology and Design (2021-Present)</li>
        <li>Catholic Junior College (2018-2019)</li>
        <li>Whitley Secondary School (2014-2017)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>SingTel Software Engineer Intern (Mobile Developer)</li>
        <li>NovaTech Resources Intern</li>
        <li>FTCVintage Founder</li>
        <li>Tisco Bank Intern</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16"
      >
        <Image
          src="/images/pc.jpg"
          width={600}
          height={600}
          style={{ borderRadius: "20%" }}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500  mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            Hi everyone! I'm a computer science student from SUTD. I have a
            passion for design and improving the user's experience. I am always
            looking for a new challenge to work and improve as a developer 🌱
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""} Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""} Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {""} Experience{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
