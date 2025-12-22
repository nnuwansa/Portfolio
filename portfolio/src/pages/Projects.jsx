// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// // import { FaExternalLinkAlt } from "react-icons/fa";

// // function Projects() {
// //   const projects = [
// //     {
// //       title: "Aethrix Software",
// //       description:
// //         "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
// //       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
// //       link: "#",
// //       category: "websites",
// //     },
// //     {
// //       title: "4X4 Automotive Service Pvt (Ltd)",
// //       description:
// //         "Developed an interactive web application for 4X4 Automotive Service, enabling customers to view their vehicle service details and receive cost and time estimates, improving transparency and enhancing the overall service experience.",
// //       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
// //       link: "#",
// //       category: "websites",
// //     },
// //     {
// //       title: "DermaLuxe AI Personalized Skincare",
// //       description:
// //         "Developed an AI-driven platform that delivers personalized skincare recommendations, helping users achieve healthier, more radiant skin through tailored solutions based on individual needs.",
// //       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
// //       link: "#",
// //       category: "websites",
// //     },
// //     {
// //       title: "E Bird (Workflow & Document Tracking)",
// //       description:
// //         "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
// //       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
// //       link: "#",
// //       category: "web-applications",
// //     },
// //   ];

// //   return (
// //     <section id="projects" className="py-5">
// //       <Container>
// //         <Row className="mb-5">
// //           <Col>
// //             <h2 className="section-title">Projects</h2>
// //             <p className="section-subtitle">Some things I've built</p>
// //           </Col>
// //         </Row>
// //         <Row>
// //           {projects.map((project, index) => (
// //             <Col lg={6} md={6} className="mb-4" key={index}>
// //               <div className="project-card">
// //                 <div className="project-image"></div>
// //                 <div className="project-content">
// //                   <h3 className="project-title">{project.title}</h3>
// //                   <p className="project-description">{project.description}</p>
// //                   <div className="mb-3">
// //                     {project.technologies.map((tech, idx) => (
// //                       <span key={idx} className="tech-badge">
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>
// //                   <a href={project.link} className="project-link">
// //                     View Project <FaExternalLinkAlt />
// //                   </a>
// //                 </div>
// //               </div>
// //             </Col>
// //           ))}
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // }

// // export default Projects;

// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// // import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// // function Projects() {
// //   const projects = [
// //     {
// //       title: "Aethrix Software",
// //       category: "Website",
// //       description:
// //         "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
// //       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
// //       link: "#",
// //       github: "#",
// //     },
// //     {
// //       title: "4X4 Automotive Service Pvt (Ltd)",
// //       category: "Web Application",
// //       description:
// //         "Developed an interactive web application for 4X4 Automotive Service, enabling customers to view their vehicle service details and receive cost and time estimates, improving transparency and enhancing the overall service experience.",
// //       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
// //       link: "#",
// //       github: "#",
// //     },
// //     {
// //       title: "DermaLuxe AI Personalized Skincare",
// //       category: "AI Platform",
// //       description:
// //         "Developed an AI-driven platform that delivers personalized skincare recommendations, helping users achieve healthier, more radiant skin through tailored solutions based on individual needs.",
// //       technologies: ["React", "AI/ML", "Vite", "CSS", "MongoDB"],
// //       link: "#",
// //       github: "#",
// //     },
// //     {
// //       title: "E Bird (Workflow & Document Tracking)",
// //       category: "Enterprise Application",
// //       description:
// //         "Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
// //       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
// //       link: "#",
// //       github: "#",
// //     },
// //   ];

// //   return (
// //     <section className="page-section">
// //       <Container>
// //         <Row className="mb-5">
// //           <Col>
// //             <h1 className="page-title">Projects</h1>
// //             <p className="page-subtitle">Some things I've built</p>
// //           </Col>
// //         </Row>
// //         <Row>
// //           {projects.map((project, index) => (
// //             <Col lg={6} md={6} className="mb-4" key={index}>
// //               <div className="project-card">
// //                 <div className="project-image">
// //                   <div className="project-overlay">
// //                     <span className="project-category">{project.category}</span>
// //                   </div>
// //                 </div>
// //                 <div className="project-content">
// //                   <h3 className="project-title">{project.title}</h3>
// //                   <p className="project-description">{project.description}</p>
// //                   <div className="mb-3">
// //                     {project.technologies.map((tech, idx) => (
// //                       <span key={idx} className="tech-badge">
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>
// //                   <div className="project-links">
// //                     <a
// //                       href={project.link}
// //                       className="project-link"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Live Demo <FaExternalLinkAlt />
// //                     </a>
// //                     <a
// //                       href={project.github}
// //                       className="project-link ms-3"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Code <FaGithub />
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Col>
// //           ))}
// //         </Row>

