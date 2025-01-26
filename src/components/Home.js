import React, { useEffect } from "react";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  useEffect(() => {
    document.body.classList.add(styles.homeBody);

    return () => {
      document.body.classList.remove(styles.homeBody);
    };
  }, []);

  return (
    <>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Hi, I'm Milen Tecle</h1>
        <p className={`${styles.heroSubtitle} mb-5 `}>
          A Junior Fullstack Software Developer with a passion for building user-friendly and efficient applications.
          Explore my projects below!
        </p>
        <a href="/projects" className={styles.btnPrimary}>
          View Projects
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Home;