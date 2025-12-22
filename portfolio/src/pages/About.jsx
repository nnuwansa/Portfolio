// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";

// // function About() {
// //   return (
// //     <section id="about" className="py-5">
// //       <Container>
// //         <Row className="mb-5">
// //           <Col>
// //             <h2 className="section-title">About Me</h2>
// //             <p className="section-subtitle">
// //               Building the future, one line at a time
// //             </p>
// //           </Col>
// //         </Row>
// //         <Row>
// //           <Col lg={6} className="mb-4">
// //             <div className="slide-in-left">
// //               <h3
// //                 className="mb-4"
// //                 style={{
// //                   fontFamily: "var(--font-display)",
// //                   color: "var(--color-secondary)",
// //                 }}
// //               >
// //                 My Journey
// //               </h3>
// //               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
// //                 I bring a strong foundation in software engineering principles,
// //                 including OOP, MVC, and modern architectural patterns with a
// //                 commitment to clean, maintainable code. I continuously refine my
// //                 skills through personal projects, research, and hands-on
// //                 learning.
// //               </p>
// //               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
// //                 Known for being a fast learner, a collaborative team player, and
// //                 a dependable problem solver, I thrive in environments that
// //                 encourage innovation, quality, and continuous improvement.
// //               </p>
// //             </div>
// //           </Col>
// //           <Col lg={6} className="mb-4">
// //             <div className="slide-in-right">
// //               <h3
// //                 className="mb-4"
// //                 style={{
// //                   fontFamily: "var(--font-display)",
// //                   color: "var(--color-secondary)",
// //                 }}
// //               >
// //                 What Drives Me
// //               </h3>
// //               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
// //                 Dedicated to staying current with emerging technologies, I aim
// //                 to contribute to impactful projects that combine thoughtful
// //                 design, performance, and seamless user experience.
// //               </p>
// //               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
// //                 I believe in the power of technology to transform ideas into
// //                 reality, and I'm passionate about creating solutions that make a
// //                 real difference in people's lives.
// //               </p>
// //             </div>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // }

// // export default About;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// function About() {
//   return (
//     <section className="page-section">
//       <Container>
//         <Row className="mb-5">
//           <Col>
//             <h1 className="page-title">About Me</h1>
//             <p className="page-subtitle">
//               Building the future, one line at a time
//             </p>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg={6} className="mb-4">
//             <div className="slide-in-left">
//               <h3
//                 className="mb-4"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   color: "var(--color-secondary)",
//                 }}
//               >
//                 My Journey
//               </h3>
//               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
//                 I bring a strong foundation in software engineering principles,
//                 including OOP, MVC, and modern architectural patterns with a
//                 commitment to clean, maintainable code. I continuously refine my
//                 skills through personal projects, research, and hands-on
//                 learning.
//               </p>
//               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
//                 Known for being a fast learner, a collaborative team player, and
//                 a dependable problem solver, I thrive in environments that
//                 encourage innovation, quality, and continuous improvement.
//               </p>
//             </div>
//           </Col>
//           <Col lg={6} className="mb-4">
//             <div className="slide-in-right">
//               <h3
//                 className="mb-4"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   color: "var(--color-secondary)",
//                 }}
//               >
//                 What Drives Me
//               </h3>
//               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
//                 Dedicated to staying current with emerging technologies, I aim
//                 to contribute to impactful projects that combine thoughtful
//                 design, performance, and seamless user experience.
//               </p>
//               <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
//                 I believe in the power of technology to transform ideas into
//                 reality, and I'm passionate about creating solutions that make a
//                 real difference in people's lives.
//               </p>
//             </div>
//           </Col>
//         </Row>

