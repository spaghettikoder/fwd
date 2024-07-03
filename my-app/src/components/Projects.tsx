import React from "react";

interface ProjectsProps {
  title: string;
  projects: string[];
}

export default function Projects({ title, projects }: ProjectsProps) {
  return (
    <div className="lists">
      <h1>{title}</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}