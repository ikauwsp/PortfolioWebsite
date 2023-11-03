import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { ProjectSection } from './components/ProjectSection';
import { Footer } from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <main className='flex min-h-screen flex-col bg-[#121212]'>
          <Navbar/>
            <div class='container mt-24 mx-auto px-12 py-6'>
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
            </div>
          <Footer/>
      </main>
      </li>
      <li>
        <Link href='/project'>
            <a>Go to Project Page</a>
        </Link>
      </li>
    </ul>
  );
}
    
