// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "projects", "skills", "contact"];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "ExportHaven (SDGP)",
//       tech: "Digital Platform",
//       description:
//         "A digital platform streamlining Sri Lanka's export trade by connecting manufacturers with foreign suppliers, offering efficient order matching and supply chain management.",
//       image:
//         "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=300&fit=crop",
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "Weather Forecast App",
//       tech: "Spring Boot, React + Frontend",
//       description:
//         "A Weather App that provides real-time weather updates using the OpenWeatherMap API with Spring Boot backend & React Frontend.",
//       image:
//         "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop",
//       featured: false,
//     },
//     {
//       id: 3,
//       title: "Digital Clock App",
//       tech: "Python (Tkinter)",
//       description:
//         "A simple Digital Clock application built using Python (Tkinter), displaying the current time and weather information based on the city entered by the user.",
//       image:
//         "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&h=300&fit=crop",
//       featured: false,
//     },

//     {
//       id: 6,
//       title: "Plane Management System",
//       tech: "Java",
//       description:
//         "A comprehensive plane management system built with Java for tracking flights, bookings, and aircraft maintenance.",
//       image:
//         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop",
//       featured: false,
//     },
//   ];

//   const skills = [
//     { name: "Python", icon: "fab fa-python", color: "#3776ab" },
//     { name: "Java", icon: "fab fa-java", color: "#007396" },
//     { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
//     { name: "React", icon: "fab fa-react", color: "#61dafb" },
//     { name: "Spring Boot", icon: "fab fa-java", color: "#6db33f" },
//     { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
//     { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
//     { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
//     { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
//     { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
//     { name: "Figma", icon: "fab fa-figma", color: "#f24e1e" },
//     { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
//   ];

//   const contactInfo = [
//     {
//       icon: "fas fa-envelope",
//       title: "Email",
//       info: "nadini@example.com",
//       link: "mailto:nadini@example.com",
//     },
//     {
//       icon: "fab fa-linkedin",
//       title: "LinkedIn",
//       info: "Connect with me",
//       link: "#",
//     },
//     {
//       icon: "fab fa-github",
//       title: "GitHub",
//       info: "View my repos",
//       link: "#",
//     },
//   ];

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
//         @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           overflow-x: hidden;
//           background: #f5f5f5;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         .navbar-custom {
//           background: rgba(255, 255, 255, 0.98) !important;
//           backdrop-filter: blur(10px);
//           box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
//           padding: 1rem 0;
//           transition: all 0.3s ease;
//         }

//         .navbar-brand-custom {
//           font-weight: 700;
//           font-size: 1.5rem;
//           color: #1db89e !important;
//         }

//         .nav-link-custom {
//           color: #333 !important;
//           font-weight: 500;
//           margin: 0 0.8rem;
//           position: relative;
//           transition: color 0.3s ease;
//         }

//         .nav-link-custom:hover {
//           color: #1db89e !important;
//         }

//         .nav-link-custom::after {
//           content: '';
//           position: absolute;
//           width: 0;
//           height: 2px;
//           bottom: -5px;
//           left: 0;
//           background: #1db89e;
//           transition: width 0.3s ease;
//         }

//         .nav-link-custom:hover::after,
//         .nav-link-custom.active::after {
//           width: 100%;
//         }

//         .hero-section {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
//           display: flex;
//           align-items: center;
//           position: relative;
//           overflow: hidden;
//           padding: 100px 0 60px;
//         }

//         .hero-section::before {
//           content: '';
//           position: absolute;
//           width: 500px;
//           height: 500px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 50%;
//           top: -150px;
//           right: -150px;
//           animation: float 8s ease-in-out infinite;
//         }

//         .hero-section::after {
//           content: '';
//           position: absolute;
//           width: 400px;
//           height: 400px;
//           background: rgba(255, 255, 255, 0.08);
//           border-radius: 50%;
//           bottom: -150px;
//           left: -150px;
//           animation: float 10s ease-in-out infinite reverse;
//         }

//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           33% { transform: translate(30px, -30px) rotate(120deg); }
//           66% { transform: translate(-20px, 20px) rotate(240deg); }
//         }

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           color: white;
//         }

//         .hero-title {
//           font-size: 3.5rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           animation: fadeInUp 1s ease;
//         }

//         .hero-name {
//           background: linear-gradient(90deg, #ffd700, #ffed4e);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero-subtitle {
//           font-size: 1.5rem;
//           margin-bottom: 1rem;
//           opacity: 0.95;
//           animation: fadeInUp 1s ease 0.2s backwards;
//         }

//         .hero-emoji {
//           display: inline-block;
//           animation: wave 2s ease-in-out infinite;
//         }

