import React from "react";
import Footer from "./Footer";
import GitHubInfo from "./GitHubInfo";
import styles from "../styles/Projects.module.css";
import coffeeCeremonyImage from "../assets/images/coffee-ceremony.png";
import humanBodyQuizImage from "../assets/images/human-body-quiz.png";
import inventoryManagerImage from "../assets/images/inventory-manager.png";
import randomDestinationImage from "../assets/images/random-destination.png";
import znappedImage from "../assets/images/znapped.png";

const Projects = () => {
  const projects = [
    {
      name: "Znapped",
      description: "A tool to search and view GitHub repositories.",
      image: znappedImage,
      liveLink: "https://znapped-972f129d36da.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/znapped",
    },
    {
      name: "Inventory Manager",
      description: "A modern portfolio showcasing my work.",
      image: inventoryManagerImage,
      liveLink: "https://inventory-manager-milen-aa94458871b4.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/Inventory-Manager",

    },
    {
      name: "Random Destination Generator",
      description: "A modern portfolio showcasing my work.",
      image: randomDestinationImage,
      liveLink: "https://random-destination-generator-3e9ef050a262.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/random-destination",

    },
    {
      name: "Human Body Quiz",
      description: "A modern portfolio showcasing my work.",
      image: humanBodyQuizImage,
      liveLink: "https://milentecle.github.io/human-body-quiz/",
      repoLink: "https://github.com/MilenTecle/human-body-quiz",

    },
    {
      name: "Coffee Ceremony",
      description: "A modern portfolio showcasing my work.",
      image: coffeeCeremonyImage,
      liveLink: "https://github.com/MilenTecle/human-body-quiz",
      repoLink: "https://github.com/MilenTecle/coffee-ceremony",

    },
  ];

  return (
    <>
      <div className="container">
        <h2>My Projects</h2>
        <br></br>

        {/* Curated Projects */}
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 d-flex" key={index}>
              <div className="card mb-4 shadow-sm flex-column">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={`${project.name} screenshot`}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Live
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHubInfo Section */}
        <div className="github-section">
          <h3>Explore More Repositories</h3>
          <GitHubInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;