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
        <p>Junior Software Developer | HR Professional</p>
        <p>
          Email: <a href="mailto:milen_tecle@gmail.com">milen_tecle@gmail.com</a> | Phone: +46 737681850
        </p>
      </header>

      {/* Profile Section */}
      <div className={styles.resumeContainer}>
        <section className={`${styles.section} mb-5 `}>
          <h2>Profile</h2>
          <p>
            I'm a curious and driven developer with a background in HR and a growing passion for backend development and automation. 
            After completing Code Institute’s Full-Stack Diploma, I’ve continued to deepen my skills in Python, Django, and API design.
            
            I enjoy combining structure, creativity, and user experience in everything I build. Outside of code, I’m also navigating life with two energetic kids and a head full of ideas.
          </p>
        </section>

        {/* Education Section */}
        <section className={`${styles.section} mb-5 `}>
          {/* Education Section */}
          <h2>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>Diploma in Fullstack Software Development (Advanced Front End)</h3>
              <span>Code Institute | August 2023 - January 2025</span>
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
                <li><strong>Certifications:</strong> JavaScript Algorithms & Data Structures (freeCodeCamp)</li>
                <li><strong>Focus Areas:</strong> Backend development, APIs, automation, and data-driven projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className={`${styles.section} mb-5 `}>
          <h2>Work Experience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>Mannheimer Swartling Advokatbyrå AB</h3>
              <span>HR Business Systems Advisor | May 2025 - ongoing</span>
              <ul className={styles.bulletList}>
                <li>Leading HR system implementation and digital process automation initiatives.</li>
                <li>Driving technical improvements across HR operations, bridging people, process, and tech.</li>
                <li>Building on my fullstack diploma and automation interests to support data-driven HR development.</li>
              </ul>
              <span>HR Coordinator | May 2018 - April 2025</span>
              <ul className={styles.bulletList}>
                <li>Produced and analyzed HR statistics to support strategic decisions.</li>
                <li>Managed contracts and employment documentation, ensuring compliance and process efficiency.</li>
                <li>Initiated system and workflow improvements, sparking a deeper interest in automation and HR tech.</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h3>Transfer Jobb AB </h3>
              <span>Marketing, IT, and Communications Coordinator | March 2016 - January 2018</span>
              <ul className={styles.bulletList}>
                <li>Managed projects in a start-up environment, focusing on scaling operations and team-building.</li>
                <li>Directed internal and external communications to ensure consistency and clarity.</li>
                <li>Collaborated with cross-functional teams to test and implement new website features, improving user engagement.</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h3>Resursteamet AB</h3>
              <span>Coach | January 2014 - December 2015</span>
              <ul className={styles.bulletList}>
                <li>Coached individuals with neuropsychiatric disabilities, helping them achieve job-readiness.</li>
                <li>Developed personalized plans, coordinating meetings with clients and teams to achieve tailored goals.</li>
                <li>Established a job-oriented unit and created documentation procedures to support clients.</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h3>Arbetsmarknadsinsatser, Rinkeby-Kista SDF</h3>
              <span>Occupational Therapist | January 2011 - December 2013</span>
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
