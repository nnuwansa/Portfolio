// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";

// function NavigationBar() {
//   return (
//     <Navbar expand="lg" fixed="top" className="navbar">
//       <Container>
//         <Navbar.Brand href="#home">SK</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#experience">Experience</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";

// function NavigationBar() {
//   const location = useLocation();

//   return (
//     <Navbar expand="lg" fixed="top" className="navbar">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           SK
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
//               Home
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/about"
//               active={location.pathname === "/about"}
//             >
//               About
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/experience"
//               active={location.pathname === "/experience"}
//             >
//               Experience
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/projects"
//               active={location.pathname === "/projects"}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/contact"
//               active={location.pathname === "/contact"}
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          NN
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/experience"
              className={location.pathname === "/experience" ? "active" : ""}
            >
              Experience
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
