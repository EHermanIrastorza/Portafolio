"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="py-10 h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-row  items-center"
      >
       
        <div className="pl-16 text-center space-y-6 px-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-warm-peach via-warm-sand to-black animate-gradient">About Me</h2>
          
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I’m passionate about crafting digital experiences and solving
              complex problems with code.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Whether it’s web development, software engineering, or learning new
              technologies, I strive to create impactful solutions.
            </motion.p>
          </motion.div>
        </div>

      
        <motion.div
          className="border-4 rounded-full overflow-hidden shadow-xl mx-auto border-warm-sand"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative h-[450px] w-[300px]">
            <Image
              src="/Fotos/Fotomia.png"
              alt="My profile"
              fill
              className="object-cover"
              style={{ objectPosition: "top" }} 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;