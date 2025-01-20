import React from "react";
import MapComponent from "./MapComponent";
import styles from "../styles/About.module.css";
import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className={styles.profileCard}>
              <img src={avatar} alt="Milen Tecle" className={styles.avatar} />
              <h3>Milen Tecle</h3>
              <p>Full Stack Developer Student</p>
              <p><strong>Address:</strong> Sundbyberg, Stockholm, Sweden</p>
              <p><strong>Email:</strong> milen.tecle@gmail.com</p>
            </div>
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p>
              Hi, I'm Milen Tecle, a dedicated HR professional transitioning into
              the exciting world of technology as a Full Stack Developer.
            </p>
            <div className={styles.aboutSections}>
              <div>
                <h4>What Do I Do?</h4>
                <p>Full Stack Developer Student mastering front-end and back-end.</p>
              </div>
              <div>
                <h4>Why Hire Me?</h4>
                <p>
                  My unique blend of HR expertise and tech skills makes me an asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapContainer}>
        <h3 className={styles.sectionHeading}>My Location</h3>
        <MapComponent />
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;