// //         <Row className="mt-5">
// //           <Col>
// //             <div className="info-card text-center">
// //               <h3
// //                 style={{
// //                   fontFamily: "var(--font-display)",
// //                   color: "var(--color-primary)",
// //                   marginBottom: "1rem",
// //                 }}
// //               >
// //                 Want to see more?
// //               </h3>
// //               <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
// //                 I'm constantly working on new projects. Check out my GitHub for
// //                 more!
// //               </p>
// //               <a
// //                 href="https://github.com/yourusername"
// //                 className="btn btn-custom btn-primary-custom"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 Visit My GitHub
// //               </a>
// //             </div>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // }

// // export default Projects;

// import React, { useState } from "react";
// import { Container, Row, Col, Nav } from "react-bootstrap";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// function Projects() {
//   const [activeTab, setActiveTab] = useState("websites");

//   const websites = [
//     {
//       title: "Aethrix Software",
//       description:
//         "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//     },
//     {
//       title: "4X4 Automotive Service Pvt (Ltd)",
//       description:
//         "Developed an interactive web application for 4X4 Automotive Service, enabling customers to view their vehicle service details and receive cost and time estimates, improving transparency and enhancing the overall service experience.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//     },
//     {
//       title: "DermaLuxe AI Personalized Skincare",
//       description:
//         "Developed an AI-driven platform that delivers personalized skincare recommendations, helping users achieve healthier, more radiant skin through tailored solutions based on individual needs.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//     },
//   ];

//   const webApplications = [
//     {
//       title: "E Bird (Workflow & Document Tracking)",
//       description:
//         "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
//       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
//       link: "#",
//       github: "#",
//     },
//   ];

//   const currentProjects = activeTab === "websites" ? websites : webApplications;

//   return (
//     <section className="page-section">
//       <Container>
//         <Row className="mb-5">
//           <Col>
//             <h1 className="page-title">Projects</h1>
//             <p className="page-subtitle">Some things I've built</p>
//           </Col>
//         </Row>

//         {/* Tabs Navigation */}
//         <Row className="mb-4">
//           <Col>
//             <Nav variant="tabs" className="project-tabs">
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "websites"}
//                   onClick={() => setActiveTab("websites")}
//                   className="project-tab-link"
//                 >
//                   WEBSITES
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "webApplications"}
//                   onClick={() => setActiveTab("webApplications")}
//                   className="project-tab-link"
//                 >
//                   WEB APPLICATIONS
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>
//         </Row>

//         {/* Projects Grid */}
//         <Row>
//           {currentProjects.map((project, index) => (
//             <Col lg={6} md={6} className="mb-4" key={index}>
//               <div className="project-card">
//                 <div className="project-image">
//                   <div className="project-overlay"></div>
//                 </div>
//                 <div className="project-content">
//                   <h3 className="project-title">{project.title}</h3>
//                   <p className="project-description">{project.description}</p>
//                   <div className="mb-3">
//                     {project.technologies.map((tech, idx) => (
//                       <span key={idx} className="tech-badge">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="project-links">
//                     <a
//                       href={project.link}
//                       className="project-link"
//                       onClick={(e) => {
//                         if (project.link === "#") {
//                           e.preventDefault();
//                         }
//                       }}
//                       target={project.link !== "#" ? "_blank" : undefined}
//                       rel={
//                         project.link !== "#" ? "noopener noreferrer" : undefined
//                       }
//                     >
//                       Live Demo <FaExternalLinkAlt />
//                     </a>
//                     <a
//                       href={project.github}
//                       className="project-link ms-3"
//                       onClick={(e) => {
//                         if (project.github === "#") {
//                           e.preventDefault();
//                         }
//                       }}
//                       target={project.github !== "#" ? "_blank" : undefined}
//                       rel={
//                         project.github !== "#"
//                           ? "noopener noreferrer"
//                           : undefined
//                       }
//                     >
//                       Code <FaGithub />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         <Row className="mt-5">
//           <Col>
//             <div className="info-card text-center">
//               <h3
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   color: "var(--color-primary)",
//                   marginBottom: "1rem",
//                 }}
//               >
//                 Want to see more?
//               </h3>
//               <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
//                 I'm constantly working on new projects. Check out my GitHub for
//                 more!
//               </p>
//               <a
//                 href="https://github.com/yourusername"
//                 className="btn btn-custom btn-primary-custom"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Visit My GitHub
//               </a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Projects;

