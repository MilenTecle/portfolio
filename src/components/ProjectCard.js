import React, { useState } from "react";
import styles from "../styles/Projects.module.css";

const ProjectCard = ({ project }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div className={styles.sliderItem}>
      <div className={`${styles.card} shadow-sm`}>
        <img
          src={project.image}
          className={styles.cardImage}
          alt={`${project.name} screenshot`}
        />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{project.name}</h5>
          <p
            className={`${styles.cardText} ${
              readMore ? styles.expanded : ""
            }`}
          >
            {project.description}
          </p>
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
  );
};

export default ProjectCard;