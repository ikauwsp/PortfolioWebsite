'use client';
import React, {useState, useRef} from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectTag } from './ProjectTag';
import {motion, useInView} from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'Software Engineer Internship',
        description: 'Internship description',
        image: '/images/projects/gomo-intern.png',
        tag: ["All", "Mobile"],
        previewUrl:"/project/internship2023",

    },
    {
        id: 2,
        title: 'MedMinder Android',
        description: 'Project description',
        image: '/images/projects/med-minder.png' ,
        tag: ["All", "Mobile"],
        previewUrl:"/project/medminderproject",

    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'Tech stack used : NextJS',
        image: '/images/projects/website.png',
        tag:["All", "Web"],
        previewUrl:"/project/portfolioweb",

    },
]

export const ProjectSection = () => {
    const [tag,setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const handleTagChange = (newTag) =>{
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: {y:50, opacity:0},
        animate:{y:0, opacity:1},
    };

  return (
   <section ref={ref}>
   <h2 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500 mt-4 mb-8 md:mb-8'>
    Some things I've worked on
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === "All"}/>
        <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === "Web"}/>
        <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === "Mobile"}/>
        

    </div>
   <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
    {filteredProjects.map((project, index) => (
        <motion.li
            key={index}
            variants={cardVariants} 
            initial='initial' 
            animate={isInView ? 'animate' :'initial'}
            transition={{duration:0.3, delay:index*0.4}}
        >
        <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            previewUrl={project.previewUrl}
            
        />
        </motion.li>
        ))}
    </ul>
   </section>
  )
}
