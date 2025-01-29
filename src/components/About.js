import React from "react";
import MapComponent from "./MapComponent";
import styles from "../styles/About.module.css";
import Footer from "./Footer";
import avatar from "../assets/images/avatar1.webp";

const AboutMe = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src={avatar} alt="Milen Tecle" className={styles.avatar} />
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
          I’m Milen Tecle, a Junior Fullstack Software Developer based in Stockholm, Sweden. With over 5 years of HR experience and a passion for technology,
          I bring a unique combination of people skills and technical expertise to every project. My journey into tech is driven by a desire to create impactful,
          user-friendly solutions that solve real-world problems.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What I Do</h2>
          <p>
          I specialize in developing responsive, scalable applications using React, Django, Python, and SQL. My expertise spans front-end and back-end technologies,
          enabling me to build solutions that are efficient, user-friendly, and impactful.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Hire Me?</h2>
          <p>
          My unique blend of technical skills and human-centered thinking allows me to contribute to scalable, user-focused applications. I thrive in collaborative environments and I am
          passionate about solving complex problems through innovative solutions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Fun Facts About Me</h2>
          <ul className={styles.funFactsList}>
            <li>I have a professional background in HR, giving me unique insights into teamwork and collaboration.</li>
            <li>I enjoy working on coding challenges that allow me to build practical and functional solutions while improving my skills.</li>
            <li>When I’m not coding, you can find me spending time with my family, thinking about new ideas, or enjoying a solo trip to the store.</li>
          </ul>
        </section>
      </div>

      {/* Map Section */}
      <div className={styles.mapContainer}>
        <h3 className={styles.sectionHeading}>Where Am I?</h3>
        <MapComponent />
      </div>

      <Footer />
    </>
  );
};

export default AboutMe;