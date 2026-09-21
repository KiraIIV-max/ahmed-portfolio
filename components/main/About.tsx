"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";

// ===== Stats Data =====
const stats = [
  { value: "01", label: "Software", sub: "Engineer" },
  { value: "06", label: "Featured", sub: "Projects" },
  { value: "FULL-STACK", label: "Primary", sub: "Focus" },
  { value: "CAIRO", label: "Based in", sub: "Egypt" },
];

const About = () => {
  return (
    <section
      id="about-me"
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-24 sm:py-32 px-5 sm:px-6 md:px-10 overflow-hidden z-[20]"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1200px] w-full">
        
        {/* =========================================
            الجزء العلوي: عمودين (عنوان + نص)
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          
          {/* === العمود الشمال: الليبل والعنوان === */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-[#00E5FF]" />
              <span className="text-[#00E5FF] text-xs font-mono tracking-[0.3em] uppercase">
                02 — About Me
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight">
              I build software
              <br />
              with a{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                product mindset.
              </span>
            </h2>
          </motion.div>

          {/* === العمود اليمين: النص === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-[15px] leading-relaxed pt-2"
          >
            <p>
              I&apos;m <span className="text-white font-medium">Ahmed Mohamed</span>, a
              software engineer focused on building useful digital products from
              concept to deployment. I enjoy connecting user experience, system design,
              and reliable engineering behind the scenes.
            </p>
            <p>
              My work spans <span className="text-white">frontend development</span>,{" "}
              <span className="text-white">backend APIs</span>, database design,
              Linux, networking, cloud fundamentals, and automation. I like
              understanding how each layer of a system contributes to the overall product.
            </p>
            <p>
              Currently expanding in <span className="text-[#00E5FF]">AWS</span>,{" "}
              <span className="text-[#00E5FF]">Docker</span>,{" "}
              <span className="text-[#00E5FF]">DevOps</span>, and AI automation,
              with a strong interest in building scalable, production-ready solutions.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
              <MapPinIcon className="w-4 h-4 text-[#00E5FF]" />
              <span>
                Based in <span className="text-white">Cairo, Egypt</span> — Open to junior software engineering roles and product-focused opportunities.
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            الجزء السفلي: 4 كروت إحصائيات
        ========================================= */}
        <div className="mt-24 pt-12 border-t border-[#7042f83b]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col group"
              >
                {/* الرقم / القيمة */}
                <span className="text-[#00E5FF] text-3xl md:text-4xl font-bold font-mono tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </span>
                
                {/* الليبل الأساسي */}
                <span className="text-white text-sm font-semibold mt-3 uppercase tracking-wide">
                  {stat.label}
                </span>
                
                {/* الليبل الثانوي */}
                <span className="text-gray-500 text-xs mt-1">
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;