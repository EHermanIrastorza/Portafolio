"use client";

import { Project } from "@/lib/Project";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

function ProjectCard({ title, description, technologies, imageUrl, link, githubLink }: Project) {
  return (
    <div className="group relative overflow-hidden bg-card">
      <div className="aspect-video overflow-hidden">
      <Image
          src={imageUrl}
          alt={title}
          width={500}  
          height={300}
          className="w-full h-auto object-cover "
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground italic">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 flex-row justify-around items-center ">
          <a
            href={link}
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors border bg-warm-peach rounded-xl p-2"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={githubLink}
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors border bg-warm-peach rounded-xl p-2"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard