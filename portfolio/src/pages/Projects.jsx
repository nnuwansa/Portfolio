import React, { useState } from "react";
import { Container, Row, Col, Nav, Card, Badge, Button } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const [activeTab, setActiveTab] = useState("websites");

  const websites = [
    {
      title: "Website for United Nations SDG: Life Below Water",
      description:
        "Developed a website as part of a team project focused on the United Nations Sustainable Development Goal - Life Below Water. Contributed to content creation and technical implementation to raise awareness about ocean conservation, marine life protection, and sustainable water practices, demonstrating teamwork, web design skills, and commitment to environmental issues.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/nnuwansa/LifeBelowWater-Website",
      image: "/images/LifeBelowWater.png",
    },
    {
      title: "Marketing Website for Achieve+",
      description:
        "Created a professional marketing website for Achieve+, a gamified task management platform. The site showcases features, benefits, and testimonials to attract potential users and businesses. Implemented responsive design and modern UI/UX principles to effectively communicate the product's value proposition.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://achieveplus.netlify.app",
      github: "https://github.com/nnuwansa/ACHIEVE--Marketing-Website",
      image: "/images/Achieve+.png",
    },

    {
      title: "MOS Burgers - Restaurant Website",
      description:
        "Built a dynamic restaurant website for MOS Burgers featuring an interactive menu, location information, and contact details. The website emphasizes visual appeal with high-quality images and smooth animations to enhance the customer experience and drive engagement.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/nnuwansa/Burger-shop---website",
      image: "/images/MOS Burgers.png",
    },
    {
      title: "RAMEN HUB - Ramen Selling Website",
      description:
        "Designed and developed an e-commerce website for RAMEN HUB, featuring an attractive menu display, online ordering system, and responsive design. The site provides customers with a seamless browsing experience, complete with product details, pricing, and a modern aesthetic that reflects the brand's identity.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      link: "#",
      github: "#",
      image: "/images/Ramen.png",
    },
    {
      title: "Aethrix Software - Company Website",
      description:
        "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Developed the company website to showcase services, portfolio, and expertise, effectively communicating the brand's commitment to quality and client satisfaction.",
      technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
      link: "#",
      github: "#",
      image: null,
    },
  ];

  const webApplications = [
    {
      title: "E Bird ( Workflow & Document Tracking System)",
      description:
        "Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time document tracking, automated notifications, approval workflows, and detailed analytics for process optimization. Implemented role-based access control and audit trails for enhanced security and compliance.",
      technologies: ["React", "MongoDB", "Java", "Spring Boot", "Postman"],
      link: "#",
      github: "#",
      image: "/images/ebird.png",
    },
    {
      title: "Achieve+ ( Gamified Task Management System)",
      description:
        "Developed a gamified task completion system for team workers that boosts productivity through game mechanics. Features include point systems, leaderboards, achievement badges, team collaboration tools, and progress tracking. Designed to increase employee engagement and motivation while maintaining professional functionality.",
      technologies: [
        "React",
        "PostgreSQL",
        "Java",
        "Spring Boot",
        "Bootstrap",
        "Postman",
      ],
      link: "#",
      github: "#",
      image: "/images/Achieve+ _TaskManagementSystem.png",
    },
    {
      title: "Leave Management System",
      description:
        "Built for the Department of Cooperative Development - Central Province. Streamlines the leave application and approval process with automated workflows, leave balance tracking, calendar integration, and comprehensive reporting. Reduces administrative overhead and improves transparency in leave management.",
      technologies: [
        "React",
        "MongoDB",
        "Java",
        "Spring Boot",
        "Bootstrap",
        "Postman",
      ],
      link: "#",
      github: "#",
      image: "/images/Leave.png",
    },
    {
      title: "Arbitration Management System (AMS)",
      description:
        "Developed for the Department of Cooperative Development - Central Province. Manages arbitration cases, schedules hearings, tracks case progress, and maintains detailed records. Features include document management, case assignment, automated notifications, and comprehensive reporting for efficient dispute resolution.",
      technologies: [
        "React",
        "MongoDB",
        "Java",
        "Spring Boot",
        "Bootstrap",
        "Postman",
      ],
      link: "#",
      github: "#",
      image: "/images/AMS.png",
    },
    {
      title: "Vehicle Management System",
      description:
        "Created for the Department of Cooperative Development - Central Province. Manages vehicle bookings, maintenance schedules, fuel consumption tracking, and driver assignments. Includes features for service reminders, cost analysis, vehicle availability calendars, and comprehensive reporting for fleet optimization.",
      technologies: ["React", "MongoDB", "Java", "Spring Boot", "Postman"],
      link: "#",
      github: "#",
      image: null,
    },
    {
      title: "Personal File Management System",
      description:
        "Developed for the Department of Cooperative Development - Central Province. Digitizes and manages employee personal files with secure document storage, version control, and access management. Features include document scanning, metadata tagging, search functionality, and automated document lifecycle management.",
      technologies: ["React", "MongoDB", "Java", "Spring Boot", "Postman"],
      link: "#",
      github: "#",
      image: null,
    },
    {
      title: "Sample Management System - FCAU",
      description:
        "Implemented a comprehensive Sample Management System to track sample collection, processing, storage, and analysis. The system allows users to add, update, and manage sample details while efficiently tracking each sample’s status throughout its lifecycle.",
      technologies: [
        "React",
        "MongoDB",
        "Java",
        "Spring Boot",
        "Bootstrap",
        "Postman",
      ],
      link: "#",
      github: "#",
      image: "/images/fcau.jpeg",
    },
    {
      title: "Ramen Company System ",
      description:
        "Developed a full-stack Inventory & Distribution Management System for a ramen company, enabling real-time stock tracking across multiple product varieties, order request management, distributor coordination, and transaction monitoring. The system features an intuitive dashboard with live stock level indicators, low-stock alerts, and activity logs to streamline supply chain operations.",
      technologies: [
        "React",
        "MongoDB",
        "Java",
        "Spring Boot",
        "Bootstrap",
        "Postman",
      ],
      link: "#",
      github: "#",
      image: "/images/RamenCompanySystem.png",
    },

    {
      title: "Real-Time Event Ticketing System",
      description:
        "Advanced ticketing system with real-time seat availability using producer-consumer architecture. Handles concurrent ticket purchases, prevents overselling through optimistic locking, and provides instant updates. Features include seat selection, payment processing, ticket generation, and comprehensive event management.",
      technologies: ["React", "MySQL", "Java", "Spring Boot", "Postman"],
      link: "#",
      github: "#",
      image: null,
    },
  ];

  const currentProjects = activeTab === "websites" ? websites : webApplications;

  return (
    <section className="page-section">
      <Container>
        {/* Page Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="page-title">Projects</h1>
            <p className="page-subtitle">
              A showcase of my work in web development and software engineering
            </p>
          </Col>
        </Row>

        {/* Tabs Navigation */}
        <Row className="mb-4">
          <Col>
            <Nav variant="tabs" className="project-tabs">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "websites"}
                  onClick={() => setActiveTab("websites")}
                >
                  WEBSITES ({websites.length})
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "webApplications"}
                  onClick={() => setActiveTab("webApplications")}
                >
                  WEB APPLICATIONS ({webApplications.length})
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        {/* Projects Grid - 3 per row */}
        <Row>
          {currentProjects.map((project, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="project-card h-90">
                {/* Project Image or Gradient */}
                {project.image ? (
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: "210px",
                      objectFit: "contain",
                      backgroundColor: "#f8f9fa",
                      padding: "1rem",
                    }}
                    onError={(e) => {
                      console.error("Failed to load image:", project.image);
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}

                {/* Gradient background (shown if no image or image fails) */}
                <div
                  style={{
                    display: project.image ? "none" : "flex",
                    height: "210px",
                    background:
                      "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "3rem",
                      fontWeight: "900",
                      opacity: "0.3",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>
                </div>

                <Card.Body className="project-content d-flex flex-column ">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description flex-grow-1">
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-3 flex-wrap">
                    <a
                      href={project.link}
                      className="project-link"
                      onClick={(e) =>
                        project.link === "#" && e.preventDefault()
                      }
                    >
                      Live Demo <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.github}
                      className="project-link"
                      onClick={(e) =>
                        project.github === "#" && e.preventDefault()
                      }
                    >
                      Code <FaGithub />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col>
            <Card className="info-card text-center">
              <Card.Body>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  Interested in working together?
                </h3>
                <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <Button
                  href="https://github.com/nnuwansa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-custom btn-primary-custom me-3"
                >
                  Visit My GitHub
                </Button>
                <Button
                  as="a"
                  href="/contact"
                  className="btn-custom btn-outline-custom"
                >
                  Get In Touch
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
