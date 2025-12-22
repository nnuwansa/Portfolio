// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <section className="hero-section">
//       <Container>
//         <Row className="align-items-center">
//           <Col lg={12}>
//             <h1 className="hero-title">SUBATHI KUMARASINGHE</h1>
//             <p className="hero-subtitle">ASSOCIATE SOFTWARE ENGINEER</p>
//             <p className="hero-description">
//               A motivated and detail-oriented software engineer with a strong
//               passion for building accessible, intuitive, and high-performance
//               digital experiences. Skilled in full-stack development with
//               expertise in Java, Spring Boot, RESTful APIs, ReactJS, and
//               database technologies such as MongoDB, MySQL, and SQL Server. I
//               enjoy creating clean, pixel-perfect interfaces while engineering
//               reliable backend systems that follow industry best practices.
//             </p>
//             <div className="mt-4">
//               <Button
//                 as={Link}
//                 to="/contact"
//                 className="btn-custom btn-primary-custom me-3"
//               >
//                 Get In Touch
//               </Button>
//               <Button
//                 as={Link}
//                 to="/projects"
//                 className="btn-custom btn-outline-custom"
//               >
//                 View Projects
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Home;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="hero-title">NADINI NUWANSA</h1>

            <p className="hero-subtitle">SOFTWARE ENGINEER - INTERN</p>

            <p className="hero-description">
              A motivated and detail-oriented software engineer with a strong
              passion for building accessible, intuitive, and high-performance
              digital experiences. Skilled in full-stack development with
              expertise in Java, Spring Boot, RESTful APIs, ReactJS, and
              database technologies such as MongoDB, MySQL,PostgreSQL and MSSQL
              Server. I enjoy creating clean, pixel-perfect interfaces while
              engineering reliable backend systems that follow industry best
              practices.
            </p>

            <div
              className="d-flex gap-3 flex-wrap"
              style={{ animation: "fadeInUp 1s ease-out 0.6s backwards" }}
            >
              <Button
                as={Link}
                to="/contact"
                className="btn-custom btn-primary-custom"
              >
                Get In Touch
              </Button>

              <Button
                as={Link}
                to="/projects"
                className="btn-custom btn-outline-custom"
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

export default Home;
