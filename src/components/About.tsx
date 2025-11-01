"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiGit,
  SiGithub,
} from "react-icons/si";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toolbox = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Flask", icon: SiFlask, color: "#000000" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  const interests = [
    "AI/ML Research",
    "LangChain & LLMs",
    "ServiceNow Development",
    "Backend Architecture",
    "NLP & Data Science",
    "Cloud Computing",
    "API Development",
    "Hackathons",
  ];

  const certifications = [
    "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    "ServiceNow Certified System Administrator (CSA)",
    "ServiceNow Certified Application Developer (CAD)",
    "Zscaler Zero Trust Associate (ZTCA)",
  ];

  const achievements = [
    "ServiceNow Hackathon 2025 - Top 50 Nationwide",
    "InnovateX: IBM Hackathon 2025 - Finalist",
  ];

  return (
    <section
      id="about"
      className="py-8 md:py-16 bg-primary-darker relative"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm md:text-base mb-3 uppercase tracking-wider">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">
            A Glimpse Into My World
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn more about who I am, what I do, and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary-navy p-8 rounded-2xl border border-accent-cyan/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🚀</span>
              <h3 className="text-2xl font-bold">My Journey</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Started my tech journey with a passion for solving real-world problems using AI and full-stack development. Currently building intelligent applications and exploring the intersection of LLMs and cloud technologies.
              </p>
              <div className="pt-4 border-t border-accent-cyan/20">
                <p className="text-sm text-accent-cyan font-semibold mb-2">Currently Focused On:</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>✓ Building AI-powered applications</li>
                  <li>✓ Cloud infrastructure & scalability</li>
                  <li>✓ Full-stack solutions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* My Toolbox */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-navy p-8 rounded-2xl border border-accent-cyan/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🛠️</span>
              <h3 className="text-2xl font-bold">My Toolbox</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Technologies I use to build intelligent solutions.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {toolbox.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="aspect-square bg-primary-dark rounded-xl flex items-center justify-center hover:bg-accent-cyan/10 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  title={tool.name}
                >
                  <tool.icon
                    className="text-2xl text-gray-400 group-hover:text-accent-cyan transition-colors"
                    style={{ color: tool.color }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Beyond the Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-navy p-8 rounded-2xl border border-accent-cyan/20 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚡</span>
              <h3 className="text-2xl font-bold">Beyond the Code</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              When I&apos;m not coding, you&apos;ll find me exploring:
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="px-4 py-2 bg-primary-dark text-accent-cyan text-sm rounded-full border border-accent-cyan/30 hover:bg-accent-cyan hover:text-primary-dark transition-all cursor-pointer"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-primary-navy p-8 rounded-2xl border border-accent-cyan/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🎓</span>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-primary-dark rounded-lg"
              >
                <span className="text-accent-green text-xl mt-0.5">✓</span>
                <span className="text-gray-300 text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 p-8 rounded-2xl border border-accent-cyan/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏆</span>
            <h3 className="text-2xl font-bold">Achievements & Highlights</h3>
          </div>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-primary-navy/50 rounded-lg border border-accent-cyan/20"
              >
                <span className="text-accent-green text-xl mt-0.5">⭐</span>
                <div>
                  <p className="text-gray-300 text-sm font-semibold">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-primary-navy p-8 rounded-2xl border border-accent-cyan/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">💼</span>
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-accent-cyan mb-2">
                Web Developer — IETE ISF VBIT
              </h4>
              <p className="text-gray-500 text-sm mb-3">Sep 2024 - Mar 2025 | Hyderabad</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-green mt-1">•</span>
                  Revamped the IETE-ISF forum platform with modern UI/UX and responsive design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green mt-1">•</span>
                  Improved navigation and accessibility for 150+ users
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green mt-1">•</span>
                  Reduced maintenance overhead by 20% through streamlined backend workflows
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
