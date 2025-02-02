import React from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import coffeeCeremonyImage from "../assets/images/coffee-ceremony.webp";
import humanBodyQuizImage from "../assets/images/human-body-quiz.webp";
import inventoryManagerImage from "../assets/images/inventory-manager.webp";
import randomDestinationImage from "../assets/images/random-destination.webp";
import znappedImage from "../assets/images/znapped.webp";

const Projects = () => {
  // List of Projects with their details
  const projects = [
    {
      name: "Znapped",
      description: "A full-stack social media platform built with React.js and Django REST Framework. Features include user authentication, posts, following functionality, likes, comments, direct messaging, and real-time notifications.",
      image: znappedImage,
      liveLink: "https://znapped-972f129d36da.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/znapped",
    },
    {
      name: "Inventory Manager",
      description: "A Django-based app for managing inventories, designed to promote sustainable living. Features include creating, organizing, and sharing item lists with a user-friendly interface. Each list is linked to a unique QR code for seamless sharing.",
      image: inventoryManagerImage,
      liveLink: "https://inventory-manager-milen-aa94458871b4.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/Inventory-Manager",
    },
    {
      name: "Random Destination Generator",
      description: "A Python terminal app that generates random travel destinations based on the user's continent choice. Data is retrieved via the Google Sheets API, and the app runs on the Code Institute's Heroku mock terminal.",
      image: randomDestinationImage,
      liveLink: "https://random-destination-generator-3e9ef050a262.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/random-destination",
    },
    {
      name: "Human Body Quiz",
      description: "A general knowledge quiz about the human body, built with HTML, CSS, and JavaScript. Features include multiple difficulty levels and email delivery of user scores. Designed for users curious about anatomy and self-improvement.",
      image: humanBodyQuizImage,
      liveLink: "https://milentecle.github.io/human-body-quiz/",
      repoLink: "https://github.com/MilenTecle/human-body-quiz",
    },
    {
      name: "Coffee Ceremony",
      description: "For my very first project I built a static front-end site built with HTML and CSS, introducing the Ethiopian and Eritrean coffee ceremony. Designed for coffee enthusiasts interested in exploring cultural traditions.",
      image: coffeeCeremonyImage,
      liveLink: "https://milentecle.github.io/coffee-ceremony/",
      repoLink: "https://github.com/MilenTecle/coffee-ceremony",
    },
  ];

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 1000,
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
            <ProjectCard key={index} project={project} /> // Use ProjectCard component
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default Projects;