import React from "react";
import MapComponent from "./MapComponent";
import styles from "../styles/About.module.css";
import Footer from "./Footer";
import avatar from "../assets/images/avatar1.jpg";

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
            I'm Milen Tecle, a Full Stack Developer based in Sundbyberg, Stockholm, Sweden.
            With a professional background in HR and a strong foundation in technology, I bring a unique blend of
            people skills and technical expertise to every project I work on.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What I Do</h2>
          <p>
            I specialize in building responsive, user-friendly applications with a focus on front-end and back-end technologies.
            My toolkit includes technologies like React, Django, Python, and SQL, which I use to develop innovative solutions that
            make a real impact.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Hire Me?</h2>
          <p>
            With my combination of technical skills and human-centered thinking, I can help teams build scalable, user-friendly,
            and accessible applications. I am passionate about learning, collaborating, and creating solutions that solve real-world problems.
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