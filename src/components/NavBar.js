import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className={`${styles.NavLink} nav-link`} to="/">
              Home
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/about">
              About Me
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/resume">
              Resume
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/projects">
              Projects
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/contact">
              Contact
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              to="/cv-milen-tecle.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Download CV
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;