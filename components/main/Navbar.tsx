"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about-me" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10">
      <div className="w-full min-h-[65px] flex flex-row items-center justify-between m-auto">
        
        <div className="flex-1 flex justify-start">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image src="/logo2.svg" alt="Ahmed Mohamed logo" width={56} height={56} className="cursor-pointer hover:animate-slowspin" />
            <span className="font-semibold ml-2 hidden sm:block text-white tracking-[0.2em] uppercase text-sm">
              Ahmed
            </span>
          </a>
        </div>

        <nav className="hidden lg:flex flex-1 justify-center">
          <div className="flex items-center justify-between w-full max-w-[560px] border border-[#7042f861] bg-[#0300145e] px-5 py-2.5 rounded-full text-sm text-gray-200">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="cursor-pointer hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex flex-1 justify-end items-center gap-3 sm:gap-5">
          <a
            href="/Ahmed_Mohamed_CV (4).pdf"
            download="Ahmed-Mohamed-CV.pdf"
            className="hidden sm:inline-flex px-4 lg:px-5 py-2 rounded-full border border-[#7042f861] bg-[#0300145e] text-gray-200 hover:bg-[#7042f861] hover:text-white transition-all duration-300 cursor-pointer text-sm font-medium"
          >
            Download CV
          </a>

          <div className="hidden sm:flex items-center gap-4">
            {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-[#7042f861] bg-[#0300145e] p-2 text-gray-200 hover:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="lg:hidden pb-4">
          <div className="flex flex-col gap-1 rounded-2xl border border-[#7042f861] bg-[#030014e8] p-3 text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm hover:bg-[#7042f861] hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Ahmed_Mohamed_CV (4).pdf"
              download="Ahmed-Mohamed-CV.pdf"
              className="mt-2 rounded-xl border border-[#7042f861] px-4 py-3 text-center text-sm font-medium text-gray-200 hover:bg-[#7042f861] hover:text-white"
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;