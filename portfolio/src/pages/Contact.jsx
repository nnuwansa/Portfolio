// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// // import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

// // function Contact() {
// //   return (
// //     <section id="contact" className="py-5">
// //       <Container>
// //         <Row>
// //           <Col lg={8} className="mx-auto">
// //             <div className="contact-section text-center">
// //               <h2 className="section-title mb-4">Get In Touch</h2>
// //               <p
// //                 style={{
// //                   fontSize: "1.1rem",
// //                   lineHeight: "1.8",
// //                   marginBottom: "2rem",
// //                 }}
// //               >
// //                 I'm currently looking for new opportunities and my inbox is
// //                 always open. Whether you have a question or just want to say hi,
// //                 I'll try my best to get back to you!
// //               </p>

// //               <div className="social-links">
// //                 <a
// //                   href="https://github.com/yourusername"
// //                   className="social-icon"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <FaGithub />
// //                 </a>
// //                 <a
// //                   href="https://linkedin.com/in/yourusername"
// //                   className="social-icon"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <FaLinkedin />
// //                 </a>
// //                 <a href="mailto:your.email@example.com" className="social-icon">
// //                   <FaEnvelope />
// //                 </a>
// //                 <a href="tel:+1234567890" className="social-icon">
// //                   <FaPhone />
// //                 </a>
// //               </div>
// //             </div>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // }

// // export default Contact;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// function Contact() {
//   return (
//     <section className="page-section">
//       <Container>
//         <Row className="mb-5">
//           <Col>
//             <h1 className="page-title">Get In Touch</h1>
//             <p className="page-subtitle">
//               Let's connect and create something amazing
//             </p>
//           </Col>
//         </Row>

//         <Row>
//           <Col lg={6} className="mb-4">
//             <div className="contact-info-card">
//               <h3
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   color: "var(--color-primary)",
//                   marginBottom: "2rem",
//                 }}
//               >
//                 Contact Information
//               </h3>

//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <FaEnvelope />
//                 </div>
//                 <div>
//                   <h5>Email</h5>
//                   <a href="mailto:subathi@example.com">subathi@example.com</a>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <FaPhone />
//                 </div>
//                 <div>
//                   <h5>Phone</h5>
//                   <a href="tel:+94123456789">+94 123 456 789</a>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <FaMapMarkerAlt />
//                 </div>
//                 <div>
//                   <h5>Location</h5>
//                   <p>Colombo, Sri Lanka</p>
//                 </div>
//               </div>

//               <div className="social-links-contact">
//                 <a
//                   href="https://github.com/yourusername"
//                   className="social-icon-contact"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithub />
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/yourusername"
//                   className="social-icon-contact"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>
//           </Col>

//           <Col lg={6} className="mb-4">
//             <div className="contact-form-card">
//               <h3
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   color: "var(--color-primary)",
//                   marginBottom: "2rem",
//                 }}
//               >
//                 Send a Message
//               </h3>
//               <form>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control contact-input"
//                     id="name"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control contact-input"
//                     id="email"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="subject" className="form-label">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control contact-input"
//                     id="subject"
//                     placeholder="Subject"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="message" className="form-label">
//                     Message
//                   </label>
//                   <textarea
//                     className="form-control contact-input"
//                     id="message"
//                     rows="5"
//                     placeholder="Your message..."
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-custom btn-primary-custom w-100"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </Col>
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
//                 Currently Available
//               </h3>
//               <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
//                 I'm currently looking for new opportunities and my inbox is
//                 always open. Whether you have a question or just want to say hi,
//                 I'll try my best to get back to you!
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Contact;

import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Form submission functionality to be implemented!");
  };

  return (
    <section className="page-section">
      <Container>
        {/* Page Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Let's connect and create something amazing
            </p>
          </Col>
        </Row>

        {/* Contact Content */}
        <Row>
          {/* Contact Information */}
          <Col lg={6} className="mb-4">
            <Card className="contact-card">
              <Card.Body>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-primary)",
                    marginBottom: "2rem",
                  }}
                >
                  Contact Information
                </h3>

                {/* Email */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:nadininuwansa@gmail.com">
                      nadininuwansa@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <a href="tel:+94711739352">+94 71 17 39 352</a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h5>Location</h5>
                    <p>Kalutara, Sri Lanka</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-icons">
                  <a
                    href="https://github.com/nnuwansa"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nadini-nuwansa-ba7576293"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={6} className="mb-4">
            <Card className="contact-card">
              <Card.Body>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-primary)",
                    marginBottom: "2rem",
                  }}
                >
                  Send a Message
                </h3>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className="contact-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="your.email@example.com"
                      className="contact-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      className="contact-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your message..."
                      className="contact-input"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn-custom btn-primary-custom w-100"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Availability Notice */}
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
                  Currently Available
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: 0,
                  }}
                >
                  I'm currently looking for new opportunities and my inbox is
                  always open. Whether you have a question or just want to say
                  hi, I'll try my best to get back to you!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
