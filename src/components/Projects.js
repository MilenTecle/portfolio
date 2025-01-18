import React from "react";
import Footer from "./Footer";

const Projects = () => {
  const projects = [
    {
      name: "GitHub Search Tool",
      description: "A tool to search and view GitHub repositories.",
      link: "https://github.com/MilenTecle/github-search",
    },
    {
      name: "Portfolio Website",
      description: "A modern portfolio showcasing my work.",
      link: "https://github.com/MilenTecle/portfolio",
    },
  ];

  return (
    <>
    <div className="container">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description} (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            )
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default Projects;