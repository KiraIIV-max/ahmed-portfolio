"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const HeroContent = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    let introTimer: number;
    let contentTimer: number;

    const startIntro = () => {
      setShowIntro(true);

      // الـ Content يبدأ يظهر لما الـ Intro يبدأ يفيد (بعد 1.8s)
      contentTimer = window.setTimeout(() => {
        setContentReady(true);
      }, 1800);

      // الـ Intro يختفي تماماً بعد 2.5s
      introTimer = window.setTimeout(() => {
        setShowIntro(false);
      }, 2500);
    };

    window.addEventListener("portfolio-loading-complete", startIntro, {
      once: true,
    });

    return () => {
      window.removeEventListener("portfolio-loading-complete", startIntro);
      if (introTimer !== undefined) window.clearTimeout(introTimer);
      if (contentTimer !== undefined) window.clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative z-[20] w-full">
      {/* ===== Hero Intro Overlay ===== */}
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.6,
          }}
          className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#030014]"
        >
          {/* Radial Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.6, 0.4, 0.2] }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.18),_transparent_38%)]"
          />

          {/* Cyan Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 h-px w-[55%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00E5FF] via-50% to-transparent shadow-[0_0_30px_rgba(0,229,255,0.9)]"
          />

          {/* Purple Line */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: [0, 80, -40, 0], opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[1px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-60"
          />

          {/* Text Container */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "1.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] uppercase tracking-[0.55em] text-[#00E5FF]"
            >
              Hello, I&apos;m
            </motion.span>

            <motion.h2
              initial={{ scale: 0.75, opacity: 0, filter: "blur(14px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              className="text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              <span className="bg-gradient-to-r from-white via-[#dfe6ff] to-[#7dd3fc] bg-clip-text text-transparent">
                Ahmed Mohamed
              </span>
            </motion.h2>
          </motion.div>

          {/* Pulsing Circle */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.4, 1], opacity: [0, 0.9, 0] }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute h-32 w-32 rounded-full border border-[#00E5FF]/60 bg-[#00E5FF]/10 shadow-[0_0_40px_rgba(0,229,255,0.7)]"
          />
        </motion.div>
      )}

      {/* ===== Main Hero Content ===== */}
      <motion.div
        initial="hidden"
        animate={contentReady ? "visible" : "hidden"}
        className="flex min-h-[720px] w-full flex-col items-center justify-center gap-10 px-6 pt-32 sm:px-10 sm:pt-40 lg:min-h-[820px] lg:flex-row lg:gap-4 lg:px-20"
      >
        <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-center lg:text-start">
          
          {/* Badge + Name */}
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col items-center gap-3 lg:items-start"
          >
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#00E5FF]">
              <SparklesIcon className="h-4 w-4 text-[#b49bff]" />
              <span>Hello, I&apos;m</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Ahmed Mohamed
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex max-w-[700px] flex-col gap-6 text-2xl font-semibold leading-tight text-white sm:text-3xl"
          >
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Junior Software Engineer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="my-5 max-w-[620px] text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            I build full-stack applications, backend systems, and interactive
            experiences — with a growing focus on cloud, networking, DevOps, and
            AI automation.
          </motion.p>

          {/* Location + Availability */}
          <motion.div
            variants={slideInFromLeft(0.9)}
            className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400 lg:justify-start"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#00E5FF]" />
              Cairo, Egypt
            </span>
            <span aria-hidden="true" className="text-[#7042f8]">
              ·
            </span>
            <span className="text-[#b49bff]">Available for opportunities</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={slideInFromLeft(1.1)}
            className="mt-2 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-500 hover:border-transparent hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5FF]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
              <span className="relative z-10">Explore Work</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="/Ahmed_Mohamed_CV (4).pdf"
              download="Ahmed-Mohamed-CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-[#7042f861] bg-[#0300145e] px-8 py-4 text-sm font-medium uppercase tracking-wider text-gray-300 transition-all duration-300 hover:border-[#00E5FF] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5FF]"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full px-4 py-4 text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors duration-300 hover:text-[#00E5FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5FF]"
            >
              <Mail className="h-4 w-4" />
              <span className="relative">
                Get in Touch
                <span className="absolute bottom-[-4px] left-0 h-px w-0 bg-[#00E5FF] transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex h-full w-full max-w-[420px] items-center justify-center lg:max-w-none"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="Abstract illustration of web and software development"
            height={650}
            width={650}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;