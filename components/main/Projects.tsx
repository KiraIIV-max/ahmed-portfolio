"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// ===== بيانات المشاريع =====
const projects = [
  {
    id: "01",
    title: "ARTSCAPE",
    subtitle: "Full-Stack Art Auction Marketplace",
    description: "A full-stack online art auction platform connecting artists, collectors, and administrators.",
    tech: ["React", "Laravel", "PHP", "MySQL", "REST API", "Sanctum", "Tailwind"],
    links: [
      { text: "View Repository", url: "https://github.com/KiraIIV-max/ArtScape" }
    ],
    image: "/project-1.png",
  },
  {
    id: "02",
    title: "EVENTRA",
    subtitle: "Event Discovery & Booking Platform",
    description: "A modern event booking experience built around discovery, search, ticket selection, and validation.",
    tech: ["React 19", "Vite", "React Router", "JavaScript", "Tailwind", "LocalStorage"],
    links: [
      { text: "Live Project", url: "https://eventra-xi-five.vercel.app/" },
      { text: "View Repository", url: "https://github.com/KiraIIV-max/Eventra" }
    ],
    image: "/project-2.png",
  },
  {
    id: "03",
    title: "DRIVEON",
    subtitle: "Premium Car Rental Experience",
    description: "A polished car rental interface focused on vehicle discovery, filtering, and booking flows.",
    tech: ["React 19", "Tailwind", "React Router", "GSAP", "LocalStorage"],
    links: [
      { text: "Live Project", url: "https://driveon-delta.vercel.app/" },
      { text: "View Repository", url: "https://github.com/KiraIIV-max/driveon" }
    ],
    image: "/project-3.png",
  },
  {
    id: "04",
    title: "MACBOOK PRO",
    subtitle: "Interactive 3D Product Showcase",
    description: "An immersive product experience featuring a real-time 3D MacBook model and scroll animations.",
    tech: ["React", "Three.js", "React Three Fiber", "GSAP", "Zustand", "Tailwind"],
    links: [
      { text: "Live Project", url: "https://mac-book-pro-phi.vercel.app/" },
      { text: "View Repository", url: "https://github.com/KiraIIV-max/MacBook-Pro" }
    ],
    image: "/project-4.png",
  },
  {
    id: "05",
    title: "CPU SCHEDULING SIMULATOR",
    subtitle: "Operating Systems & Algorithms",
    description: "A JavaFX desktop application for visualizing CPU scheduling algorithms with Gantt charts.",
    tech: ["Java", "JavaFX", "OOP", "Algorithms", "Operating Systems"],
    links: [
      { text: "View Repository", url: "https://github.com/KiraIIV-max/CPU-SCHEDULING-SIMULATOR" }
    ],
    image: "/project-5.png",
  },
  {
    id: "06",
    title: "NOIRÉ",
    subtitle: "Premium Café Experience",
    description: "A modern café website designed around elegant visual presentation and menu discovery.",
    tech: ["React", "Vite", "React Router", "GSAP", "CSS", "Lucide"],
    links: [
      { text: "Live Project", url: "https://noire-two-sigma.vercel.app/" },
      { text: "View Repository", url: "https://github.com/KiraIIV-max/Noire" }
    ],
    image: "/project-6.png",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listContainerRef = useRef<HTMLDivElement>(null);

  // ===== Intersection Observer لتتبع المشروع النشط =====
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // ===== تحريك الكورة (Dot) =====
  useEffect(() => {
    const updateDot = () => {
      const activeEl = projectRefs.current[activeIndex];
      const container = listContainerRef.current;

      if (activeEl && container) {
        const containerRect = container.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        const newTop = elRect.top - containerRect.top + elRect.height / 2;
        setDotPosition(newTop);
      }
    };

    updateDot();
    const timer = setTimeout(updateDot, 150);

    window.addEventListener("resize", updateDot);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDot);
    };
  }, [activeIndex]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 sm:py-32 px-5 sm:px-6 md:px-10 overflow-hidden z-[20]"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* ===== Header ===== */}
        <div className="flex flex-col items-start mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#00E5FF]" />
            <span className="text-[#00E5FF] text-xs font-mono tracking-[0.3em] uppercase">
              04 — Selected Work
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
            Projects I&apos;ve Built.
          </h2>
          <p className="mt-6 text-gray-400 max-w-[600px] text-[15px] leading-relaxed">
            A selection of applications and systems I&apos;ve designed and developed across frontend, backend, 3D experiences, and software engineering.
          </p>
        </div>

        {/* ===== Timeline + Projects ===== */}
        <div ref={listContainerRef} className="relative pl-8 md:pl-14">
          
          {/* ===== الخط الطولي (Timeline) ===== */}
          <div className="absolute left-3 md:left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#7042f8]/10 via-[#7042f8]/60 to-[#7042f8]/10" />

          {/* ===== الكورة المتحركة (Moving Dot) ===== */}
          <motion.div
            className="absolute left-3 md:left-6 w-3.5 h-3.5 rounded-full bg-[#00E5FF] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{
              boxShadow:
                "0 0 0 4px rgba(0, 229, 255, 0.15), 0 0 20px #00E5FF, 0 0 30px rgba(0, 229, 255, 0.6)",
            }}
            animate={{ top: dotPosition }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
          >
            {/* نبضة داخلية */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#00E5FF]"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* ===== قائمة المشاريع ===== */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              onMouseEnter={() => setActiveIndex(index)}
              className="py-16 border-b border-[#7042f83b] last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* ===== Preview (Left) ===== */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-5 transition-all duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden border border-[#7042f83b] bg-[#0d0a1f] shadow-2xl shadow-purple-500/10 hover:border-[#00E5FF]/50 transition-all duration-500">
                    
                    {/* Browser Chrome Bar */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#7042f83b] bg-[#0300145e]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <div className="ml-4 text-[10px] font-mono text-gray-500 truncate">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.vercel.app
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* ===== Info (Right) ===== */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className={`lg:col-span-7 flex flex-col transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* ID + Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[#00E5FF] font-mono text-sm">{project.id}</span>
                    <div className="h-[1px] w-8 bg-[#00E5FF]/50" />
                    <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">
                      Project
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#00E5FF] text-sm mt-2 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-[15px] leading-relaxed mt-5 max-w-[600px]">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-gray-300 bg-[#7042f815] border border-[#7042f830] px-2.5 py-1 rounded-md hover:border-[#00E5FF]/50 hover:text-white transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-5 mt-8">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#00E5FF] transition-colors group/link border-b border-transparent hover:border-[#00E5FF] pb-1"
                      >
                        <span>{link.text}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;