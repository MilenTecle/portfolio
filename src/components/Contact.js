import React from "react";
import '../styles/style.css';
import Footer from "./Footer";
import sendMail from "./SendEmail";

const Contact = () => {
  return (
    <>
      <header>
        <div className="row no-gutters">
          <a href="/" className="col-md-4 logo"></a>
          <div className="col-md-8">
            <div className="row no-gutters bg-color-name-title">
              <div className="col heading">
                <h1 className="name">Milen Tecle</h1>
                <h2 className="title">Full Stack Developer Student</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

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
              <form onSubmit={sendMail}>
                <input
                  type="text"
                  name="name"
                  id="fullname"
                  className="form-control"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="emailaddress"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <textarea
                  rows="5"
                  name="projectsummary"
                  id="projectsummary"
                  className="form-control"
                  placeholder="Project description"
                  required
                ></textarea>
                <div className="form-row text-center">
                  <div className="col">
                    <button type="submit" className="btn btn-secondary">
                      Send Project Request
                    </button>
                  </div>
                </div>
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