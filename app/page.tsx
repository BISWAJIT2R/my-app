"use client"
import Hero from '@/components/Hero'
import About from '@/components/About'
import { FloatingNav } from "@/components/ui/FloatingNav";
import {navItems} from "@/data/index"
import Project from '@/components/Project';
import Testnomials from '@/components/ui/Testnomials';
import Footer from '../components/Footer';
const page = () => {

  return (
    <main className='main'>
     <div className='w-full max-w-7xl '>
      <FloatingNav navItems={navItems} className=' text-[18px]'/>
      <Hero/>
      <About/>
      <Project/>
      <Testnomials/>
      <Footer/>
     </div>
    </main>
  )
}

export default page