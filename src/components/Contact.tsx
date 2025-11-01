"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="py-8 md:py-16 bg-primary-dark relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-accent-cyan/20 to-accent-green/20 p-12 md:p-16 rounded-3xl backdrop-blur-sm border border-accent-cyan/30">
            <div className="text-center space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold font-playfair"
              >
                Let&apos;s create something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-green">
                  amazing together
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-lg max-w-2xl mx-auto"
              >
                Ready to bring your project to life? I&apos;m always excited to discuss
                new ideas, collaborate on interesting projects, and explore opportunities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
              >
                <motion.a
                  href="mailto:adityamallela041@gmail.com"
                  className="w-full sm:w-auto bg-accent-cyan text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-accent-green transition-all text-lg shadow-lg shadow-accent-cyan/50 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me →
                </motion.a>
                <motion.a
                  href="https://github.com/AdityaMallela041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-all text-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View GitHub
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8 space-y-3"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    📍 L.B. Nagar, Hyderabad, India
                  </p>
                  <p className="hidden sm:block">•</p>
                  <p className="flex items-center gap-2">
                    📞 +91 8374873178
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  📧{" "}
                  <a
                    href="mailto:adityamallela041@gmail.com"
                    className="hover:text-accent-cyan transition-colors"
                  >
                    adityamallela041@gmail.com
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  Open to internships, freelance projects, and full-time opportunities
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