// import React, { useState } from "react";
// import { Container, Row, Col, Nav, Card, Badge, Button } from "react-bootstrap";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// function Projects() {
//   const [activeTab, setActiveTab] = useState("websites");

//   const websites = [
//     {
//       title: "Aethrix Software",
//       description:
//         "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//     },
//     {
//       title: "4X4 Automotive Service Pvt (Ltd)",
//       description:
//         "Developed an interactive web application for 4X4 Automotive Service, enabling customers to view their vehicle service details and receive cost and time estimates, improving transparency and enhancing the overall service experience.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//     },
//     {
//       title: "DermaLuxe AI Personalized Skincare",
//       description:
//         "Developed an AI-driven platform that delivers personalized skincare recommendations, helping users achieve healthier, more radiant skin through tailored solutions based on individual needs.",
//       technologies: ["React", "AI/ML", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//     },
//   ];

//   const webApplications = [
//     {
//       title: "E Bird (Workflow & Document Tracking)",
//       description:
//         "Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
//       link: "#",
//       github: "#",
//     },
//   ];

//   const currentProjects = activeTab === "websites" ? websites : webApplications;

//   return (
//     <section className="page-section">
//       <Container>
//         {/* Page Header */}
//         <Row className="mb-5">
//           <Col>
//             <h1 className="page-title">Projects</h1>
//             <p className="page-subtitle">Some things I've built</p>
//           </Col>
//         </Row>

//         {/* Tabs Navigation */}
//         <Row className="mb-4">
//           <Col>
//             <Nav variant="tabs" className="project-tabs">
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "websites"}
//                   onClick={() => setActiveTab("websites")}
//                 >
//                   WEBSITES
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "webApplications"}
//                   onClick={() => setActiveTab("webApplications")}
//                 >
//                   WEB APPLICATIONS
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>
//         </Row>

//         {/* Projects Grid */}
//         <Row>
//           {currentProjects.map((project, index) => (
//             <Col lg={6} md={6} className="mb-6" key={index}>
//               <Card className="project-card">
//                 <div className="project-image"></div>
//                 <Card.Body className="project-content">
//                   <h3 className="project-title">{project.title}</h3>
//                   <p className="project-description">{project.description}</p>
//                   <div className="mb-3">
//                     {project.technologies.map((tech, idx) => (
//                       <Badge key={idx} className="tech-badge">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="d-flex gap-3">
//                     <a
//                       href={project.link}
//                       className="project-link"
//                       onClick={(e) =>
//                         project.link === "#" && e.preventDefault()
//                       }
//                     >
//                       Live Demo <FaExternalLinkAlt />
//                     </a>
//                     <a
//                       href={project.github}
//                       className="project-link"
//                       onClick={(e) =>
//                         project.github === "#" && e.preventDefault()
//                       }
//                     >
//                       Code <FaGithub />
//                     </a>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Call to Action */}
//         <Row className="mt-5">
//           <Col>
//             <Card className="info-card text-center">
//               <Card.Body>
//                 <h3
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     color: "var(--color-primary)",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   Want to see more?
//                 </h3>
//                 <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
//                   I'm constantly working on new projects. Check out my GitHub
//                   for more!
//                 </p>
//                 <Button
//                   href="https://github.com/yourusername"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-custom btn-primary-custom"
//                 >
//                   Visit My GitHub
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Projects;

