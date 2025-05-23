import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import Footer from "./Footer";
import sendMail from "./SendEmail";

const Contact = () => {
  // State to manage form submission notifications
  const [notification, setNotification] = useState(null);

  return (
    <>
      <section className={`container ${styles.contactSection}`}>
        <div className="text-center mb-5">
          <h2 className={styles.contactHeading}>Let’s Connect!</h2>
          <p className={styles.contactText}>
            Need someone who can bridge business understanding with backend logic? With a background in HR and a focus on automation and data-driven solutions, I bring a blend of people insight and technical skills. Let’s connect and see how I can contribute to your next project.
          </p>
        </div>
        {/* Contact form */}
        <form onSubmit={(e) => sendMail(e, setNotification)} className={styles.contactForm}>
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
          <label htmlFor="projectsummary">Message</label>
          <textarea
            name="projectsummary"
            id="projectsummary"
            placeholder="Let me know how I can help"
            rows="5"
            required
          ></textarea>
          <button type="submit" className={`btn ${styles.btnSend} mt-3`}>
            Send Message
          </button>
        </form>

        {/* Notification - Displays success or error message */}
        {notification && (
          <div
            className={`${styles.notification} ${
              notification.type === "success"
                ? styles.success
                : styles.error
            }`}
          >
            <p>{notification.message}</p>
            <button
              onClick={() => setNotification(null)} // Dismiss the notification
              className={styles.closeButton}
            >
              &times;
            </button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Contact;