//         <Row className="mt-5">
//           <Col>
//             <h3
//               className="mb-4"
//               style={{
//                 fontFamily: "var(--font-display)",
//                 color: "var(--color-primary)",
//                 fontSize: "2rem",
//               }}
//             >
//               Skills & Technologies
//             </h3>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6} lg={3} className="mb-4">
//             <div className="skill-category">
//               <h4 className="skill-category-title">Frontend</h4>
//               <div className="skill-list">
//                 <span className="skill-item">React</span>
//                 <span className="skill-item">JavaScript</span>
//                 <span className="skill-item">HTML5</span>
//                 <span className="skill-item">CSS3</span>
//                 <span className="skill-item">Bootstrap</span>
//               </div>
//             </div>
//           </Col>
//           <Col md={6} lg={3} className="mb-4">
//             <div className="skill-category">
//               <h4 className="skill-category-title">Backend</h4>
//               <div className="skill-list">
//                 <span className="skill-item">Java</span>
//                 <span className="skill-item">Spring Boot</span>
//                 <span className="skill-item">RESTful APIs</span>
//                 <span className="skill-item">Node.js</span>
//               </div>
//             </div>
//           </Col>
//           <Col md={6} lg={3} className="mb-4">
//             <div className="skill-category">
//               <h4 className="skill-category-title">Database</h4>
//               <div className="skill-list">
//                 <span className="skill-item">MongoDB</span>
//                 <span className="skill-item">MySQL</span>
//                 <span className="skill-item">SQL Server</span>
//               </div>
//             </div>
//           </Col>
//           <Col md={6} lg={3} className="mb-4">
//             <div className="skill-category">
//               <h4 className="skill-category-title">Tools</h4>
//               <div className="skill-list">
//                 <span className="skill-item">Git</span>
//                 <span className="skill-item">Postman</span>
//                 <span className="skill-item">Vite</span>
//                 <span className="skill-item">EmailJS</span>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default About;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  const skills = {
    frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Vite",
      "Tailwind CSS",
    ],
    backend: ["Java", "Spring Boot", "RESTful APIs", "Node.js"],
    database: ["MongoDB", "MySQL", "MSSQL Server", "PostgreSQL"],
    tools: [
      "Git",
      "Postman",
      "EmailJS",
      "VS Code",
      "Canva",
      "Figma",
      "Bitbucket",
    ],
  };

  return (
    <section className="page-section">
      <Container>
        {/* Page Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">
              Building the future, one line at a time
            </p>
          </Col>
        </Row>

        {/* About Content */}
        <Row className="mb-5">
          <Col lg={6} className="mb-2">
            <div className="slide-in-left">
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-secondary)",
                }}
              >
                My Journey
              </h3>
              <p style={{ lineHeight: "1.5", fontSize: "0.9rem" }}>
                I bring a strong foundation in software engineering principles,
                including OOP, MVC, and modern architectural patterns with a
                commitment to clean, maintainable code. I continuously refine my
                skills through personal projects, research, and hands-on
                learning.
              </p>
              <p style={{ lineHeight: "1.5", fontSize: "0.9rem" }}>
                Known for being a fast learner, a collaborative team player, and
                a dependable problem solver, I thrive in environments that
                encourage innovation, quality, and continuous improvement.
              </p>
            </div>
          </Col>

          <Col lg={6} className="mb-2">
            <div className="slide-in-right">
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-secondary)",
                }}
              >
                What Drives Me
              </h3>
              <p style={{ lineHeight: "1.5", fontSize: "0.9rem" }}>
                Dedicated to staying current with emerging technologies, I aim
                to contribute to impactful projects that combine thoughtful
                design, performance, and seamless user experience.
              </p>
              <p style={{ lineHeight: "1.5", fontSize: "0.9rem" }}>
                I believe in the power of technology to transform ideas into
                reality, and I'm passionate about creating solutions that make a
                real difference in people's lives.
              </p>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="mt-5">
          <Col>
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-primary)",
                fontSize: "2.5rem",
              }}
            >
              Skills & Technologies
            </h3>
          </Col>
        </Row>

        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card className="skill-category">
              <Card.Body>
                <h4 className="skill-category-title">Frontend</h4>
                <div className="d-flex flex-column gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card className="skill-category">
              <Card.Body>
                <h4 className="skill-category-title">Backend</h4>
                <div className="d-flex flex-column gap-2">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card className="skill-category">
              <Card.Body>
                <h4 className="skill-category-title">Database</h4>
                <div className="d-flex flex-column gap-2">
                  {skills.database.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card className="skill-category">
              <Card.Body>
                <h4 className="skill-category-title">Tools</h4>
                <div className="d-flex flex-column gap-2">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
