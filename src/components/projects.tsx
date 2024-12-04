"use client";

import { Project } from "@/lib/Project";
import ProjectCard from "./proyectcard";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    id: 1,
    title: "Tech Store",
    description: "A modern e-commerce platform built with Next.js and TypeScript",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    imageUrl: "/Fotos/techstore.png",
    link: ""
  },
  {
    id: 2,
    title: "Club Fellini Bar",
    description: "A collaborative task management application with real-time updates",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"],
    imageUrl: "/Fotos/felini_1.png",
    link: ""
  },
  {
    id: 3,
    title: "Patitas Felices",
    description: "An AI-powered content generation tool using OpenAI's GPT-3",
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
    imageUrl: "/Fotos/PatitasFelices.png",
    link: ""
  }
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-10"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-warm-peach via-warm-sand to-black animate-gradient">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of recent projects showcasing diverse skills in
          web development.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
export default Projects;