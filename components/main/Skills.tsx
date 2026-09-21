"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillText from "../sub/SkillText";

// ===== استيراد الأيقونات =====
import {
  SiC, SiCplusplus, SiOpenjdk, SiJavascript, SiPhp, SiMysql, // Languages
  SiReact, SiReactrouter, SiTailwindcss, SiFramer, SiGreensock, // Frontend
  SiNodedotjs, SiExpress, SiLaravel, SiJsonwebtokens, SiAuth0, // Backend
  SiMongodb, SiPrisma, // Databases
  SiLinux, SiDocker, SiNginx, // Infra
  SiCisco, // Networking & Tools
  SiGit, SiGithub, SiPostman, // Tools
} from "react-icons/si";

import {
  FaNetworkWired, FaServer, FaCode, FaTools, FaRobot, FaLayerGroup, FaAws,
} from "react-icons/fa";

import { TbApi, TbRouter } from "react-icons/tb";
import { HiOutlineCommandLine } from "react-icons/hi2";

// ===== بيانات الفئات مع الأيقونات =====
const SkillCategories = [
  {
    id: "01",
    title: "Languages",
    icon: <FaCode className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    id: "02",
    title: "Frontend",
    icon: <FaLayerGroup className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "React.js", icon: <SiReact /> },
      { name: "React Router", icon: <SiReactrouter /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "GSAP", icon: <SiGreensock /> },
    ],
  },
  {
    id: "03",
    title: "Backend",
    icon: <FaServer className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Auth", icon: <SiAuth0 /> },
      { name: "Middleware", icon: <HiOutlineCommandLine /> },
    ],
  },
  {
    id: "04",
    title: "Databases",
    icon: <FaServer className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    id: "05",
    title: "Infrastructure & Cloud",
    icon: <FaServer className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Reverse Proxy", icon: <TbApi /> },
      { name: "GitHub Actions", icon: <SiGithub /> },
    ],
  },
  {
    id: "06",
    title: "Networking",
    icon: <FaNetworkWired className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "TCP/IP", icon: <FaNetworkWired /> },
      { name: "OSI Model", icon: <FaLayerGroup /> },
      { name: "IPv4", icon: <TbRouter /> },
      { name: "IPv6", icon: <TbRouter /> },
      { name: "VLANs", icon: <TbRouter /> },
      { name: "Routing", icon: <TbRouter /> },
      { name: "Switching", icon: <TbRouter /> },
      { name: "DHCP", icon: <FaNetworkWired /> },
      { name: "DNS", icon: <FaNetworkWired /> },
      { name: "NAT", icon: <FaNetworkWired /> },
      { name: "HSRP", icon: <FaNetworkWired /> },
      { name: "LACP", icon: <FaNetworkWired /> },
    ],
  },
  {
    id: "07",
    title: "Automation",
    icon: <FaRobot className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "n8n", icon: <FaRobot /> },
      { name: "AI Automation", icon: <FaRobot /> },
      { name: "Workflow Design", icon: <FaLayerGroup /> },
      { name: "API Integration", icon: <TbApi /> },
    ],
  },
  {
    id: "08",
    title: "Tools",
    icon: <FaTools className="text-[#00E5FF] w-6 h-6" />,
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Cisco Packet Tracer", icon: <SiCisco /> },
      { name: "GNS3", icon: <FaNetworkWired /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-5 sm:px-6 md:px-10 z-[20]"
    >
      <SkillText />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] w-full mt-10">
        {SkillCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col border border-[#7042f83b] bg-[#0300145e] backdrop-blur-sm rounded-xl p-6 hover:border-[#00E5FF] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#00E5FF10] border border-[#00E5FF30]">
                {cat.icon}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00E5FF] text-sm font-mono">{cat.id}</span>
                <span className="text-gray-500 text-sm">—</span>
                <h3 className="text-white font-bold text-lg group-hover:text-[#00E5FF] transition-colors">
                  {cat.title}
                </h3>
              </div>
            </div>

            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-1.5 text-gray-300 text-xs bg-[#7042f815] border border-[#7042f840] px-3 py-1 rounded-full hover:bg-[#00E5FF15] hover:border-[#00E5FF50] hover:text-white transition-all"
                >
                  <span className="text-[#00E5FF] text-sm">{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="w-full h-full absolute top-0 left-0 -z-10">
        <div className="w-full h-full opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            aria-hidden="true"
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;