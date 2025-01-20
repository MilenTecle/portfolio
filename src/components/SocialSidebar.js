import React from "react";
import styles from "../styles/SocialSidebar.module.css";

const SocialSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a
        href="https://github.com/MilenTecle"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/milen-tecle/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100079091220124"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="/cv-milen-tecle.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <i className="fa fa-download"></i>
      </a>
    </div>
  );
};

export default SocialSidebar;