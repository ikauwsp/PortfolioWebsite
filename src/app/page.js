import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { ProjectSection } from './components/ProjectSection';
import { Footer } from './components/Footer';
import { EmailSection } from './components/EmailSection';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
        <main className='flex min-h-screen flex-col bg-[#121212]'>
          <Navbar/>
            <div class='container mt-24 mx-auto px-12 py-6'>
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
          <EmailSection/>
            </div>
          <Footer/>
   
      </main>
  );
}
    
