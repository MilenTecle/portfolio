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
        <h1 className={styles.heroTitle}>Hey, I'm Milen Tecle</h1>
        <p className={styles.heroSubtitle}>
          A Full Stack Developer passionate about building amazing applications.
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