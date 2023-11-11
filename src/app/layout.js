import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wongsaphat | Software Developer',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='flex min-h-screen flex-col bg-[#121212]'>
        <Navbar/>
        <div class='flex-1 container mt-24 mx-auto px-12 py-6'>
        {children}
        </div>
        <Footer/>
        </div>
      </body>

    </html>
  )
}
