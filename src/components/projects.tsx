"use client";

import { Project } from "@/lib/Project";
import ProjectCard from "./proyectcard";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    id: 1,
    title: "Tech Store",
    description: "A modern e-commerce platform built with Next.js and TypeScript",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS" ],
    imageUrl: "/Fotos/techstore.png",
    link: "",
    githubLink: "https://github.com/EHermanIrastorza/EcommerceTech",
  },
  {
    id: 2,
    title: "Club Fellini Bar",
    description: "A dynamic bar management app built collaboratively, featuring real-time updates for seamless operations and a modern touch!",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","ChartJS"],
    imageUrl: "/Fotos/felini_1.png",
    link: "https://final-project-blush-gamma.vercel.app",
    githubLink: "https://github.com/agustinMontoya2/Final-Project",
  },
  {
    id: 3,
    title: "Patitas Felices",
    description: "An intuitive and beautifully designed pet grooming app that makes checking in your furry friends a breeze. Effortlessly book appointments for your pets and give them the care they deserve all in just a few taps!",
    technologies: ["React", "Node.js", "Css", "PostgreSQL", "Redux"],
    imageUrl: "/Fotos/PatitasFelices.png",
    link: "https://patitas-felicesweb-git-main-emmanuels-projects-002db911.vercel.app",
    githubLink: "https://github.com/EHermanIrastorza/Patitas-Felices"
  }
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-10"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-warm-peach via-warm-sand to-black animate-gradient">
          Projects
        </h2>
        <p className="text-muted-foreground italic">
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
            className="overflow-hidden shadow-lg bg-warm-cream rounded-2xl"
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
