import React from "react";
import "../styles/style.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-details" className="row">
        {/* About Section */}
        <div className="col-sm-4">
          <h5>About</h5>
          <p>
            My name is Milen Tecle and I am currently a Full Stack Developer
            Student at Code Institute. I have a background in HR and
            Occupational Therapy.
          </p>
        </div>

        {/* Download CV Section */}
        <div className="col-sm-4">
          <h5>Download</h5>
          <p>
            Need a printable version of my CV?{" "}
            <a
              href="/cv-milen-tecle.pdf"
              target="_blank"
              className="cv-pdf"
              rel="noopener noreferrer"
            >
              Download it here.
              <i className="fa fa-download" aria-hidden="true"></i>
            </a>
          </p>
        </div>

        {/* Social Section */}
        <div className="col-sm-4">
          <h5>Social</h5>
          <ul className="list-inline social-links">
            <li>
              <a
                href="https://github.com/MilenTecle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/milen-tecle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100079091220124"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;