// import React, { useState } from "react";
// import { Container, Row, Col, Nav, Card, Badge, Button } from "react-bootstrap";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// function Projects() {
//   const [activeTab, setActiveTab] = useState("websites");

//   const websites = [
//     {
//       title: "Aethrix Software",
//       description:
//         "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//       image: "/images/aethrix.jpg", // Add your image to public/images/
//     },
//     {
//       title: "4X4 Automotive Service Pvt (Ltd)",
//       description:
//         "Developed an interactive web application for 4X4 Automotive Service, enabling customers to view their vehicle service details and receive cost and time estimates, improving transparency and enhancing the overall service experience.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//       image: "/images/4x4-automotive.jpg", // Add your image to public/images/
//     },
//     {
//       title: "DermaLuxe AI Personalized Skincare",
//       description:
//         "Developed an AI-driven platform that delivers personalized skincare recommendations, helping users achieve healthier, more radiant skin through tailored solutions based on individual needs.",
//       technologies: ["React", "AI/ML", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//       image: "/images/dermaluxe.jpg", // Add your image to public/images/
//     },
//   ];

//   const webApplications = [
//     {
//       title: "E Bird (Workflow & Document Tracking)",
//       description:
//         "Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
//       link: "#",
//       github: "#",
//       image: "/images/ebird.png", // Add your image to public/images/
//     },
//   ];

//   const currentProjects = activeTab === "websites" ? websites : webApplications;

//   return (
//     <section className="page-section">
//       <Container>
//         {/* Page Header */}
//         <Row className="mb-5">
//           <Col>
//             <h1 className="page-title">Projects</h1>
//             <p className="page-subtitle">Some things I've built</p>
//           </Col>
//         </Row>

//         {/* Tabs Navigation */}
//         <Row className="mb-4">
//           <Col>
//             <Nav variant="tabs" className="project-tabs">
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "websites"}
//                   onClick={() => setActiveTab("websites")}
//                 >
//                   WEBSITES
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "webApplications"}
//                   onClick={() => setActiveTab("webApplications")}
//                 >
//                   WEB APPLICATIONS
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>
//         </Row>

//         {/* Projects Grid - 3 per row */}
//         <Row>
//           {currentProjects.map((project, index) => (
//             <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
//               <Card className="project-card h-100">
//                 {/* Project Image */}
//                 {project.image && (
//                   <Card.Img
//                     variant="top"
//                     src={project.image}
//                     alt={project.title}
//                     style={{
//                       height: "250px",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       // Fallback to gradient if image not found
//                       e.target.style.display = "none";
//                       const fallback = e.target.nextSibling;
//                       if (fallback) fallback.style.display = "block";
//                     }}
//                   />
//                 )}
//                 {/* Fallback gradient background */}
//                 <div
//                   style={{
//                     display: "none",
//                     height: "250px",
//                     background:
//                       "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
//                   }}
//                 />

//                 <Card.Body className="project-content d-flex flex-column">
//                   <h3 className="project-title">{project.title}</h3>
//                   <p className="project-description flex-grow-1">
//                     {project.description}
//                   </p>
//                   <div className="mb-3">
//                     {project.technologies.map((tech, idx) => (
//                       <Badge key={idx} className="tech-badge">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="d-flex gap-3 flex-wrap">
//                     <a
//                       href={project.link}
//                       className="project-link"
//                       onClick={(e) =>
//                         project.link === "#" && e.preventDefault()
//                       }
//                     >
//                       Live Demo <FaExternalLinkAlt />
//                     </a>
//                     <a
//                       href={project.github}
//                       className="project-link"
//                       onClick={(e) =>
//                         project.github === "#" && e.preventDefault()
//                       }
//                     >
//                       Code <FaGithub />
//                     </a>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Call to Action */}
//         <Row className="mt-5">
//           <Col>
//             <Card className="info-card text-center">
//               <Card.Body>
//                 <h3
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     color: "var(--color-primary)",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   Want to see more?
//                 </h3>
//                 <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
//                   I'm constantly working on new projects. Check out my GitHub
//                   for more!
//                 </p>
//                 <Button
//                   href="https://github.com/yourusername"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-custom btn-primary-custom"
//                 >
//                   Visit My GitHub
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Projects;

//*** */

