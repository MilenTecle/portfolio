import React from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import GitHubInfo from "./GitHubInfo";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import coffeeCeremonyImage from "../assets/images/coffee-ceremony.png";
import humanBodyQuizImage from "../assets/images/human-body-quiz.png";
import inventoryManagerImage from "../assets/images/inventory-manager.png";
import randomDestinationImage from "../assets/images/random-destination.png";
import znappedImage from "../assets/images/znapped.png";

const Projects = () => {
  const projects = [
    {
      name: "Znapped",
      description: "Znapped is a social media application built using React.js for the frontend and Django REST Framework for the backend. It allows users to create posts, follow other users, like and comment on posts, send direct messages and manage notifications.",
      image: znappedImage,
      liveLink: "https://znapped-972f129d36da.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/znapped",
    },
    {
      name: "Inventory Manager",
      description: "The Inventory Manager app is built using Django. It is designed to help users efficiently manage their inventories and promote sustainable living. The Inventory Manager app provides a user-friendly interface for creating, organizing and sharing lists of items. Each list is associated with a unique QR code for easy access and sharing.",
      image: inventoryManagerImage,
      liveLink: "https://inventory-manager-milen-aa94458871b4.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/Inventory-Manager",
    },
    {
      name: "Random Destination Generator",
      description: "Random Destination Generator is a Python terminal application. The application runs in the Code Institute mock terminal on Heroku. The user will get a random destination presented based on their choice of continent. The data is retrieved from a spreadsheet using Google Sheets API.",
      image: randomDestinationImage,
      liveLink: "https://random-destination-generator-3e9ef050a262.herokuapp.com/",
      repoLink: "https://github.com/MilenTecle/random-destination",
    },
    {
      name: "Human Body Quiz",
      description: "The Human Body Quiz is a general knowledge quiz about the human body. The languages used to build the quiz were HTML, CSS and Javascript. The quiz offers three different levels and the user can get the scores sent to their email. The quiz is for everyone, for those curious about their general knowledge about the human body and for those wanting to improve their knowledge.",
      image: humanBodyQuizImage,
      liveLink: "https://milentecle.github.io/human-body-quiz/",
      repoLink: "https://github.com/MilenTecle/human-body-quiz",
    },
    {
      name: "Coffee Ceremony",
      description: "For my very first project I built a static front-end site using HTML and CSS. Coffee ceremony is a website intended for coffee lovers and coffee drinkers with a curiosity and interest in other traditions and cultures. Coffee ceremony will introduce the coffee ceremony of Ethiopia and Eritrea.",
      image: coffeeCeremonyImage,
      liveLink: "https://milentecle.github.io/coffee-ceremony/",
      repoLink: "https://github.com/MilenTecle/coffee-ceremony",
    },
  ];

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