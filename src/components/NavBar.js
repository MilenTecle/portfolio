import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/"
            >
              <i className="fas fa-home"></i> Home
            </NavLink>
            <NavLink className="nav-link" to="/about"
            >
              <i className="fas fa-user"></i> About Me
            </NavLink>
            <NavLink className="nav-link" to="/resume"
            >
              <i className="fas fa-file-alt"></i> Resume
            </NavLink>
            <NavLink className="nav-link" to="/projects"
            >
              <i className="fas fa-tasks"></i> Projects
            </NavLink>
            <NavLink className="nav-link" to="/contact"
            >
              <i className="fas fa-envelope"></i> Contact
            </NavLink>
            <NavLink
              className="nav-link"
              to="/cv-milen-tecle.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-download" aria-hidden="true"></i> Download CV
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;