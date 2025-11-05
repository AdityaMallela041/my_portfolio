"use client";

import { motion } from "framer-motion";

const Hero = () => {
  // Replace with your Google Drive File ID
  const RESUME_DOWNLOAD_LINK = "https://drive.google.com/file/d/18J_mm62PpzxdQHrmkHxB0PSVHzroOOsF/view?usp=sharing";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-accent-cyan to-accent-purple rounded-2xl flex items-center justify-center">
              <span className="text-4xl md:text-5xl">👨‍💻</span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-cyan text-sm md:text-base mb-4 flex items-center justify-center gap-2"
          >
            <span className="inline-block w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
            Available for opportunities
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair"
          >
            Building Intelligent
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-green">
              Digital Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            B.Tech in CSE (AI & ML) student at VBIT with expertise in Full-stack Development,
            AI/ML, and ServiceNow. ServiceNow Hackathon 2025 Top 50 Finalist.
            Building intelligent solutions with Python, React, and cutting-edge AI technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto bg-transparent border-2 border-accent-cyan text-accent-cyan px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            <motion.a
              href={RESUME_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent-cyan text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-accent-green transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
