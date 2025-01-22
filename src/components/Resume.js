import React from "react";
import Footer from "./Footer";
import styles from "../styles/Resume.module.css";
import avatar from "../assets/images/avatar1.jpg";

const Resume = () => {
  return (
    <>
      {/* Hero Section */}
      <header className={styles.hero}>
        <img src={avatar} alt="Milen Tecle" />
        <h1>Milen Tecle</h1>
        <p>Full Stack Developer | HR Professional</p>
        <p>
          Email: <a href="mailto:milen_tecle@gmail.com">milen_tecle@gmail.com</a> | Phone: +46 737681850
        </p>
      </header>

      {/* Profile Section */}
      <div className={styles.resumeContainer}>
        <section className={`${styles.section} mb-5 `}>
          <h2>Profile</h2>
          <p>
            Enterprising and self-driven professional transitioning into the tech industry with a strong foundation in HR
            coordination, project management, and digitalization. Currently developing expertise in Full Stack Software
            Development, with practical experience in backend and frontend development. Proficient in technologies like
            HTML, CSS, JavaScript, and Python, with experience in frameworks like React, Django, and Django REST.
          </p>
        </section>

        {/* Education Section */}
        <section className={`${styles.section} mb-5 `}>
          {/* Education Section */}
          <h2>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>Full Stack Developer</h3>
              <span>Code Institute | August 2023 - Ongoing</span>
              <p>
                Credit-rated by University of West of Scotland. Comprehensive training in backend and frontend
                technologies.
              </p>
            </div>
            <div className={styles.timelineItem}>
              <h3>Social Law for Supervisors (7.5 credits)</h3>
              <span>Ersta Sköndal Högskola | November 2014 - February 2015</span>
            </div>
            <div className={styles.timelineItem}>
              <h3>Occupational Therapy Programme (180 credits)</h3>
              <span>Karolinska Institutet | January 2008 - January 2011</span>
              <p>Thesis: The relationship between daily activities and health.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>Computer Science Course (7.5 credits)</h3>
              <span>Stockholm University | June 2009 - August 2009</span>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className={`${styles.section} mb-5 `}>
          <h2>Technical Skills</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <ul>
                <li><strong>Technologies:</strong> HTML5, CSS3, JavaScript, Python</li>
                <li><strong>Databases:</strong> PostgreSQL, SQL</li>
                <li><strong>Frameworks & Libraries:</strong> Django, React, Bootstrap</li>
                <li><strong>Version Control:</strong> Git, GitHub</li>
                <li><strong>Additional:</strong> Agile, Design Thinking, UX Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className={`${styles.section} mb-5 `}>
          <h2>Work Experience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>HR Coordinator</h3>
              <span>Mannheimer Swartling Advokatbyrå AB | May 2018 - Ongoing</span>
              <p>
                - Processing and analyzing statistics<br />
                - Drafting contracts and managing secondments<br />
                - System Manager and workflow improvements
              </p>
            </div>
            <div className={styles.timelineItem}>
              <h3>Marketing, IT, and Communications Officer</h3>
              <span>Transfer Jobb AB | March 2016 - January 2018</span>
              <p>
                - Managed projects in a start-up environment<br />
                - Responsible for internal and external communication<br />
                - Tested new website features and services
              </p>
            </div>
            <div className={styles.timelineItem}>
              <h3>Coach</h3>
              <span>Resursteamet AB | January 2014 - December 2015</span>
              <p>
                - Coached individuals with neuropsychiatric disabilities<br />
                - Established job-oriented procedures and documentation
              </p>
            </div>
            <div className={styles.timelineItem}>
              <h3>Occupational Therapist</h3>
              <span>Arbetsmarknadsinsatser, Rinkeby-Kista SDF | January 2011 - December 2013</span>
              <p>
                - Conducted an assessment of the work area and working conditions on individuals far
                from the labor market<br />
                - Implemented motivational interviewing as a method at work<br />
                - Wrote investigative reports
              </p>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className={styles.section}>
          <h2>Languages</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <ul>
                <li><strong>Swedish:</strong> Native</li>
                <li><strong>English:</strong>  Fluent</li>
                <li><strong>Tigrinya:</strong>  Very good</li>
                <li><strong>Italian:</strong>  Good</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download CV */}
        <section className={styles.section}>
          <a href="/cv-milen-tecle.pdf" className={styles.btnDownload} download>
            Download CV
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
