import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import logo from "../assets/images/avatar.webp";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      className={styles.NavBar}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Milen Tecle"
            className={styles.logo}
          />
          <span className={styles.brandName}>MILEN TECLE</span>
        </Navbar.Brand>
        {/* Navbar Toggle Button(for mobile navigation) */}
        <Navbar.Toggle
          ref={ref} // use ref from custom hook to handle click outside
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle navigation menu
        />
        {/* Collapsible Navigation Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className={`${styles.NavLink} nav-link`} to="/">
              HOME
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              to="/about"
              onClick={() => setExpanded(false)} // Close menu on link click
            >
              ABOUT ME
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              to="/resume"
              onClick={() => setExpanded(false)}
            >
              RESUME
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              to="/projects"
              onClick={() => setExpanded(false)}
            >
              PROJECTS
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              CONTACT
            </NavLink>
            {/* CV Download Link */}
            <NavLink
              className={`${styles.NavLink} nav-link`}
              to="/cv-milen-tecle.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
            >
              DOWNLOAD CV
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;