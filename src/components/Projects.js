import React from "react";
import Slider from "react-slick";
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

  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable navigation arrows
  };

  return (
    <>
      {/* Projects Section with Slider */}
      <div className="container">
        <h2 className={styles.projectsHeading}>My Projects</h2>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.sliderItem}`}>
              <div className={`${styles.card} shadow-sm`}>
                <img
                  src={project.image}
                  className={styles.cardImage}
                  alt={`${project.name} screenshot`}
                />
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{project.name}</h5>
                  <p className={styles.cardText}>{project.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-primary ${styles.viewLiveButton}`}
                    >
                      View Live
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-secondary ${styles.repoButton}`}
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* GitHubInfo Section */}
      <div className="container">
        <div className="github-section mb-5 mt-5">
          <h3>Explore More Repositories</h3>
          <GitHubInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;