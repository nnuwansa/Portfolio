// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";

// // function Experience() {
// //   const experiences = [
// //     {
// //       period: "JUN – DEC 2025",
// //       title: "Software Engineering Intern - Full Time (06 Month)",
// //       company: "Sri Lanka Telecom (SLT), Colombo",
// //       description:
// //         "Assisted in developing a document tracking system that improved workflow efficiency within the CEO's office, while also contributing to the creation of internal web applications that enhanced overall operational processes. Additionally, gained hands-on exposure to industry-standard tools, technologies, and best practices used in enterprise-level software development.",
// //       technologies: ["JavaScript", "React", "SpringBoot", "MongoDB", "Postman"],
// //     },
// //     {
// //       period: "AUG – DEC 2025",
// //       title: "Software Developer - Part Time (04 Month)",
// //       company: "Department of Cooperative Development - Central Province",
// //       description:
// //         "Designed and developed web applications to streamline administrative processes within the government sector, while also supporting ongoing software solutions aimed at enhancing departmental efficiency and improving overall digital workflows.",
// //       technologies: ["JavaScript", "React", "SpringBoot", "MongoDB", "Postman"],
// //     },
// //   ];

// //   return (
// //     <section
// //       id="experience"
// //       className="py-5"
// //       style={{ background: "transparent" }}
// //     >
// //       <Container>
// //         <Row className="mb-5">
// //           <Col>
// //             <h2 className="section-title">Experience</h2>
// //             <p className="section-subtitle">My professional journey</p>
// //           </Col>
// //         </Row>
// //         <Row>
// //           <Col>
// //             {experiences.map((exp, index) => (
// //               <div key={index} className="experience-card">
// //                 <p className="experience-period">{exp.period}</p>
// //                 <h3 className="experience-title">{exp.title}</h3>
// //                 <p className="experience-company">{exp.company}</p>
// //                 <p className="experience-description">{exp.description}</p>
// //                 <div>
// //                   {exp.technologies.map((tech, idx) => (
// //                     <span key={idx} className="tech-badge">
// //                       {tech}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // }

// // export default Experience;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// function Experience() {
//   const experiences = [
//     {
//       period: "JUN – DEC 2025",
//       title: "Software Engineering Intern - Full Time (06 Month)",
//       company: "Sri Lanka Telecom (SLT), Colombo",
//       description:
//         "Assisted in developing a document tracking system that improved workflow efficiency within the CEO's office, while also contributing to the creation of internal web applications that enhanced overall operational processes. Additionally, gained hands-on exposure to industry-standard tools, technologies, and best practices used in enterprise-level software development.",
//       technologies: ["JavaScript", "React", "SpringBoot", "MongoDB", "Postman"],
//     },
//     {
//       period: "AUG – DEC 2025",
//       title: "Software Developer - Part Time (04 Month)",
//       company: "Department of Cooperative Development - Central Province",
//       description:
//         "Designed and developed web applications to streamline administrative processes within the government sector, while also supporting ongoing software solutions aimed at enhancing departmental efficiency and improving overall digital workflows.",
//       technologies: ["JavaScript", "React", "SpringBoot", "MongoDB", "Postman"],
//     },
//   ];

//   return (
//     <section className="page-section">
//       <Container>
//         <Row className="mb-5">
//           <Col>
//             <h1 className="page-title">Experience</h1>
//             <p className="page-subtitle">My professional journey</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             {experiences.map((exp, index) => (
//               <div key={index} className="experience-card">
//                 <p className="experience-period">{exp.period}</p>
//                 <h3 className="experience-title">{exp.title}</h3>
//                 <p className="experience-company">{exp.company}</p>
//                 <p className="experience-description">{exp.description}</p>
//                 <div>
//                   {exp.technologies.map((tech, idx) => (
//                     <span key={idx} className="tech-badge">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </Col>
//         </Row>

