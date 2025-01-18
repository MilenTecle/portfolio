import React from "react";
import Footer from "./Footer";

const Resume = () => {
  return (
    <>
      <div className="container">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Mannheimer Swartling Advokatbyrå AB</strong> - HR Coordinator
            (2018 - Present)
          </li>
          <li>
            <strong>Transfer AB</strong> - Marketing and IT (2016 - 2018)
          </li>
        </ul>
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React, Python, Django, SQL, NoSQL</p>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
