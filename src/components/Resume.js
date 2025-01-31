import React from "react";
import Footer from "./Footer";
import styles from "../styles/Resume.module.css";
import avatar from "../assets/images/avatar1.webp";

const Resume = () => {
  return (
    <>
      {/* Hero Section */}
      <header className={styles.hero}>
        <img src={avatar} alt="Milen Tecle" loading="lazy" />
        <h1>Milen Tecle</h1>
        <p>Junior Fullstack Software Developer | HR Professional</p>
        <p>
          Email: <a href="mailto:milen_tecle@gmail.com">milen_tecle@gmail.com</a> | Phone: +46 737681850
        </p>
      </header>

      {/* Profile Section */}
      <div className={styles.resumeContainer}>
        <section className={`${styles.section} mb-5 `}>
          <h2>Profile</h2>
          <p>
          I am a self-driven professional transitioning from HR to tech, with a strong foundation in Fullstack Development. Skilled in React, Django, Python, and SQL,
          I am passionate about building scalable, user-friendly applications. My background in HR and project management enhances my ability to collaborate effectively and deliver innovative
          solutions while continuously expanding my technical expertise.
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
              <ul className={styles.bulletList}>
                <li>Process and analyze HR statistics to support decision-making.</li>
                <li>Responsible for maintaining and optimizing HR-related systems, to enhance employee communication and engagement.</li>
                <li>Draft contracts and manage secondments, ensuring compliance and efficiency.</li>
                <li>Identify and drive workflow improvements, leveraging HR technology to optimize processes.</li>
                <li>Collaborate with cross-functional teams to implement new policies and improve employee satisfaction.</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h3>Marketing, IT, and Communications Officer</h3>
              <span>Transfer Jobb AB | March 2016 - January 2018</span>
              <ul className={styles.bulletList}>
                <li>Managed projects in a start-up environment, focusing on scaling operations and team-building.</li>
                <li>Directed internal and external communications to ensure consistency and clarity.</li>
                <li> Collaborated with cross-functional teams to test and implement new website features, improving user engagement.</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h3>Coach</h3>
              <span>Resursteamet AB | January 2014 - December 2015</span>
              <ul className={styles.bulletList}>
                <li>Coached individuals with neuropsychiatric disabilities, helping them achieve job-readiness.</li>
                <li>Developed personalized plans, coordinating meetings with clients and teams to achieve tailored goals.</li>
                <li>Established a job-oriented unit and created documentation procedures to support clients.</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h3>Occupational Therapist</h3>
              <span>Arbetsmarknadsinsatser, Rinkeby-Kista SDF | January 2011 - December 2013</span>
              <ul className={styles.bulletList}>
                <li>Conducted workplace assessments for individuals transitioning into the labor market.</li>
                <li>Utilized motivational interviewing to empower clients and promote positive outcomes.</li>
                <li>Prepared comprehensive reports with recommended courses of action.</li>
              </ul>
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
