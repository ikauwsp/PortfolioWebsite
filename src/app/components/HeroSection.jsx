"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className='lg:py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <motion.div
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale: 1}}
                transition={{duration:0.5}} 
                className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500'>Hello, I'm {""}
                </span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        "Wongsaphat",
                        1000,
                        "a Web Developer",
                        1000,
                        "Mobile Developer",
                        1000,
                        "a UI/UX Designer",
                        1000,
                        "a Fullstack Wannabe",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                As a sophomore with a passion for software development, data science, and entrepreneurship, I've gained valuable experience from starting 
                my own vintage clothing business. Although it's not directly related to software development, I've discovered various opportunities to 
                apply my skills to help my business grow and succeed.
            </p>
            <div className='py-4'>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-500 via-teal-600 to-purple-500 hover:bg-slate-200 text-white'>Hire me!</button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-teal-600 to-purple-500 hover:bg-slate-800 text-white' mt-3 >
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 '>
                        Download CV
                    </span>
                </button>
            </div>




            </motion.div>
            <motion.div
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale: 1}}
                transition={{duration:0.5}}  
                className='col-span-4 place-self-center'>
            {/* <div className='rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'> */}
            <div className='relative bg-gradient-to-b  from-blue-500 via-teal-600 to-purple-500 rounded-full w-[250px] h-[250px] overflow-hidden lg:w-[400px] lg:h-[400px]'>
            <Image
                src="/images/memoji.png"
                alt='hero image'
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={300}
                height={300}
                
                />
            </div>
            </motion.div>
        </div>
    </section>
  )
}
