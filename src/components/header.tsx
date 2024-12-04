"use client";

import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center h-screen text-center">
     
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-warm-peach via-warm-sand to-warm-terra animate-gradient"
      >
        PORTFOLIO
      </motion.h1>

      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-lg md:text-2xl text-warm-sand mt-4"
      >
        Crafting digital experiences with passion and precision
      </motion.p>

    
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="flex gap-6 justify-center mt-12"
      >
        {[
          { Icon: GithubIcon, href: "https://github.com" },
          { Icon: LinkedinIcon, href: "https://linkedin.com" },
          { Icon: Mail, href: "mailto:emma225h@gmail.com" },
        ].map(({ Icon, href }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-full bg-warm-peach hover:bg-warm-sand shadow-lg"
          >
            <Icon className="h-10 w-10 text-warm-terra" />
          </motion.a>
        ))}
      </motion.div>
    </header>
  );
}