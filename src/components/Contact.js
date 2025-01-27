import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import Footer from "./Footer";
import sendMail from "./SendEmail";

const Contact = () => {
  const [notification, setNotification] = useState(null); // Manage notification state

  return (
    <>
      <section className={`container ${styles.contactSection}`}>
        <div className="text-center mb-5">
          <h2 className={styles.contactHeading}>Let’s Connect!</h2>
          <p className={styles.contactText}>
            Whether you’re looking for a passionate developer to join your team or need a fresh perspective on your project, I’m here to help. With a strong drive to learn and grow, I’m excited to contribute to your success. Contact me below to start the conversation.
          </p>
        </div>
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
          <button type="submit" className={`btn btn-primary ${styles.btnSend}`}>
            Send Message
          </button>
        </form>

        {/* Notification */}
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