//         @keyframes wave {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(20deg); }
//           75% { transform: rotate(-20deg); }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .profile-wrapper {
//           position: relative;
//           animation: fadeInRight 1s ease;
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .profile-image {
//           width: 350px;
//           height: 350px;
//           border-radius: 50%;
//           border: 8px solid rgba(255, 255, 255, 0.3);
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//           margin: 0 auto;
//           position: relative;
//           overflow: hidden;
//         }

//         .profile-image::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//           animation: shine 3s ease-in-out infinite;
//         }

//         @keyframes shine {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         .btn-download {
//           background: #1db89e;
//           color: white;
//           padding: 14px 40px;
//           border-radius: 50px;
//           font-weight: 600;
//           border: none;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//           margin-top: 2rem;
//           box-shadow: 0 10px 30px rgba(29, 184, 158, 0.3);
//         }

//         .btn-download:hover {
//           background: #17a085;
//           transform: translateY(-3px);
//           box-shadow: 0 15px 40px rgba(29, 184, 158, 0.4);
//           color: white;
//         }

//         section {
//           padding: 80px 0;
//         }

//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           text-align: center;
//           margin-bottom: 3rem;
//           color: #1db89e;
//           position: relative;
//           display: inline-block;
//           width: 100%;
//         }

//         .section-title::after {
//           content: '';
//           position: absolute;
//           width: 100px;
//           height: 4px;
//           background: linear-gradient(90deg, #667eea, #764ba2);
//           bottom: -10px;
//           left: 50%;
//           transform: translateX(-50%);
//           border-radius: 2px;
//         }

//         .about-section {
//           background: #fef5f7;
//         }

//         .about-content {
//           background: white;
//           border-radius: 20px;
//           padding: 3rem;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
//           line-height: 1.8;
//           font-size: 1.1rem;
//           color: #555;
//         }

//         .projects-section {
//           background: white;
//         }

//         .project-card {
//           background: white;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//           height: 100%;
//           margin-bottom: 30px;
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
//         }

//         .project-image {
//           width: 100%;
//           height: 220px;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .project-card:hover .project-image {
//           transform: scale(1.1);
//         }

//         .project-image-wrapper {
//           overflow: hidden;
//           position: relative;
//         }

//         .project-badge {
//           position: absolute;
//           top: 15px;
//           right: 15px;
//           background: rgba(29, 184, 158, 0.95);
//           color: white;
//           padding: 5px 15px;
//           border-radius: 20px;
//           font-size: 0.8rem;
//           font-weight: 600;
//         }

//         .project-content {
//           padding: 1.5rem;
//         }

//         .project-title {
//           font-size: 1.3rem;
//           font-weight: 600;
//           color: #333;
//           margin-bottom: 0.8rem;
//         }

//         .project-tech {
//           color: #667eea;
//           font-size: 0.9rem;
//           margin-bottom: 1rem;
//           font-weight: 500;
//         }

//         .project-description {
//           color: #666;
//           margin-bottom: 1.5rem;
//           font-size: 0.95rem;
//           line-height: 1.6;
//         }

//         .btn-view-project {
//           background: linear-gradient(135deg, #1db89e 0%, #17a085 100%);
//           color: white;
//           padding: 10px 30px;
//           border-radius: 50px;
//           border: none;
//           font-weight: 500;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .btn-view-project:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(29, 184, 158, 0.3);
//           color: white;
//         }

//         .skills-section {
//           background: #fef5f7;
//         }

//         .skill-card {
//           background: white;
//           border-radius: 15px;
//           padding: 2rem 1.5rem;
//           text-align: center;
//           box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//           transition: all 0.3s ease;
//           height: 100%;
//           margin-bottom: 20px;
//         }

//         .skill-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
//         }

//         .skill-icon {
//           font-size: 3.5rem;
//           margin-bottom: 1rem;
//           transition: transform 0.3s ease;
//         }

//         .skill-card:hover .skill-icon {
//           transform: scale(1.1);
//         }

//         .skill-name {
//           font-weight: 600;
//           color: #333;
//           font-size: 1.1rem;
//         }

//         .contact-section {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//         }

//         .contact-section .section-title {
//           color: white;
//         }

//         .contact-section .section-title::after {
//           background: white;
//         }

//         .contact-card {
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 20px;
//           padding: 2.5rem;
//           text-align: center;
//           transition: all 0.3s ease;
//           height: 100%;
//         }

//         .contact-card:hover {
//           background: rgba(255, 255, 255, 0.25);
//           transform: translateY(-5px);
//         }

//         .contact-icon {
//           font-size: 3rem;
//           margin-bottom: 1.5rem;
//           color: #ffd700;
//         }

//         .contact-card h4 {
//           font-weight: 600;
//           margin-bottom: 1rem;
//         }

//         .contact-link {
//           color: white;
//           text-decoration: none;
//           transition: color 0.3s ease;
//         }

//         .contact-link:hover {
//           color: #ffd700;
//         }

//         footer {
//           background: #1a1a1a;
//           color: white;
//           padding: 2.5rem 0;
//           text-align: center;
//         }

//         .social-links {
//           margin: 1.5rem 0;
//         }

//         .social-links a {
//           color: white;
//           font-size: 1.8rem;
//           margin: 0 1rem;
//           transition: all 0.3s ease;
//           display: inline-block;
//         }

//         .social-links a:hover {
//           color: #1db89e;
//           transform: translateY(-5px);
//         }

//         @media (max-width: 768px) {
//           .hero-title {
//             font-size: 2.5rem;
//           }

//           .hero-subtitle {
//             font-size: 1.2rem;
//           }

//           .profile-image {
//             width: 280px;
//             height: 280px;
//             margin-top: 2rem;
//           }

//           .section-title {
//             font-size: 2rem;
//           }

//           .skill-icon {
//             font-size: 2.5rem;
//           }
//         }
//       `}</style>

//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
//         <div className="container">
//           <a className="navbar-brand navbar-brand-custom" href="#home">
//             NN
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-end"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a
//                   className={`nav-link nav-link-custom ${
//                     activeSection === "home" ? "active" : ""
//                   }`}
//                   href="#home"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link nav-link-custom ${
//                     activeSection === "about" ? "active" : ""
//                   }`}
//                   href="#about"
//                 >
//                   About Me
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link nav-link-custom ${
//                     activeSection === "projects" ? "active" : ""
//                   }`}
//                   href="#projects"
//                 >
//                   Projects
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link nav-link-custom ${
//                     activeSection === "skills" ? "active" : ""
//                   }`}
//                   href="#skills"
//                 >
//                   Skills
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link nav-link-custom ${
//                     activeSection === "contact" ? "active" : ""
//                   }`}
//                   href="#contact"
//                 >
//                   Contact Me
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7 hero-content">
//               <h1 className="hero-title">
//                 Hello, I'm <span className="hero-name">Nadini Nuwansa</span>
//               </h1>
//               <p className="hero-subtitle">
//                 A Software Engineering Undergraduate{" "}
//                 <span className="hero-emoji">🚀</span>
//               </p>
//               <a href="#" className="btn-download">
//                 <i className="fas fa-download me-2"></i>Download CV
//               </a>
//             </div>
//             <div className="col-lg-5">
//               <div className="profile-wrapper">
//                 <div className="profile-image">
//                   <i
//                     className="fas fa-user"
//                     style={{
//                       fontSize: "150px",
//                       color: "rgba(255, 255, 255, 0.8)",
//                     }}
//                   ></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="about-section">
//         <div className="container">
//           <h2 className="section-title">About Me</h2>
//           <div className="row">
//             <div className="col-lg-10 mx-auto">
//               <div className="about-content">
//                 <p className="text-center">
//                   I am a Software Engineering undergraduate at IIT with
//                   experience in Python and Odoo 16 ERP customization. Currently
//                   interning at Sampath IT Solutions, I am working on the NAVIGO
//                   project, contributing to real-time systems and digital
//                   platforms that solve business problems. Passionate about
//                   building scalable, user-friendly solutions, I thrive in
//                   collaborative environments and aim to create meaningful impact
//                   through software development.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="projects-section">
//         <div className="container">
//           <h2 className="section-title">Projects</h2>
//           <div className="row">
//             {projects.map((project) => (
//               <div key={project.id} className="col-md-6 col-lg-4">
//                 <div className="project-card">
//                   <div className="project-image-wrapper">
//                     <img
//                       src={project.image}
//                       className="project-image"
//                       alt={project.title}
//                     />
//                     {project.featured && (
//                       <span className="project-badge">Featured</span>
//                     )}
//                   </div>
//                   <div className="project-content">
//                     <h3 className="project-title">{project.title}</h3>
//                     <p className="project-tech">
//                       <i className="fas fa-code me-2"></i>
//                       {project.tech}
//                     </p>
//                     <p className="project-description">{project.description}</p>
//                     <a href="#" className="btn-view-project">
//                       VIEW PROJECT <i className="fas fa-arrow-right ms-2"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="skills-section">
//         <div className="container">
//           <h2 className="section-title">Skills</h2>
//           <div className="row g-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="col-6 col-md-4 col-lg-2">
//                 <div className="skill-card">
//                   <div className="skill-icon" style={{ color: skill.color }}>
//                     <i className={skill.icon}></i>
//                   </div>
//                   <p className="skill-name">{skill.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact-section">
//         <div className="container">
//           <h2 className="section-title">Contact Me</h2>
//           <div className="row g-4">
//             {contactInfo.map((contact, index) => (
//               <div key={index} className="col-md-4">
//                 <div className="contact-card">
//                   <div className="contact-icon">
//                     <i className={contact.icon}></i>
//                   </div>
//                   <h4>{contact.title}</h4>
//                   <a href={contact.link} className="contact-link">
//                     {contact.info}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer>
//         <div className="container">
//           <div className="social-links">
//             <a href="#" aria-label="LinkedIn">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="#" aria-label="GitHub">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="#" aria-label="Twitter">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" aria-label="Instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//           <p>&copy; 2024 Nadini Nuwansa. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "projects", "skills", "contact"];
//       const scrollPosition = window.scrollY + 100;
//       setScrolled(window.scrollY > 50);

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "ExportHaven (SDGP)",
//       tech: "Digital Platform",
//       description:
//         "A digital platform streamlining Sri Lanka's export trade by connecting manufacturers with foreign suppliers, offering efficient order matching and supply chain management.",
//       image:
//         "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=300&fit=crop",
//       featured: true,
//       gradient: "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
//     },
//     {
//       id: 2,
//       title: "Weather Forecast App",
//       tech: "Spring Boot, React + Frontend",
//       description:
//         "A Weather App that provides real-time weather updates using the OpenWeatherMap API with Spring Boot backend & React Frontend.",
//       image:
//         "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop",
//       featured: false,
//       gradient: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
//     },
//     {
//       id: 3,
//       title: "Digital Clock App",
//       tech: "Python (Tkinter)",
//       description:
//         "A simple Digital Clock application built using Python (Tkinter), displaying the current time and weather information based on the city entered by the user.",
//       image:
//         "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&h=300&fit=crop",
//       featured: false,
//       gradient: "linear-gradient(135deg, #059669 0%, #14b8a6 100%)",
//     },
//     {
//       id: 4,
//       title: "Plane Management System",
//       tech: "Java",
//       description:
//         "A comprehensive plane management system built with Java for tracking flights, bookings, and aircraft maintenance.",
//       image:
//         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop",
//       featured: false,
//       gradient: "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)",
//     },
//   ];

//   const skills = [
//     { name: "Python", icon: "fab fa-python", color: "#3776ab" },
//     { name: "Java", icon: "fab fa-java", color: "#007396" },
//     { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
//     { name: "React", icon: "fab fa-react", color: "#61dafb" },
//     { name: "Spring Boot", icon: "fab fa-java", color: "#6db33f" },
//     { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
//     { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
//     { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
//     { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
//     { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
//     { name: "Figma", icon: "fab fa-figma", color: "#f24e1e" },
//     { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
//   ];

//   const contactInfo = [
//     {
//       icon: "fas fa-envelope",
//       title: "Email",
//       info: "nadini@example.com",
//       link: "mailto:nadini@example.com",
//     },
//     {
//       icon: "fab fa-linkedin",
//       title: "LinkedIn",
//       info: "Connect with me",
//       link: "#",
//     },
//     {
//       icon: "fab fa-github",
//       title: "GitHub",
//       info: "View my repos",
//       link: "#",
//     },
//   ];

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif" }}>
//       {/* Font Awesome CDN - Multiple fallbacks */}
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
//         integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
//         crossOrigin="anonymous"
//       />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

//         /* Font Awesome Fix */
//         @font-face {
//           font-family: 'Font Awesome 6 Free';
//           font-style: normal;
//           font-weight: 900;
//           font-display: block;
//           src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2) format("woff2");
//         }

//         @font-face {
//           font-family: 'Font Awesome 6 Brands';
//           font-style: normal;
//           font-weight: 400;
//           font-display: block;
//           src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2) format("woff2");
//         }

//         .fa, .fas, .far, .fal, .fad, .fab {
//           -moz-osx-font-smoothing: grayscale;
//           -webkit-font-smoothing: antialiased;
//           display: inline-block;
//           font-style: normal;
//           font-variant: normal;
//           text-rendering: auto;
//           line-height: 1;
//         }

//         .fas, .fa-solid {
//           font-family: 'Font Awesome 6 Free';
//           font-weight: 900;
//         }

//         .fab, .fa-brands {
//           font-family: 'Font Awesome 6 Brands';
//           font-weight: 400;
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           overflow-x: hidden;
//           background: #1b2a4e;
//           color: white;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         /* Animations */
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
//           50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4); }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         @keyframes shine {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         /* Navbar */
//         .navbar-custom {
//           background: rgba(15, 23, 42, 0.8) !important;
//           backdrop-filter: blur(10px);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           transition: all 0.3s ease;
//         }

//         .navbar-custom.scrolled {
//           background: rgba(15, 23, 42, 0.95) !important;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//         }

//         .navbar-brand-custom {
//           font-weight: 800;
//           font-size: 1.8rem;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .nav-link-custom {
//           color: #cbd5e1 !important;
//           font-weight: 600;
//           font-size: 0.875rem;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//           margin: 0 0.8rem;
//           position: relative;
//           transition: all 0.3s ease;
//         }

//         .nav-link-custom:hover {
//           color: #a78bfa !important;
//         }

//         .nav-link-custom::after {
//           content: '';
//           position: absolute;
//           width: 0;
//           height: 2px;
//           bottom: -5px;
//           left: 0;
//           background: linear-gradient(90deg, #667eea, #764ba2);
//           transition: width 0.3s ease;
//         }

//         .nav-link-custom.active::after,
//         .nav-link-custom:hover::after {
//           width: 100%;
//         }

//         /* Glass Effect */
//         .glass {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         /* Hero Section */
//         .hero-section {
//           min-height: 100vh;
//           background: #1d2a49;
//           display: flex;
//           align-items: center;
//           position: relative;
//           overflow: hidden;
//           padding: 120px 0 60px;
//         }

//         .hero-bg-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(80px);
//           opacity: 0.3;
//           animation: float 8s ease-in-out infinite;
//         }

//         .hero-bg-blob-1 {
//           width: 500px;
//           height: 500px;
//           background: #9333ea;
//           top: 10%;
//           left: 10%;
//         }

//         .hero-bg-blob-2 {
//           width: 400px;
//           height: 400px;
//           background: #db2777;
//           top: 40%;
//           right: 10%;
//           animation-delay: 2s;
//         }

//         .hero-bg-blob-3 {
//           width: 350px;
//           height: 350px;
//           background: #2563eb;
//           bottom: 10%;
//           left: 50%;
//           animation-delay: 4s;
//         }

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           animation: slideInLeft 0.8s ease forwards;
//         }

//         .hero-badge {
//           display: inline-block;
//           padding: 0.5rem 1rem;
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 50px;
//           font-size: 0.9rem;
//           color: #a78bfa;
//           margin-bottom: 1.5rem;
//         }

//         .hero-title {
//           font-size: 4.5rem;
//           font-weight: 900;
//           line-height: 1.1;
//           margin-bottom: 1.5rem;
//         }

//         .hero-name {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero-subtitle {
//           font-size: 1.5rem;
//           color: #94a3b8;
//           margin-bottom: 2rem;
//         }

//         .btn-primary-custom {
//           background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
//           color: white;
//           padding: 1rem 2.5rem;
//           border-radius: 50px;
//           font-weight: 600;
//           border: none;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//           box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);
//         }

//         .btn-primary-custom:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 15px 40px rgba(147, 51, 234, 0.5);
//           color: white;
//         }

//         .btn-secondary-custom {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           color: white;
//           padding: 1rem 2.5rem;
//           border-radius: 50px;
//           font-weight: 600;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .btn-secondary-custom:hover {
//           background: rgba(255, 255, 255, 0.1);
//           color: white;
//         }

//         .profile-wrapper {
//           position: relative;
//           animation: slideInRight 0.8s ease forwards;
//         }

//         .profile-circle {
//           width: 350px;
//           height: 350px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           animation: glow 2s ease-in-out infinite;
//           margin: 0 auto;
//           position: relative;
//         }

//         .profile-circle-emoji {
//           font-size: 150px;
//         }

//         .profile-decoration {
//           position: absolute;
//           border-radius: 50%;
//           animation: pulse 2s ease-in-out infinite;
//         }

//         .profile-decoration-1 {
//           width: 100px;
//           height: 100px;
//           background: linear-gradient(135deg, #9333ea, #db2777);
//           top: -30px;
//           right: -30px;
//         }

//         .profile-decoration-2 {
//           width: 120px;
//           height: 120px;
//           background: linear-gradient(135deg, #2563eb, #06b6d4);
//           bottom: -40px;
//           left: -40px;
//           animation-delay: 1s;
//         }

//         /* Sections */
//         section {
//           padding: 100px 0;
//           position: relative;
//         }

//         .section-title {
//           font-size: 3rem;
//           font-weight: 800;
//           text-align: center;
//           margin-bottom: 4rem;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           position: relative;
//         }

//         /* About Section */
//         .about-content {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 30px;
//           padding: 3rem;
//           transition: all 0.3s ease;
//         }

//         .about-content:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }

//         .about-text {
//           font-size: 1.2rem;
//           line-height: 1.8;
//           color: #cbd5e1;
//         }

//         .stats-card {
//           text-align: center;
//           padding: 2rem;
//         }

//         .stats-number {
//           font-size: 3rem;
//           font-weight: 800;
//         }

//         .stats-label {
//           color: #94a3b8;
//           margin-top: 0.5rem;
//         }

//         /* Projects Section */
//         .project-card {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           overflow: hidden;
//           transition: all 0.3s ease;
//           height: 100%;
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }

//         .project-image-wrapper {
//           position: relative;
//           overflow: hidden;
//           height: 200px;
//         }

//         .project-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }

//         .project-card:hover .project-image {
//           transform: scale(1.1);
//         }

//         .project-overlay {
//           position: absolute;
//           inset: 0;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .project-card:hover .project-overlay {
//           opacity: 1;
//         }

//         .project-badge {
//           position: absolute;
//           top: 15px;
//           right: 15px;
//           background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
//           color: white;
//           padding: 0.4rem 1rem;
//           border-radius: 20px;
//           font-size: 0.75rem;
//           font-weight: 600;
//         }

//         .project-content {
//           padding: 1.5rem;
//         }

//         .project-title {
//           font-size: 1.2rem;
//           font-weight: 700;
//           color: white;
//           margin-bottom: 0.5rem;
//         }

//         .project-tech {
//           color: #a78bfa;
//           font-size: 0.85rem;
//           margin-bottom: 1rem;
//         }

//         .project-description {
//           color: #94a3b8;
//           font-size: 0.9rem;
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .btn-view-project {
//           background: white;
//           color: #0f172a;
//           padding: 0.6rem 1.5rem;
//           border-radius: 50px;
//           border: none;
//           font-weight: 600;
//           font-size: 0.85rem;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .btn-view-project:hover {
//           transform: scale(1.05);
//           color: #0f172a;
//         }

//         /* Skills Section */
//         .skill-card {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           padding: 2rem 1rem;
//           text-align: center;
//           transition: all 0.3s ease;
//           height: 100%;
//         }

//         .skill-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
//           background: rgba(255, 255, 255, 0.08);
//         }

//         .skill-icon {
//           font-size: 4rem;
//           margin-bottom: 1rem;
//           transition: transform 0.3s ease;
//         }

//         .skill-card:hover .skill-icon {
//           transform: scale(1.2) rotate(10deg);
//         }

//         .skill-name {
//           font-weight: 600;
//           color: white;
//           font-size: 1rem;
//         }

//         /* Contact Section */
//         .contact-card {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           padding: 3rem 2rem;
//           text-align: center;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           color: white;
//           display: block;
//           height: 100%;
//         }

//         .contact-card:hover {
//           transform: translateY(-10px);
//           background: rgba(255, 255, 255, 0.1);
//           color: white;
//         }

//         .contact-icon {
//           font-size: 4rem;
//           margin-bottom: 1.5rem;
//           transition: transform 0.3s ease;
//           color: #a78bfa;
//         }

//         .contact-card:hover .contact-icon {
//           transform: scale(1.2) rotate(12deg);
//         }

//         .contact-title {
//           font-size: 1.5rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//         }

//         .contact-info {
//           color: #a78bfa;
//           transition: color 0.3s ease;
//         }

//         .contact-card:hover .contact-info {
//           color: #c4b5fd;
//         }

//         /* Footer */
//         footer {
//           background: rgba(15, 23, 42, 0.95);
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//           padding: 3rem 0;
//         }

//         .social-links {
//           display: flex;
//           justify-content: center;
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//         }

//         .social-link {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 1.5rem;
//           transition: all 0.3s ease;
//           text-decoration: none;
//         }

//         .social-link:hover {
//           background: rgba(255, 255, 255, 0.1);
//           transform: translateY(-5px) scale(1.1);
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .hero-title {
//             font-size: 3rem;
//           }

//           .hero-subtitle {
//             font-size: 1.2rem;
//           }

//           .profile-circle {
//             width: 280px;
//             height: 280px;
//             margin-top: 3rem;
//           }

//           .profile-circle-emoji {
//             font-size: 120px;
//           }

//           .section-title {
//             font-size: 2.5rem;
//           }

//           .stats-number {
//             font-size: 2rem;
//           }
//         }
//       `}</style>

//       {/* Navbar */}
//       <nav
//         className={`navbar navbar-expand-lg fixed-top navbar-custom ${
//           scrolled ? "scrolled" : ""
//         }`}
//       >
//         <div className="container">
//           <a className="navbar-brand navbar-brand-custom" href="#home">
//             NN
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             style={{ border: "1px solid rgba(255,255,255,0.2)" }}
//           >
//             <span
//               className="navbar-toggler-icon"
//               style={{ filter: "invert(1)" }}
//             ></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-end"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav">
//               {["home", "about", "projects", "skills", "contact"].map(
//                 (section) => (
//                   <li className="nav-item" key={section}>
//                     <a
//                       className={`nav-link nav-link-custom ${
//                         activeSection === section ? "active" : ""
//                       }`}
//                       href={`#${section}`}
//                     >
//                       {section.charAt(0).toUpperCase() + section.slice(1)}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <div className="hero-bg-blob hero-bg-blob-1"></div>
//         <div className="hero-bg-blob hero-bg-blob-2"></div>
//         <div className="hero-bg-blob hero-bg-blob-3"></div>

//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7 hero-content">
//               <div className="hero-badge">👋 Welcome to my portfolio</div>
//               <h1 className="hero-title">
//                 Hello, I'm
//                 <br />
//                 <span className="hero-name">Nadini Nuwansa</span>
//               </h1>
//               <p className="hero-subtitle">
//                 A passionate Software Engineering Undergraduate crafting
//                 innovative solutions 🚀
//               </p>
//               <div className="d-flex gap-3 flex-wrap">
//                 <a href="#" className="btn-primary-custom">
//                   Download CV
//                 </a>
//                 <a href="#contact" className="btn-secondary-custom">
//                   Contact Me
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-5">
//               <div className="profile-wrapper">
//                 <div className="profile-circle">
//                   <div className="profile-circle-emoji">👩‍💻</div>
//                 </div>
//                 <div className="profile-decoration profile-decoration-1"></div>
//                 <div className="profile-decoration profile-decoration-2"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       {/* <section id="about">
//         <div className="container">
//           <h2 className="section-title">About Me</h2>
//           <div className="row">
//             <div className="col-lg-10 mx-auto">
//               <div className="about-content">
//                 <p className="about-text text-center mb-5">
//                   I am a Software Engineering undergraduate at IIT with
//                   experience in Python and Odoo 16 ERP customization. Currently
//                   interning at Sampath IT Solutions, I am working on the NAVIGO
//                   project, contributing to real-time systems and digital
//                   platforms that solve business problems. Passionate about
//                   building scalable, user-friendly solutions, I thrive in
//                   collaborative environments and aim to create meaningful impact
//                   through software development.
//                 </p>
//                 <div className="row mt-5">
//                   <div className="col-md-4">
//                     <div className="stats-card">
//                       <div
//                         className="stats-number"
//                         style={{ color: "#a78bfa" }}
//                       >
//                         15+
//                       </div>
//                       <div className="stats-label">Projects</div>
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="stats-card">
//                       <div
//                         className="stats-number"
//                         style={{ color: "#ec4899" }}
//                       >
//                         3+
//                       </div>
//                       <div className="stats-label">Years Learning</div>
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="stats-card">
//                       <div
//                         className="stats-number"
//                         style={{ color: "#3b82f6" }}
//                       >
//                         12+
//                       </div>
//                       <div className="stats-label">Technologies</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       {/* About Section */}
//       <section id="about">
//         <div className="container">
//           <h2 className="section-title">About Me</h2>
//           <div className="row">
//             <div className="col-lg-10 mx-auto">
//               <div className="about-content">
//                 <p className="about-text text-center mb-5">
//                   I am a motivated Software Engineering undergraduate with
//                   hands-on experience in full-stack development and database
//                   management. I have proven ability to develop scalable web
//                   applications and collaborate effectively in team environments.
//                   Passionate about innovative technology solutions, I thrive on
//                   applying technical skills to real-world projects. I am
//                   actively seeking software development internship opportunities
//                   where I can contribute to cutting-edge projects while
//                   continuously expanding my expertise in modern development
//                   practices.
//                 </p>
//                 <div className="row mt-5">
//                   <div className="col-md-4">
//                     <div className="stats-card">
//                       <div
//                         className="stats-number"
//                         style={{ color: "#a78bfa" }}
//                       >
//                         15+
//                       </div>
//                       <div className="stats-label">Projects</div>
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="stats-card">
//                       <div
//                         className="stats-number"
//                         style={{ color: "#ec4899" }}
//                       >
//                         3+
//                       </div>
//                       <div className="stats-label">Years Learning</div>
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="stats-card">
//                       <div
//                         className="stats-number"
//                         style={{ color: "#3b82f6" }}
//                       >
//                         12+
//                       </div>
//                       <div className="stats-label">Technologies</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects">
//         <div className="container">
//           <h2 className="section-title">Featured Projects</h2>
//           <div className="row g-4">
//             {projects.map((project, index) => (
//               <div key={project.id} className="col-md-6 col-lg-3">
//                 <div className="project-card">
//                   <div className="project-image-wrapper">
//                     <img
//                       src={project.image}
//                       className="project-image"
//                       alt={project.title}
//                     />
//                     <div
//                       className="project-overlay"
//                       style={{ background: project.gradient }}
//                     >
//                       <button className="btn-view-project">View Details</button>
//                     </div>
//                     {project.featured && (
//                       <span className="project-badge">Featured</span>
//                     )}
//                   </div>
//                   <div className="project-content">
//                     <h3 className="project-title">{project.title}</h3>
//                     <p className="project-tech">{project.tech}</p>
//                     <p className="project-description">{project.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills">
//         <div className="container">
//           <h2 className="section-title">Skills & Technologies</h2>
//           <div className="row g-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="col-6 col-md-4 col-lg-2">
//                 <div className="skill-card">
//                   <div className="skill-icon">
//                     <i
//                       className={skill.icon}
//                       style={{ color: skill.color }}
//                     ></i>
//                   </div>
//                   <p className="skill-name">{skill.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       {/* Contact Section */}
//       <section id="contact">
//         <div className="container">
//           <h2 className="section-title">Get In Touch</h2>
//           <div className="row g-4">
//             {contactInfo.map((contact, index) => (
//               <div key={index} className="col-md-4">
//                 <a href={contact.link} className="contact-card">
//                   <div className="contact-icon">
//                     <i className={contact.icon}></i>
//                   </div>
//                   <h3 className="contact-title">{contact.title}</h3>
//                   <p className="contact-info">{contact.info}</p>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       {/* Footer */}
//       <footer>
//         <div className="container">
//           <div className="social-links">
//             <a href="#" className="social-link" aria-label="LinkedIn">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="#" className="social-link" aria-label="GitHub">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="#" className="social-link" aria-label="Twitter">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="social-link" aria-label="Instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//           <p className="text-center" style={{ color: "#94a3b8" }}>
//             © 2024 Nadini Nuwansa. Crafted with 💜 and creativity
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Gamified Task Completion System - Achieve+",
      tech: "Java, Spring Boot, React.js, PostgreSQL",
      description:
        "Developed a comprehensive full-stack gamified task management application to enhance team productivity and work-life balance with leaderboards, achievements, and progress tracking systems.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      featured: true,
      gradient: "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
      github: "https://github.com/yourusername/achieve-plus",
    },
    {
      id: 2,
      title: "Real-Time Event Ticketing System",
      tech: "Java, Spring Boot, React.js, MySQL",
      description:
        "Created a dynamic ticketing system applying OOP concepts with the Producer-Consumer pattern for concurrent ticket releases and purchases. Features a robust backend API with the Spring Boot framework.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
      featured: false,
      gradient: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
      github: "https://github.com/yourusername/event-ticketing-system",
    },
    {
      id: 3,
      title: "UN SDG Website - Life Below Water",
      tech: "HTML, CSS, JavaScript",
      description:
        "Developed a comprehensive, fully responsive website promoting ocean conservation and sustainable fishing practices using HTML, CSS, and JavaScript with team collaboration on content development.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
      featured: false,
      gradient: "linear-gradient(135deg, #059669 0%, #14b8a6 100%)",
      github: "https://github.com/yourusername/life-below-water",
    },
    {
      id: 4,
      title: "Plane Management System",
      tech: "Java",
      description:
        "A comprehensive plane management system built with Java for tracking flights, bookings, and aircraft maintenance.",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=300&fit=crop",
      featured: false,
      gradient: "linear-gradient(135deg, #1c6fc1 0%, #7724c5 100%)",
      github: "#",
    },
  ];

  const skills = [
    { name: "Python", icon: "fab fa-python", color: "#3776ab" },
    { name: "Java", icon: "fab fa-java", color: "#007396" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "React", icon: "fab fa-react", color: "#61dafb" },
    { name: "Spring Boot", icon: "fab fa-java", color: "#6db33f" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
    { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
    { name: "Figma", icon: "fab fa-figma", color: "#f24e1e" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
  ];

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      info: "nadininuwansa@gmail.com",
      link: "mailto:nadininuwansa@gmail.com",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      info: "Connect with me",
      link: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      info: "View my repos",
      link: "https://github.com/yourusername",
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        /* Font Awesome Fix */
        @font-face {
          font-family: 'Font Awesome 6 Free';
          font-style: normal;
          font-weight: 900;
          font-display: block;
          src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2) format("woff2");
        }
        
        @font-face {
          font-family: 'Font Awesome 6 Brands';
          font-style: normal;
          font-weight: 400;
          font-display: block;
          src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2) format("woff2");
        }
        
        .fa, .fas, .far, .fal, .fad, .fab {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
        }
        
        .fas, .fa-solid {
          font-family: 'Font Awesome 6 Free';
          font-weight: 900;
        }
        
        .fab, .fa-brands {
          font-family: 'Font Awesome 6 Brands';
          font-weight: 400;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
          background: #1b2a4e;
          color: white;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Navbar */
        .navbar-custom {
          background: rgba(15, 23, 42, 0.8) !important;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .navbar-custom.scrolled {
          background: rgba(15, 23, 42, 0.95) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .navbar-brand-custom {
          font-weight: 800;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-link-custom {
          color: #cbd5e1 !important;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0.8rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #a78bfa !important;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }

        .nav-link-custom.active::after,
        .nav-link-custom:hover::after {
          width: 100%;
        }

        /* Glass Effect */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          background: #1d2a49;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 0 60px;
        }

        .hero-bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }

        .hero-bg-blob-1 {
          width: 500px;
          height: 500px;
          background: #9333ea;
          top: 10%;
          left: 10%;
        }

        .hero-bg-blob-2 {
          width: 400px;
          height: 400px;
          background: #db2777;
          top: 40%;
          right: 10%;
          animation-delay: 2s;
        }

        .hero-bg-blob-3 {
          width: 350px;
          height: 350px;
          background: #2563eb;
          bottom: 10%;
          left: 50%;
          animation-delay: 4s;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          animation: slideInLeft 0.8s ease forwards;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-size: 0.9rem;
          color: #a78bfa;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-name {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);
        }

        .btn-primary-custom:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(147, 51, 234, 0.5);
          color: white;
        }

        .btn-secondary-custom {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-secondary-custom:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .profile-wrapper {
          position: relative;
          animation: slideInRight 0.8s ease forwards;
        }

        .profile-circle {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: glow 2s ease-in-out infinite;
          margin: 0 auto;
          position: relative;
        }

        .profile-circle-emoji {
          font-size: 150px;
        }

        .profile-decoration {
          position: absolute;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        // .profile-decoration-1 {
        //   width: 100px;
        //   height: 100px;
        //   background: linear-gradient(135deg, #9333ea, #db2777);
        //   top: -30px;
        //   right: -30px;
        // }

        // .profile-decoration-2 {
        //   width: 120px;
        //   height: 120px;
        //   background: linear-gradient(135deg, #2563eb, #06b6d4);
        //   bottom: -40px;
        //   left: -40px;
        //   animation-delay: 1s;
        // }

        /* Sections */
        section {
          padding: 100px 0;
          position: relative;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        /* About Section */
        .about-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 3rem;
          transition: all 0.3s ease;
        }

        .about-content:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #cbd5e1;
        }

        .stats-card {
          text-align: center;
          padding: 2rem;
        }

        .stats-number {
          font-size: 3rem;
          font-weight: 800;
        }

        .stats-label {
          color: #94a3b8;
          margin-top: 0.5rem;
        }

        /* Projects Section */
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .project-tech {
          color: #a78bfa;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .btn-view-project {
          background: white;
          color: #0f172a;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
        }

        .btn-view-project:hover {
          transform: scale(1.05);
          color: #0f172a;
        }

        /* Skills Section */
        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }

        .skill-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .skill-name {
          font-weight: 600;
          color: white;
          font-size: 1rem;
        }

        /* Contact Section */
        .contact-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
          text-decoration: none;
          color: white;
          display: block;
          height: 100%;
        }

        .contact-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .contact-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
          color: #a78bfa;
        }

        .contact-card:hover .contact-icon {
          transform: scale(1.2) rotate(12deg);
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .contact-info {
          color: #a78bfa;
          transition: color 0.3s ease;
        }

        .contact-card:hover .contact-info {
          color: #c4b5fd;
        }

        /* Footer */
        footer {
          background: rgba(15, 23, 42, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px) scale(1.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .profile-circle {
            width: 280px;
            height: 280px;
            margin-top: 3rem;
          }

          .profile-circle-emoji {
            font-size: 120px;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .stats-number {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-custom ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand navbar-brand-custom" href="#home">
            NN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {["home", "about", "projects", "skills", "contact"].map(
                (section) => (
                  <li className="nav-item" key={section}>
                    <a
                      className={`nav-link nav-link-custom ${
                        activeSection === section ? "active" : ""
                      }`}
                      href={`#${section}`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg-blob hero-bg-blob-1"></div>
        <div className="hero-bg-blob hero-bg-blob-2"></div>
        <div className="hero-bg-blob hero-bg-blob-3"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 hero-content">
              <div className="hero-badge">👋 Welcome to my portfolio</div>
              <h1 className="hero-title">
                Hello, I'm
                <br />
                <span className="hero-name">Nadini Nuwansa</span>
              </h1>
              <p className="hero-subtitle">
                A passionate Software Engineering Undergraduate crafting
                innovative solutions 🚀
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#" className="btn-primary-custom">
                  Download CV
                </a>
                <a href="#contact" className="btn-secondary-custom">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="profile-wrapper">
                <div className="profile-circle">
                  <div className="profile-circle-emoji">👩‍💻</div>
                </div>
                <div className="profile-decoration profile-decoration-1"></div>
                <div className="profile-decoration profile-decoration-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="about-content">
                <p className="about-text text-center mb-5">
                  I am a motivated Software Engineering undergraduate with
                  hands-on experience in full-stack development and database
                  management. I have proven ability to develop scalable web
                  applications and collaborate effectively in team environments.
                  Passionate about innovative technology solutions, I thrive on
                  applying technical skills to real-world projects. I am
                  actively seeking software development internship opportunities
                  where I can contribute to cutting-edge projects while
                  continuously expanding my expertise in modern development
                  practices.
                </p>
                {/* <div className="row mt-5">
                  <div className="col-md-4">
                    <div className="stats-card">
                      <div
                        className="stats-number"
                        style={{ color: "#a78bfa" }}
                      >
                        15+
                      </div>
                      <div className="stats-label">Projects</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stats-card">
                      <div
                        className="stats-number"
                        style={{ color: "#ec4899" }}
                      >
                        3+
                      </div>
                      <div className="stats-label">Years Learning</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stats-card">
                      <div
                        className="stats-number"
                        style={{ color: "#3b82f6" }}
                      >
                        12+
                      </div>
                      <div className="stats-label">Technologies</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-3">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      className="project-image"
                      alt={project.title}
                    />
                    <div
                      className="project-overlay"
                      style={{ background: project.gradient }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-view-project"
                      >
                        <i className="fab fa-github"></i> View on GitHub
                      </a>
                    </div>
                    {project.featured && (
                      <span className="project-badge">Featured</span>
                    )}
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tech">{project.tech}</p>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="row g-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i
                      className={skill.icon}
                      style={{ color: skill.color }}
                    ></i>
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="row g-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="col-md-4">
                <a
                  href={contact.link}
                  className="contact-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <i className={contact.icon}></i>
                  </div>
                  <h3 className="contact-title">{contact.title}</h3>
                  <p className="contact-info">{contact.info}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a
              href="https://linkedin.com/in/yourprofile"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/yourusername"
              className="social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="social-link"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/yourprofile"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-center" style={{ color: "#94a3b8" }}>
            © 2024 Nadini Nuwansa. Crafted with 💜 and creativity
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
