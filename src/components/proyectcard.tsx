"use client";

import { Project } from "@/lib/Project";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

function ProjectCard({ title, description, technologies, imageUrl, link }: Project) {
  return (
    <div className="group relative overflow-hidden rounded bg-card border ">
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
        <p className="text-muted-foreground">{description}</p>
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
        <div className="flex gap-4">
          <a
            href={link}
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
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