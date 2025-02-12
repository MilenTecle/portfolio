import React, { useState } from "react";
import styles from "../styles/Projects.module.css";

const ProjectCard = ({ project }) => {
  // State to manage the "Read More" toggle for long descriptions
  const [readMore, setReadMore] = useState(false);

  // Function to handle read more/read less state
  const handleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div className={styles.sliderItem}>
      {/* Card Container */}
      <div className={`${styles.card} shadow-sm`}>
        <img
          src={project.image}
          className={styles.cardImage}
          alt={`${project.name} screenshot`}
        />
        <div className={styles.cardBody}>
          {/* Project Title */}
          <h5 className={styles.cardTitle}>{project.name}</h5>
          {/* Project description with Read More toggle */}
          <p
            className={`${styles.cardText} ${
              readMore ? styles.expanded : ""
            }`}
          >
            {project.description}
          </p>
          {/* Read More/Show less Button, only if description is long */}
          <button
            className={styles.readMoreButton}
            onClick={handleReadMore}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
          <div className={styles.btnContainer}>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.viewLiveButton}`}
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
  );
};

export default ProjectCard;