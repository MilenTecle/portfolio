import React from "react";
import MapComponent from "./MapComponent";
import styles from "../styles/About.module.css";
import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Row Layout */}
        <div className="row">
          {/* Left Column - Personal Info */}
          <div className="col-md-4 text-center">
            <img
              src={avatar}
              alt="Milen Tecle"
              className={styles.avatar} // Use the class from About.module.css
            />
            <h3 className={styles.textPrimary}>Milen Tecle</h3>
            <p className={styles.textSecondary}>Full Stack Developer Student</p>
            <div className={styles.personalInfo}>
              <p>
                <strong>Name:</strong> Milen Tecle
              </p>
              <p>
                <strong>Address:</strong> Sundbyberg, Stockholm, Sweden
              </p>
              <p>
                <strong>Phone:</strong> +46 737 68 18 50
              </p>
              <p>
                <strong>Email:</strong> milen.tecle@gmail.com
              </p>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="col-md-8">
            <h2 className={styles.sectionHeading}>About Me</h2>
            <p className={styles.aboutContent}>
              Hi, I'm Milen Tecle, a dedicated HR professional transitioning into
              the exciting world of technology as a Full Stack Developer. My
              passion lies in creating innovative solutions and bridging the gap
              between human resources and technology.
            </p>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h4 className={styles.textSecondary}>What Do I Do?</h4>
                <p>
                  I am currently a Full Stack Developer Student at Code Institute,
                  where I am mastering front-end and back-end technologies.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <h4 className={styles.textSecondary}>How Do I Do It?</h4>
                <p>
                  By blending my background in HR with modern coding practices, I
                  aim to create user-friendly, effective applications.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <h4 className={styles.textSecondary}>Why Hire Me?</h4>
                <p>
                  My unique blend of HR expertise and Full Stack Development
                  skills makes me an asset in any tech or HR-tech project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <h3 className={styles.sectionHeading}>My Location</h3>
          <MapComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;