//         <Row className="mt-5">
//           <Col>
//             <div className="info-card">
//               <h3
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   color: "var(--color-primary)",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 What I Bring to the Table
//               </h3>
//               <Row>
//                 <Col md={4} className="mb-3">
//                   <div className="value-item">
//                     <h5
//                       style={{
//                         color: "var(--color-secondary)",
//                         marginBottom: "0.5rem",
//                       }}
//                     >
//                       Fast Learner
//                     </h5>
//                     <p style={{ fontSize: "0.95rem", opacity: "0.85" }}>
//                       Quick to adapt to new technologies and methodologies
//                     </p>
//                   </div>
//                 </Col>
//                 <Col md={4} className="mb-3">
//                   <div className="value-item">
//                     <h5
//                       style={{
//                         color: "var(--color-secondary)",
//                         marginBottom: "0.5rem",
//                       }}
//                     >
//                       Team Player
//                     </h5>
//                     <p style={{ fontSize: "0.95rem", opacity: "0.85" }}>
//                       Collaborative mindset with excellent communication skills
//                     </p>
//                   </div>
//                 </Col>
//                 <Col md={4} className="mb-3">
//                   <div className="value-item">
//                     <h5
//                       style={{
//                         color: "var(--color-secondary)",
//                         marginBottom: "0.5rem",
//                       }}
//                     >
//                       Problem Solver
//                     </h5>
//                     <p style={{ fontSize: "0.95rem", opacity: "0.85" }}>
//                       Strong analytical skills with a focus on practical
//                       solutions
//                     </p>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Experience;

import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      period: "JUN 2025 – DEC 2025",
      title: "Software Engineering Intern - Full Time (06 Months)",
      company: "Sri Lanka Telecom (SLT), Head Office - Colombo",
      description:
        "Assisted in developing a document tracking system that improved workflow efficiency within the CEO's office, while also contributing to the creation of internal web applications that enhanced overall operational processes. Additionally, gained hands-on exposure to industry-standard tools, technologies, and best practices used in enterprise-level software development.",
      technologies: [
        "JavaScript",
        "React",
        "SpringBoot",
        "MongoDB",
        "MSSQL",
        "Azure",
        "Postman",
        "Bootstrap",
        "Git",
      ],
    },
    {
      period: "AUG 2025 – DEC 2025",
      title: "Software Developer - Part Time (05 Months)",
      company: "Department of Cooperative Development - Central Province",
      description:
        "Designed and developed web applications to streamline administrative processes within the government sector, while also supporting ongoing software solutions aimed at enhancing departmental efficiency and improving overall digital workflows.",
      technologies: [
        "JavaScript",
        "React",
        "SpringBoot",
        "MongoDB",
        "Postman",
        "Bootstrap",
        "TailwindCSS",
      ],
    },
  ];

  const values = [
    {
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and methodologies",
    },
    {
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills",
    },
    {
      title: "Problem Solver",
      description:
        "Strong analytical skills with a focus on practical solutions",
    },
  ];

  return (
    <section className="page-section">
      <Container>
        {/* Page Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="page-title">Experience</h1>
            <p className="page-subtitle">My professional journey</p>
          </Col>
        </Row>

        {/* Experience Cards */}
        <Row>
          <Col>
            {experiences.map((exp, index) => (
              <Card key={index} className="experience-card mb-1">
                <Card.Body>
                  <p className="experience-period">{exp.period}</p>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>
                  <div>
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* What I Bring */}
        <Row className="mt-5">
          <Col>
            <Card className="info-card">
              <Card.Body>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-primary)",
                    marginBottom: "2rem",
                  }}
                >
                  What I Bring to the Table
                </h3>
                <Row>
                  {values.map((value, index) => (
                    <Col md={4} key={index} className="mb-3">
                      <div>
                        <h5
                          style={{
                            color: "var(--color-secondary)",
                            marginBottom: "0.5rem",
                            fontWeight: "600",
                          }}
                        >
                          {value.title}
                        </h5>
                        <p
                          style={{
                            fontSize: "0.95rem",
                            opacity: "0.85",
                            marginBottom: 0,
                          }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
