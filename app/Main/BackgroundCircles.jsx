"use client";

import { motion } from "framer-motion";

// [] is a just in time complier for custom values
export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        delay: 1,
        duration: 2.5,
      }}
      className="hidden md:flex justify-center items-center -z-50"
    >
      <div className=" absolute border border-[#014f86] rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      {/* <div className=" absolute border border-[#014f86] rounded-full h-[300px] w-[300px] mt-52 " /> */}
      {/* <div className="absolute border border-black w-[20px] mt-52 animate-spin-slow" /> */}

      <div className=" absolute border border-[#014f86] rounded-full h-[500px] w-[500px] mt-52 opacity-20 " />
      <div className=" absolute border border-[#014f86] rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse" />
      <div className=" absolute border border-[#014f86] rounded-full h-[800px] w-[800px] mt-52 opacity-20 animate-pulse" />
    </motion.div>
  );
}
