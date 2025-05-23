import React from "react";
import MapComponent from "./MapComponent";
import styles from "../styles/About.module.css";
import Footer from "./Footer";
import avatar from "../assets/images/avatar1.webp";

// AboutMe component - Displays an introduction, skills and background information
const AboutMe = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src={avatar} alt="Milen Tecle" className={styles.avatar} loading="lazy"/>
          <h1 className={styles.heroTitle}>About Me</h1>
          <p className={styles.heroSubtitle}>
            Passionate about creating solutions that bridge technology and human experiences.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2>Who Am I?</h2>
          <p>
           I’m Milen Tecle, a Junior Software Developer based in Stockholm, Sweden, transitioning from a rewarding career in HR to tech. With 5+ years of HR experience and a passion for automation, process optimization, and data-driven solutions, I bring a unique blend of people skills and technical expertise to every project. After earning a full-stack diploma and completing a certification in JavaScript Algorithms via freeCodeCamp, I’ve been expanding my backend development skills through real-world projects focused on APIs and automation.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What I Do</h2>
          <p>
           I design and build scalable, responsive applications using React, Django, Python, and SQL. My full-stack expertise allows me to develop seamless and efficient solutions, focusing on API development, process automation, and user-centric interfaces.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Hire Me?</h2>
          <p>
            I combine technical skills with human-centered problem-solving, making me an asset for teams developing HR Tech, automation tools, or data-driven platforms. I thrive in collaborative environments, enjoy solving complex problems, and am continuously sharpening my backend skills through hands-on projects and continuous learning.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Fun Facts About Me</h2>
          <ul className={styles.funFactsList}>
            <li>I have a professional background in HR, giving me unique insights into teamwork and collaboration.</li>
            <li>I prefer learning through hands-on projects where I can see the practical impact of what I build.</li>
            <li>When I’m not coding, you can find me spending time with my family, thinking about new ideas, or enjoying a solo trip to the store.</li>
          </ul>
        </section>
      </div>

      {/* Map Section: Displays a Google Map with the location */}
      <div className={styles.mapContainer}>
        <h3 className={styles.sectionHeading}>Where Am I?</h3>
        <MapComponent />
      </div>
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default AboutMe;