// import React, { useState } from "react";
// import { Container, Row, Col, Nav, Card, Badge, Button } from "react-bootstrap";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// // For Vite, files in public/ folder are accessed via string paths, NOT imports!
// // The public folder is served at the root, so /images/file.png maps to public/images/file.png

// function Projects() {
//   const [activeTab, setActiveTab] = useState("websites");

//   const websites = [
//     {
//       title:
//         "Website for United Nations Sustainable Development Goal : Life Below Water",
//       description:
//         "Developed a website as part of a team project focused on the United Nations Sustainable Development Goal - Life Below Water goal, using HTML, CSS, and JavaScript. Contributed to content creation and technical implementation to raise awareness about ocean conservation, marine life protection, and sustainable water practices, demonstrating teamwork, web design skills, and commitment to environmental issues.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       link: "#",
//       github: "#",
//       image: "/images/LifeBelowWater.png", // No image yet - will show gradient
//     },
//     {
//       title: "Marketing Web Site for Achieve+",
//       description:
//         "***Developed an AI-driven platform that delivers personalized skincare recommendations, helping users achieve healthier, more radiant skin through tailored solutions based on individual needs.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       link: "#",
//       github: "#",
//       image: "/images/Achieve+.png", // No image yet - will show gradient
//     },
//     {
//       title: "Website for Burger Shop",
//       description:
//         "***Developed an AI-driven platform that delivers personalized skincare recommendations, helping users achieve healthier, more radiant skin through tailored solutions based on individual needs.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       link: "#",
//       github: "#",
//       image: "/images/MOS Burgers.png", // No image yet - will show gradient
//     },
//     {
//       title: "Aethrix Software",
//       description:
//         "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
//       technologies: ["React", "EmailJS", "Vite", "CSS", "MongoDB"],
//       link: "#",
//       github: "#",
//       image: null, // No image yet - will show gradient
//     },
//     {
//       title: "RAMEN HUB - Ramen Selling Website",
//       description:
//         "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
//       technologies: ["React", "Vite", "Tailwind CSS"],
//       link: "#",
//       github: "#",
//       image: "/images/Ramen.png", // No image yet - will show gradient
//     },
//   ];

//   const webApplications = [
//     {
//       title: "E Bird (Workflow & Document Tracking)",
//       description:
//         "Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
//       link: "#",
//       github: "#",
//       image: "/images/ebird.png", // String path for public folder
//     },
//     {
//       title:
//         "Leave Management System (Department of Cooperative Development- Central Province)",
//       description:
//         "*****Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: [
//         "React",
//         "MongoDB",

//         "Postman",
//         "SpringBoot",
//         "Bootstrap",
//         "Java",
//       ],
//       link: "#",
//       github: "#",
//       image: "/images/Leave.png", // String path for public folder
//     },

//     {
//       title:
//         "Vehicle Management System (Department of Cooperative Development - Central Province)",
//       description:
//         "*****Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
//       link: "#",
//       github: "#",
//       image: null, // String path for public folder
//     },
//     {
//       title:
//         "Arbitration Management System (Department of Cooperative Development- Central Province)",
//       description:
//         "*****Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: [
//         "React",
//         "MongoDB",

//         "Postman",
//         "SpringBoot",
//         "Bootstrap",
//         "Java",
//       ],
//       link: "#",
//       github: "#",
//       image: "/images/AMS.png", // String path for public folder
//     },
//     {
//       title:
//         "PersonalFile  Management System (Department of Cooperative Development- Central Province)",
//       description:
//         "*****Comprehensive document etracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: ["React", "MongoDB", "Java", "Postman", "SpringBoot"],
//       link: "#",
//       github: "#",
//       image: null, // String path for public folder
//     },
//     {
//       title: "Achieve+ (Gamified Task Completion System for Team Workers )",
//       description:
//         "*****Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: [
//         "React",
//         "PostgreSQL",

//         "Postman",
//         "SpringBoot",
//         "Bootstrap",
//         "Java",
//       ],
//       link: "#",
//       github: "#",
//       image: "/images/Achieve+ _TaskManagementSystem.png", // String path for public folder
//     },

