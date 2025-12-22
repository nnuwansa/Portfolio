// import React from "react";
// import { Container } from "react-bootstrap";

// function Footer() {
//   return (
//     <footer className="footer">
//       <Container>
//         <div className="footer-content">
//           <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
//             Designed & Built by Subathi Kumarasinghe
//           </p>
//           <p style={{ opacity: "0.7", fontSize: "0.9rem" }}>
//             © {new Date().getFullYear()} All rights reserved.
//           </p>
//         </div>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

// import React from "react";
// import { Container } from "react-bootstrap";

// function Footer() {
//   return (
//     <footer className="footer">
//       <Container>
//         <div className="footer-content">
//           <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
//             Designed & Built by Subathi Kumarasinghe
//           </p>
//           <p style={{ opacity: "0.7", fontSize: "0.9rem" }}>
//             © {new Date().getFullYear()} All rights reserved.
//           </p>
//         </div>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-content">
              <p
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                }}
              >
                Designed & Built by Nadini Nuwansa
              </p>
              <p
                style={{ opacity: "0.7", fontSize: "0.7rem", marginBottom: 0 }}
              >
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
