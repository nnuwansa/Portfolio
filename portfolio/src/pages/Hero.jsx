import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <h1 className="hero-title">NADINI NUWANSA</h1>
            <p className="hero-subtitle">SOFTWARE ENGINEER - INTERN</p>
            <p className="hero-description">
              A motivated and detail-oriented software engineer with a strong
              passion for building accessible, intuitive, and high-performance
              digital experiences. Skilled in full-stack development with
              expertise in Java, Spring Boot, RESTful APIs, ReactJS, and
              database technologies such as MongoDB, MySQL, and SQL Server. I
              enjoy creating clean, pixel-perfect interfaces while engineering
              reliable backend systems that follow industry best practices.
            </p>
            <div className="mt-4">
              <Button
                className="btn-custom btn-primary-custom me-3"
                href="#contact"
              >
                Get In Touch
              </Button>
              <Button
                className="btn-custom btn-outline-custom"
                href="#projects"
              >
                View Projects
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
