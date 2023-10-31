"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton';

const TAB_DATA = [
    {
        title:'Skills',
        id:'skills',
        content:(
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Redux Saga</li>
                <li>Python</li>
                <li>iOS Development</li>
                <li>Java</li>
            </ul>
        )
    },
    {
        title:'Education',
        id:'education',
        content:(
            <ul className='list-disc pl-2'>
                <li>Singapore University of Technology and Design</li>
                <li>Catholic Junior College</li>
                <li>Whitley Secondary School</li>
            </ul>
        )
    },
    {
        title:'Experience',
        id:'experience',
        content:(
            <ul className='list-disc pl-2'>
                <li>SingTel Software Engineer Intern</li>
                <li>NovaTech Resources Intern</li>
                <li>FTCVintage Founder</li>
            </ul>
        )
    },


]

export const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
   <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
        <Image src='/images/about-me.png' width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
            Hello there! I'm a SUTD computer science student with a deep passion for design,
            aspiring to become a full-stack developer. I thrive at the intersection of coding and
            creativity, combining a strong programming foundation with a keen eye for aesthetics. Join me on my 
            journey to create user-centric applications that seamlessly blend functionality and design. 
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton selectTab={()=>handleTabChange('skills')} active={tab === 'skills'}>{''} Skills{''}</TabButton>
                <TabButton selectTab={()=>handleTabChange('education')} active={tab === 'education'}>{''} Education{''}</TabButton>
                <TabButton selectTab={()=>handleTabChange('experience')} active={tab === 'experience'}>{''} Experience{''}</TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t)=>t.id === tab).content}</div>
        </div>
    </div>
   </section>
  )
}
