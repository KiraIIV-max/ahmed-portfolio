"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      
      {/* Badge العلوي */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          03 — Technical Stack
        </h1>
      </motion.div>

      {/* العنوان الرئيسي */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] text-white font-bold mt-[10px] text-center mb-[15px]"
      >
        Tools I Build With.
      </motion.div>

      {/* الوصف */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[16px] text-gray-400 mb-10 mt-[10px] text-center max-w-[700px]"
      >
        A practical toolkit covering application development, backend
        engineering, infrastructure, networking, and automation.
      </motion.div>
    </div>
  );
};

export default SkillText;