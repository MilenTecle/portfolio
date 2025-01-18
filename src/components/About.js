import React from "react";
import MapComponent from "../components/MapComponent";
import Footer from "./Footer";
import '../styles/style.css';

const About = () => {
  return (
    <>
    <div className="about-container">
      {/* About Me Section */}
      <section className="about-me-section">
        <h2 className="text-center">About Me</h2>
        <p className="about-description text-center">
          Hi, I'm <strong>Milen Tecle</strong>, a Full Stack Developer with a
          background in HR and Occupational Therapy. I am passionate about
          leveraging technology to create solutions that make a difference.
        </p>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <h3 className="text-center">My Locations</h3>
        <MapComponent />
        <div className="locations">
          <div className="location-item">
            <h4>Sundbyberg</h4>
            <p>
              Sundbyberg is the municipality where I live with my family, close
              to friends, nature, and the city.
            </p>
          </div>
          <div className="location-item">
            <h4>Norrmalmstorg</h4>
            <p>
              Norrmalmstorg is where my current office is located. I work as an
              HR coordinator with flexibility to work remotely and in the
              office.
            </p>
          </div>
          <div className="location-item">
            <h4>Väddö</h4>
            <p>
              Väddö is our country house where we enjoy the tranquility and
              escape from the city during weekends and holidays.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <h3 className="text-center">Interests</h3>
        <p className="text-center">
          I enjoy spending time with family and friends, exploring great food,
          watching series, and of course, coding!
        </p>
      </section>
      </div>
  <Footer />
  </>
  );
};

export default About;