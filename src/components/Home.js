import React, { useEffect } from "react";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  // Apply home page background style to the body when the component mounts
  useEffect(() => {
    // Add a class to the body for styling
    document.body.classList.add(styles.homeBody);

    return () => {
      // Clean up by removing the class on onmount
      document.body.classList.remove(styles.homeBody);
    };
  }, []);

  return (
    <>
    {/* Home Page Wrapper */}
      <div className={styles.homeWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.mainContent}>
            <h1 className={styles.heroTitle}>Hi, I'm Milen Tecle</h1>
            <p className={`${styles.heroSubtitle} mb-5`}>
              A Junior Full Stack Software Developer with a passion for building user-friendly and efficient applications.
              Explore my projects below!
            </p>
            <a href="/projects" className={styles.btnPrimary}>
              View Projects
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;