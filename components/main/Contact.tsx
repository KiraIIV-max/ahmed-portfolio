"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const gmailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmoh01500@gmail.com&su=Project%20Inquiry&body=Hi%20Ahmed%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks!";

// ===== بيانات الاتصال =====
const contactInfo = [
  {
    label: "Email",
    value: "ahmedmoh01500@gmail.com",
    href: gmailLink,
    icon: <Mail className="w-3.5 h-3.5 text-[#00E5FF]" />,
  },
  {
    label: "GitHub",
    value: "KiraIIV-max",
    href: "https://github.com/KiraIIV-max",
    icon: <FaGithub className="w-3.5 h-3.5 text-[#00E5FF]" />,
  },
  {
    label: "LinkedIn",
    value: "Ahmed Mohamed",
    href: "https://www.linkedin.com/in/ahmed-mohamed-1012a6353",
    icon: <FaLinkedin className="w-3.5 h-3.5 text-[#00E5FF]" />,
  },
  {
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
    icon: <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center py-24 sm:py-32 px-5 sm:px-6 md:px-10 overflow-hidden z-[20]"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* ===== Main Card ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0d0a1f]/60 to-[#030014]/60 backdrop-blur-sm overflow-hidden"
        >
          
          {/* ===== Top Section: CTA ===== */}
          <div className="relative p-8 md:p-16">
            
            {/* Header Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-[#00E5FF]" />
              <span className="text-[#00E5FF] text-xs font-mono tracking-[0.3em] uppercase">
                07 — Contact
              </span>
            </div>

            {/* Big Headline */}
            <h2 className="text-[40px] sm:text-[52px] md:text-[72px] font-bold text-white leading-[1.05] tracking-tight max-w-[700px]">
              Looking for a
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                software engineer?
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-[16px] md:text-[18px] leading-relaxed mt-8 max-w-[600px]">
              I enjoy solving product problems with clean engineering, good UX, and practical systems thinking. If you&apos;re hiring for a junior to early-career developer, product-minded engineer, or technical collaborator, I&apos;d love to connect.
            </p>

            {/* ===== CTA Button — Gradient on Hover ===== */}
            <motion.a
              href={`mailto:ahmedmoh01500@gmail.com?subject=Project%20Inquiry`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-500 hover:border-transparent hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5FF] md:text-base"
            >
              {/* Gradient Background Layer (بيظهر عند الـ Hover) */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />

              {/* Content (فوق الـ Gradient) */}
              <span className="relative z-10">Get in Touch</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>

          {/* ===== Divider ===== */}
          <div className="h-[1px] w-full bg-white/[0.08]" />

          {/* ===== Bottom Section: Metadata ===== */}
          <div className="relative p-8 md:p-16">
            
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {contactInfo.map((info, index) => {
                const Wrapper = info.href ? "a" : "div";
                const linkProps = info.href
                  ? {
                      href: info.href,
                      target: "_blank" as const,
                      rel: "noopener noreferrer" as const,
                    }
                  : undefined;

                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <Wrapper
                      {...(linkProps ?? {})}
                      className={`group flex flex-col gap-2 ${
                        info.href ? "cursor-pointer" : ""
                      }`}
                    >
                      {/* Label + Icon */}
                      <div className="flex items-center gap-2">
                        {info.icon}
                        <span className="text-gray-500 text-[11px] font-mono tracking-widest uppercase">
                          {info.label}
                        </span>
                      </div>

                      {/* Value */}
                      <span
                        className={`text-white text-base md:text-lg font-medium transition-colors duration-300 ${
                          info.href ? "group-hover:text-[#00E5FF]" : ""
                        }`}
                      >
                        {info.value}
                      </span>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* ===== Footer Row ===== */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-16 pt-8 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]" />
                </span>
                <span className="text-gray-400 text-xs font-mono tracking-wider uppercase">
                  Available for opportunities
                </span>
              </div>

              <span className="text-gray-600 text-xs font-mono tracking-wider uppercase">
                Cairo, Egypt · 2026
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;