//     {
//       title: "Sample Management System - FCAU",
//       description:
//         "*****Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: [
//         "React",
//         "MongoDB",
//         "Postman",
//         "SpringBoot",
//         "Bootstrap",
//         "Java",
//       ],
//       link: "#",
//       github: "#",
//       image: "/images/fcau.jpeg", // String path for public folder
//     },
//     {
//       title:
//         "Real-Time Event Ticketing System with Advanced Producer-Consumer Implementation",
//       description:
//         "*****Comprehensive document tracking and workflow management system designed for enterprise environments. Features include real-time tracking, automated notifications, and detailed analytics for process optimization.",
//       technologies: ["React", "MySQL", "SpringBoot", "Java", "Postman"],
//       link: "#",
//       github: "#",
//       image: null, // String path for public folder
//     },
//   ];

//   const currentProjects = activeTab === "websites" ? websites : webApplications;

//   return (
//     <section className="page-section">
//       <Container>
//         {/* Page Header */}
//         <Row className="mb-5">
//           <Col>
//             <h1 className="page-title">Projects</h1>
//             <p className="page-subtitle">Some things I've built</p>
//           </Col>
//         </Row>

//         {/* Tabs Navigation */}
//         <Row className="mb-4">
//           <Col>
//             <Nav variant="tabs" className="project-tabs">
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "websites"}
//                   onClick={() => setActiveTab("websites")}
//                 >
//                   WEBSITES
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link
//                   active={activeTab === "webApplications"}
//                   onClick={() => setActiveTab("webApplications")}
//                 >
//                   WEB APPLICATIONS
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>
//         </Row>

//         {/* Projects Grid - 3 per row */}
//         <Row>
//           {currentProjects.map((project, index) => (
//             <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
//               <Card className="project-card h-100">
//                 {/* Project Image or Gradient */}
//                 {project.image ? (
//                   <Card.Img
//                     variant="top"
//                     src={project.image}
//                     alt={project.title}
//                     style={{
//                       height: "250px",
//                       objectFit: "contain", // Changed from "cover" to "contain"
//                       backgroundColor: "#f8f9fa", // Light background
//                       padding: "1rem", // Add padding around image
//                     }}
//                     onError={(e) => {
//                       console.error("Failed to load image:", project.image);
//                       // Show gradient on error
//                       e.target.style.display = "none";
//                       e.target.nextSibling.style.display = "flex";
//                     }}
//                   />
//                 ) : null}

//                 {/* Gradient background (shown if no image or image fails) */}
//                 <div
//                   style={{
//                     display: project.image ? "none" : "flex",
//                     height: "250px",
//                     background:
//                       "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <div
//                     style={{
//                       color: "white",
//                       fontSize: "3rem",
//                       fontWeight: "900",
//                       opacity: "0.3",
//                       fontFamily: "var(--font-display)",
//                     }}
//                   >
//                     {project.title.charAt(0)}
//                   </div>
//                 </div>

//                 <Card.Body className="project-content d-flex flex-column">
//                   <h3 className="project-title">{project.title}</h3>
//                   <p className="project-description flex-grow-1">
//                     {project.description}
//                   </p>
//                   <div className="mb-3">
//                     {project.technologies.map((tech, idx) => (
//                       <Badge key={idx} className="tech-badge">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="d-flex gap-3 flex-wrap">
//                     <a
//                       href={project.link}
//                       className="project-link"
//                       onClick={(e) =>
//                         project.link === "#" && e.preventDefault()
//                       }
//                     >
//                       Live Demo <FaExternalLinkAlt />
//                     </a>
//                     <a
//                       href={project.github}
//                       className="project-link"
//                       onClick={(e) =>
//                         project.github === "#" && e.preventDefault()
//                       }
//                     >
//                       Code <FaGithub />
//                     </a>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Call to Action */}
//         <Row className="mt-5">
//           <Col>
//             <Card className="info-card text-center">
//               <Card.Body>
//                 <h3
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     color: "var(--color-primary)",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   Want to see more?
//                 </h3>
//                 <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
//                   I'm constantly working on new projects. Check out my GitHub
//                   for more!
//                 </p>
//                 <Button
//                   href="https://github.com/nnuwansa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-custom btn-primary-custom"
//                 >
//                   Visit My GitHub
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Projects;

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
