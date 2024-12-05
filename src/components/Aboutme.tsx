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
        className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0" 
      >
     
        <div className="sm:w-1/2 sm:pl-16 text-center space-y-6 px-4">
          <h2 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-warm-peach via-warm-sand to-black animate-gradient">
            About Me
          </h2>

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
              className="text-sm sm:text-lg text-gray-600 leading-snug sm:leading-relaxed italic"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I am a FullStack Developer specialized in Front-End, ready to boost your digital presence.
              With solid experience in key technologies such as HTML, CSS, TypeScript, JavaScript, React, NextJs, Express, SQL, and development tools like GitHub, Git, and ChartJs, I focus on transforming ideas into dynamic and functional web solutions.
              My goal is to create intuitive, high-performance experiences, solving development challenges with creativity and efficiency.
              If you’re looking for someone who can deliver innovative solutions and a range of personalized proposals to help you achieve your goals, I’m here to make it happen.
            </motion.p>
            <motion.p
              className="text-sm sm:text-lg text-gray-600 leading-snug sm:leading-relaxed italic"
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
          className="hidden sm:block border-4 rounded-full overflow-hidden shadow-xl mx-auto border-warm-sand"
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