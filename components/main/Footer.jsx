"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ===== بيانات التنقل =====
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about-me" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// ===== روابط التواصل =====
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/KiraIIV-max",
    icon: <FaGithub className="w-3.5 h-3.5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-mohamed-1012a6353",
    icon: <FaLinkedin className="w-3.5 h-3.5" />,
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden z-[20]">
      
      {/* ===== Top Border / Divider ===== */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      {/* ===== Main Content ===== */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-16 md:py-20">
        
        {/* ===== Row 1: Brand + Info ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* === Left: Brand (col-span-6) === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* AHMED */}
            <h2 className="text-[48px] sm:text-[52px] md:text-[72px] font-bold text-white leading-none tracking-tight">
              AHMED
              <span className="text-[#00E5FF]">.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#00E5FF] text-sm md:text-base font-mono tracking-wider uppercase mt-4">
              Full-Stack Developer · Desktop Apps
            </p>

            {/* Tagline */}
            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mt-3 max-w-[500px]">
              MERN · Desktop Apps · Backend · Cloud · Automation
            </p>
            <a
              href="/Ahmed_Mohamed_CV (4).pdf"
              download="Ahmed-Mohamed-CV.pdf"
              className="mt-6 w-fit text-sm font-medium text-gray-300 underline decoration-[#00E5FF]/60 underline-offset-4 transition-colors hover:text-[#00E5FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5FF]"
            >
              Download CV
            </a>
          </motion.div>

          {/* === Middle: Navigation (col-span-3) === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-4 bg-[#00E5FF]" />
              <span className="text-gray-500 text-[10px] font-mono tracking-[0.3em] uppercase">
                Navigation
              </span>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#00E5FF] group-hover:w-full transition-all duration-500" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* === Right: Connect (col-span-3) === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-4 bg-[#00E5FF]" />
              <span className="text-gray-500 text-[10px] font-mono tracking-[0.3em] uppercase">
                Connect
              </span>
            </div>

            {/* Social Links */}
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] transition-colors duration-300 text-sm"
                  >
                    <span className="text-[#00E5FF]/60 group-hover:text-[#00E5FF] transition-colors">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Location */}
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <span className="text-gray-500 text-[10px] font-mono tracking-[0.3em] uppercase block mb-2">
                Based in
              </span>
              <span className="text-gray-300 text-sm">Cairo, Egypt</span>
            </div>
          </motion.div>
        </div>

        {/* ===== Divider ===== */}
        <div className="h-[1px] w-full bg-white/[0.06] mt-16 mb-8" />

        {/* ===== Row 2: Bottom Bar ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Copyright */}
          <span className="text-gray-500 text-xs font-mono tracking-wider uppercase">
            © 2026 Ahmed Mohamed
          </span>

          {/* Built With */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00E5FF]" />
            </span>
            <span className="text-gray-500 text-xs font-mono tracking-wider uppercase">
              Built with intention.
            </span>
          </div>
        </div>
      </div>

      {/* ===== Ambient Glow ===== */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </footer>
  );
};

export default Footer;