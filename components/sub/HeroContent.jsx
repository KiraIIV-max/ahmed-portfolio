"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";

const HeroContent = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full z-[20]">
      {showIntro && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#030014]"
        >
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.8, 0.6, 0.25] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.18),_transparent_38%)]"
          />

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 h-px w-[55%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00E5FF] via-50% to-transparent shadow-[0_0_30px_rgba(0,229,255,0.9)]"
          />

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: [0, 80, -40, 0], opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[1px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-60"
          />

          <motion.div
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-4"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[10px] text-[#00E5FF] uppercase font-mono tracking-[0.55em]"
            >
              Hello, I&apos;m
            </motion.span>

            <motion.h2
              initial={{ scale: 0.75, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              <span className="bg-gradient-to-r from-white via-[#dfe6ff] to-[#7dd3fc] bg-clip-text text-transparent">
                Ahmed Mohamed
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.3, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="absolute h-24 w-24 rounded-full border border-[#00E5FF]/60 bg-[#00E5FF]/10 shadow-[0_0_30px_rgba(0,229,255,0.7)]"
          />
        </motion.div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-4 px-6 sm:px-10 lg:px-20 pt-32 sm:pt-40 w-full min-h-[720px] lg:min-h-[820px]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
        
        {/* ===== Badge ===== */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box max-w-full py-2 px-2 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[10px] sm:text-[13px] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-center">
            Available for software engineering roles
          </h1>
        </motion.div>

        {/* ===== Headline ===== */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl sm:text-6xl font-bold text-white max-w-[650px] w-auto h-auto leading-[1.05]"
        >
          <span>
            I build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}modern products
            </span>
            {" "}that work.
          </span>
        </motion.div>

        {/* ===== Description ===== */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[620px] leading-relaxed"
        >
          I&apos;m Ahmed Mohamed, a Full-Stack Software Engineer focused on
          building responsive web experiences, reliable backend systems, cloud-ready
          infrastructure, and AI-powered workflows that solve real problems.
        </motion.p>

        {/* ===== CTA Buttons ===== */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2"
        >
          {/* Explore More — Primary */}
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm tracking-wider uppercase transition-all duration-500 cursor-pointer overflow-hidden hover:border-transparent hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            {/* Gradient Layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Glow Layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
            {/* Content */}
            <span className="relative z-10">Explore More</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Get in Touch — Secondary */}
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-gray-300 font-medium text-sm tracking-wider uppercase hover:text-[#00E5FF] transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span className="relative">
              Get in Touch
              <span className="absolute bottom-[-4px] left-0 h-[1px] w-0 bg-[#00E5FF] group-hover:w-full transition-all duration-500" />
            </span>
          </a>
        </motion.div>
      </div>

        {/* ===== Right: Image ===== */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full max-w-[420px] lg:max-w-none h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;