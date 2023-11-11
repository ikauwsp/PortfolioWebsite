"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { TabButton } from "@/app/components/TabButton";
import { Chrono } from "react-chrono";
import { FitScreen } from "@mui/icons-material";

const itemData = [
  {
    img: "/internship2023/intern-slide-1.jpg",
    title: "intern_slide_1",
  },
  {
    img: "/internship2023/intern-slide-2.jpg",
    title: "intern_slide_2",
  },
  {
    img: "/internship2023/intern-slide-3.jpg",
    title: "intern_slide_3",
  },
  {
    img: "/internship2023/intern-slide-4.jpg",
    title: "intern_slide_4",
  },
  {
    img: "/internship2023/intern-slide-5.jpg",
    title: "intern_slide_5",
  },
  {
    img: "/internship2023/intern-slide-6.jpg",
    title: "intern_slide_6",
  },
];

const TAB_DATA = [
  {
    title: "Techincal Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 lg:columns-2">
        <li>Android Development</li>
        <li>iOS Development</li>
        <li>
          Different types of testing
          <ul>
            <li>Rollback</li>
            <li>Progression</li>
            <li>Regression</li>
            <li>Performance</li>
          </ul>
        </li>
        <li>Working in an Agile Team</li>
        <li>Software Development Life Cycle</li>
        <li>JavaScript</li>
        <li>Swift</li>
        <li>Kotlin</li>
        <li>Redux Saga</li>
        <li>React Native</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 lg:columns-2">
        <li>Adaptability</li>
        <li>Communication</li>
        <li>Collaboration</li>
        <li>Creativity</li>
        <li>Detail-Oriented</li>
        <li>Leadership</li>
        <li>Liasing between different teams</li>
        <li>Networking</li>
        <li>Presentation/Public Speaking</li>
        <li>Problem Solving</li>
        <li>Team Work</li>
      </ul>
    ),
  },
];

const timelineItems = [

  {
    title: "April 2023",
    cardTitle: "First meeting with my mentor",
    cardSubtitle: "SUTD Infosys Showcase",
  },
  {
    title: "June 2023",
    cardTitle: "Scouted by SingTel",
    cardSubtitle: "Offered an internship by SingTel",
  },
  {
    title: "August 2023",
    cardTitle: "First Month at SingTel",
    cardSubtitle: "Joined SingTel and was so excited to get started",
  },
  {
    title: "September 2023",
    cardTitle: "KT and Onboarding",
    cardSubtitle: "Get to know the GOMO team and spent the first month learning while exploring innovative ideas for the Chapter!",
  },
  {
    title: "27th September 2023",
    cardTitle: "Chapter Presentation",
    cardSubtitle: "Presented the idea I have been working on to the entire SingTel Mobile Chapter. The feedback was amazing!",
  },
  {
    title: "October 2023",
    cardTitle: "Working on GOMO deliverables",
    cardSubtitle: "Participated in Sprint Planning and worked as a frontend developer, liasing with different teams and stakeholders like the POs, Backend and the QA team. Enjoying the company of everyone at SingTel <3",
  },
  {
    title: "8th November 2023",
    cardTitle: "The BIG Move",
    cardSubtitle: "Moved to the new office at Serangoon North..",
  },
  {
    title: "To be Continued...",
    cardTitle: "Exciting adventure awaits!",
  },
 
];

export default function Internship2023() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <div className="lg:w-full lg:h-full">
          <Carousel
            autoPlay={false} // Set to true if you want auto-playing
            animation="fade" // Change animation type as needed
            timeout={500}
            navButtonsAlwaysInvisible={true}
            indicators={true}
          >
            {itemData.map((item, index) => (
              <Paper key={index} style={{ backgroundColor: "transparent" }}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  style={{ borderRadius: "10%" }}
                />
              </Paper>
            ))}
          </Carousel>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="lg:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500  mb-4">
            SingTel Internship 2023
          </h2>
          <p className="text-base lg:text-lg">
            On 28th August 2023, I have started my first software developer
            journey as an intern at SingTel 🌱 After being scouted by the
            company's recruiter at SUTD app showcase event. I joined SingTel as
            a mobile developer for GOMO. I would like to invite you to go
            through with me the fruitful and memorable journey I have had in
            this 4-months internship.
          </p>
          <div className="py-10  place-self-center text-center">
            <a>
              <button
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-teal-600 to-purple-500 hover:bg-slate-800 text-white"
                mt-3
              >
                {/* <a href='/wongsaphat-resume.pdf' download> */}
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  Let's Go!
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white my-5"></div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500  mb-4">
            The Begining
          </h2>
          <p className="text-base lg:text-lg">
            I joined SingTel along with my good friends from SUTD. We were all
            split up into different squads. I was assigned to the GOMO Mobile
            app where I had a blast and learned so many skills.
          </p>
        </div>
        <div className="py-5">
          <Image
            src="/images/gomo-singtel-1.png"
            width={600}
            height={600}
            style={{ borderRadius: "5%" }}
          />
        </div>
      </div>
      {/* <div>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "10%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div> */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500  mb-4">
            My Experience
          </h2>
          <p className="text-base lg:text-lg"></p>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500  mb-4">
            What I have learned
          </h2>
          <p className="text-base lg:text-lg">
            Hi everyone! I'm a computer science student from SUTD. I have a
            passion for design and improving the user's experience. I am always
            looking for a new challenge to work and improve as a developer 🌱
          </p>
          <div className="flex flex-row mt-8 justify-center">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Techincal Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}Soft Skills{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500  mb-4">
              The Journey
            </h2>
            <p className="text-base lg:text-lg">
              I have summarized my journey and my experience using this timeline
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height:"100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Chrono
          items={timelineItems}
          mode="HORIZONTAL"
          theme={{
            titleColor: "white",
          }}
          borderLessCards         
        >
          <div>   
            <img src="/internship2023/medminder-team.jpg" />
          </div>
          <div>
            
          </div>
          <div>
            <img src="/internship2023/intern-slide-6.jpg" />
          </div>
          <div>
            <img src="/internship2023/intern-slide-8.jpg" />
          </div>
          <div>
            <img src="/internship2023/intern-slide-9.jpg" />
          </div>
          <div>
            <img src="/internship2023/intern-slide-10.jpg" />
          </div>
          <div>
            <img src="/internship2023/intern-slide-11.jpg" />
          </div>
        </Chrono>
      </div>
    </section>
  );
}
