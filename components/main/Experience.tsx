"use client";

import React from "react";
import { motion } from "framer-motion";

// ===== بيانات الخبرات =====
const experiences = [
  {
    id: "01",
    title: "Frontend & Full-Stack Development Intern",
    company: "Sqrock IT Solutions",
    date: "2026 · Internship",
    location: "Cairo, Egypt",
    badge: "Internship",
    featured: true,
    description:
      "Built responsive interfaces and interactive product experiences for real web applications, translating designs and user flows into reusable React components.",
    sections: [
      { label: "Selected Work", content: "DRIVEON · NOIRÉ · EVENTRA" },
      {
        label: "Technologies",
        content: "React · Tailwind · GSAP · React Router",
      },
    ],
  },
  {
    id: "02",
    title: "AWS Cloud Practitioner",
    company: "NetPoints",
    date: "2026 · Training",
    badge: "Training",
    description:
      "Cloud-focused training covering AWS fundamentals and modern cloud infrastructure.",
    sections: [
      {
        label: "Focus",
        content: "AWS · IAM · Networking · Security · Compute",
      },
    ],
  },
  {
    id: "03",
    title: "AI Automation & n8n",
    company: "DEPI",
    date: "2026 · Training",
    badge: "Training",
    description:
      "Technical training focused on workflow automation, AI-powered systems, and API-based integrations.",
    sections: [
      {
        label: "Focus",
        content: "n8n · AI Automation · Workflow Design · APIs",
      },
    ],
  },
  {
    id: "04",
    title: "CCNA Training",
    company: "Cisco Networking Training",
    date: "2026 · Training",
    badge: "Certification",
    description:
      "Hands-on networking training covering network fundamentals, routing, and switching.",
    sections: [
      {
        label: "Focus",
        content: "TCP/IP · VLANs · Routing · Switching · DNS · NAT",
      },
    ],
  },
  {
    id: "05",
    title: "Machine Learning Training",
    company: "IEEE",
    date: "36 hours · Training",
    badge: "Training",
    description:
      "Technical training introducing machine learning concepts and practical approaches to building ML systems.",
    sections: [
      {
        label: "Focus",
        content: "ML · Data Fundamentals · Model Concepts",
      },
    ],
  },
  {
    id: "06",
    title: "Communication & Leadership",
    company: "NTI — National Telecommunication Institute",
    date: "2026 · Training",
    badge: "Professional Development",
    description:
      "Professional development training focused on communication, teamwork, leadership, and workplace collaboration.",
    sections: [
      {
        label: "Focus",
        content: "Communication · Leadership · Teamwork · Collaboration",
      },
    ],
  },
];

// ===== مكون الكارت =====
const ExpCard = ({
  exp,
  className = "",
  size = "md",
}: {
  exp: (typeof experiences)[0];
  className?: string;
  size?: "lg" | "md" | "sm";
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0d0a1f]/60 to-[#030014]/60 backdrop-blur-sm overflow-hidden hover:border-[#00E5FF]/50 transition-all duration-500 p-6 md:p-8 ${className}`}
    >
      {/* Ambient Glow للكارت الكبير */}
      {exp.featured && (
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />
      )}

      <div className="relative flex flex-col h-full">
        {/* Top: Number + Badge */}
        <div className="flex items-start justify-between mb-6">
          <span
            className={`font-mono font-bold leading-none ${
              size === "lg"
                ? "text-6xl md:text-7xl text-[#00E5FF]"
                : size === "md"
                  ? "text-4xl md:text-5xl text-white/30 group-hover:text-[#00E5FF] transition-colors duration-500"
                  : "text-3xl md:text-4xl text-white/30 group-hover:text-[#00E5FF] transition-colors duration-500"
            }`}
          >
            {exp.id}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase border whitespace-nowrap ${
              exp.featured
                ? "border-[#00E5FF]/50 text-[#00E5FF] bg-[#00E5FF]/10"
                : "border-white/10 text-gray-400 bg-white/[0.03]"
            }`}
          >
            {exp.badge}
          </span>
        </div>

        {/* Middle: Content */}
        <div className="flex-1">
          <h3
            className={`font-bold text-white tracking-tight group-hover:text-[#00E5FF] transition-colors duration-500 leading-tight ${
              size === "lg"
                ? "text-3xl md:text-4xl"
                : size === "md"
                  ? "text-xl md:text-2xl"
                  : "text-lg md:text-xl"
            }`}
          >
            {exp.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2 text-xs">
            <span className="text-[#00E5FF]/80 font-medium">{exp.company}</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500 font-mono">{exp.date}</span>
            {exp.location && (
              <>
                <span className="text-gray-600">·</span>
                <span className="text-gray-500 font-mono">{exp.location}</span>
              </>
            )}
          </div>

          {/* Description - تظهر فقط في الكروت الكبيرة */}
          {size !== "sm" && (
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              {exp.description}
            </p>
          )}

          {/* Sections */}
          <div className={`mt-5 ${size === "lg" ? "space-y-4" : "space-y-3"}`}>
            {exp.sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">
                  {section.label}
                </span>
                <p
                  className={`text-gray-300 leading-relaxed ${
                    size === "lg"
                      ? "text-sm md:text-[15px]"
                      : "text-xs md:text-[13px]"
                  }`}
                >
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-24 sm:py-32 px-5 sm:px-6 md:px-10 overflow-hidden z-[20]"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* ===== Header ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#00E5FF]" />
            <span className="text-[#00E5FF] text-xs font-mono tracking-[0.3em] uppercase">
              05 — Experience & Training
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Learning fast,
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                building with intent.
              </span>
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed lg:pb-3">
              Practical experience and focused training across software engineering, cloud, networking, automation, and professional development.
            </p>
          </div>
        </div>

        {/* ===== Asymmetric Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          
          {/* 01 — Sqrock (Big - Left) */}
          <div className="md:col-span-7 md:row-span-2">
            <ExpCard exp={experiences[0]} size="lg" className="h-full min-h-[420px] md:min-h-[500px]" />
          </div>

          {/* 02 — AWS (Small - Right Top) */}
          <div className="md:col-span-5">
            <ExpCard exp={experiences[1]} size="md" className="h-full" />
          </div>

          {/* 03 — AI Automation (Small - Right Bottom) */}
          <div className="md:col-span-5">
            <ExpCard exp={experiences[2]} size="md" className="h-full" />
          </div>

          {/* 04 — CCNA (Medium - Left) */}
          <div className="md:col-span-5">
            <ExpCard exp={experiences[3]} size="md" className="h-full" />
          </div>

          {/* 05 — ML (Small - Right) */}
          <div className="md:col-span-4">
            <ExpCard exp={experiences[4]} size="sm" className="h-full" />
          </div>

          {/* Spacer لإكمال الصف (اختياري) */}
          <div className="hidden md:block md:col-span-3" />

          {/* 06 — NTI (Wide - Bottom) */}
          <div className="md:col-span-12">
            <ExpCard exp={experiences[5]} size="md" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;