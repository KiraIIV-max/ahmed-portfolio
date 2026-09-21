import React from 'react'
import Hero from "../components/main/Hero"
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import About from '@/components/main/About';
import Experience from '@/components/main/Experience';
import Contact from '@/components/main/Contact';
const page = () => {
  return (
    <main className = "h-full w-full">
      <div className = "flex flex-col gap-20">
        <Hero />
        <About/>
        <Skills />
        <Projects/>
        <Encryption />
        <Experience/>
        <Contact/>
        
      </div>
    </main>
  )
}

export default page