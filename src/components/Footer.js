import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
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
      <div className={styles.contactSection}>
        <p>
          Contact me:{" "}
          <a href="mailto:milen.tecle@gmail.com" className={styles.contactLink}>
          milen.tecle@gmail.com
          </a>{" "}
          or{" "}
          <a href="/contact" className={styles.contactLink}>
            fill out the form
          </a>
        </p>
      </div>
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Milen Tecle. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;