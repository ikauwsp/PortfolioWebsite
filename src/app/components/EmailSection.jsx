'use client';
import React, { useState } from 'react';
import GithubIcon from 'public/images/icon/github-icon.svg';
import LinkedinIcon from 'public/images/icon/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';



export const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email : e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);
        if (response.status === 200){
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    };
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities, my inbox is open 24/7 (yes I'm serious).
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className='social flex flex-row gap-2'>
                <Link href='https://github.com/ikauwsp'>
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href='https://www.linkedin.com/in/wongsaphat/'>
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>

            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                <label htmlFor= 'email' className='text-white block mb-2 text-sm font-medium'>Your email</label>
                <input
                    name='email'
                    type='email'
                    id='email'
                    required
                    className='bg-[#18191E] border border-[#333353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='jacob@gmail.com'/>
                </div>
                <div className='mb-6'>
                <label htmlFor= 'subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                <input
                    name='subject'
                    type='text'
                    id='subject'
                    required
                    className='bg-[#18191E] border border-[#333353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Just saying hi!'/>
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor='message'
                        className='text-white block text-sm mb-2 font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#333353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."
                        />
                </div>
                <button
                    type='submit'
                    className='bg-gradient-to-br from-blue-500 via-teal-600 to-purple-500 hover:bg-teal-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                    Send Message   
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>

                    )
                }
            </form>
        </div>
    </section>

  )
}
