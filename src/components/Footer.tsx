"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/AdityaMallela041",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/aditya-mallela-055809258",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:adityamallela041@gmail.com",
    },
    {
      name: "Phone",
      icon: FaPhone,
      url: "tel:+918374873178",
    },
  ];

  return (
    <footer className="bg-primary-darker border-t border-accent-cyan/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            <span className="text-accent-cyan">&lt;</span>
            Aditya
            <span className="text-accent-cyan">/&gt;</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-cyan transition-colors text-2xl"
                whileHover={{ scale: 1.2, rotate: 5 }}
                aria-label={link.name}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a
              href="#home"
              className="text-gray-400 hover:text-accent-cyan transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-accent-cyan transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-accent-cyan transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-accent-cyan transition-colors"
            >
              Contact
            </a>
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-gray-500 pt-8 border-t border-accent-cyan/10 w-full"
          >
            <p>© {currentYear} MSV Aditya Phani Kumar. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
