import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
      <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Milen Tecle"
            className={styles.logo}
          />
          <span className={styles.brandName}>MILEN TECLE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className={`${styles.NavLink} nav-link`} to="/">
              HOME
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/about">
              ABOUT ME
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/resume">
              RESUME
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/projects">
              PROJECTS
            </NavLink>
            <NavLink className={`${styles.NavLink} nav-link`} to="/contact">
              CONTACT
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              to="/cv-milen-tecle.pdf"
              target="_blank"
              rel="noopener noreferrer">
              DOWNLOAD CV
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;