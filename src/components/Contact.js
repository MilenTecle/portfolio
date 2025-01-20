import React from "react";
import styles from "../styles/ContactForm.module.css";
import Footer from "./Footer";
import sendMail from "./SendEmail";

const Contact = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="row bg-color-contact">
          <div className="col">
            <h3 className="contact-heading uppercase text-center">
              Got a project in mind?
            </h3>
            <h5 className="uppercase text-center">
              Let's connect and explore the possibilities! 🚀
            </h5>

            <div className="center-form">
              <form onSubmit={sendMail} className={styles.contactForm}>
                <label htmlFor="fullname">Name</label>
                <input
                  type="text"
                  name="name"
                  id="fullname"
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="emailaddress">Email</label>
                <input
                  type="email"
                  name="email"
                  id="emailaddress"
                  placeholder="Your Email"
                  required
                />
                <label htmlFor="projectsummary">Project Description</label>
                <textarea
                  name="projectsummary"
                  id="projectsummary"
                  placeholder="Describe your project"
                  rows="5"
                  required
                ></textarea>
                <button type="submit" className="btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;