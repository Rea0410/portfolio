import React from "react";
import { Link } from "react-router-dom";

// import PMS from "../portfolio/PMS.jfif";
// import ICT from "../portfolio/ICT.png";
// import livelihoodScreenshot from "../portfolio/livelihood.png";

const Projects = () => {
 const projects = [
    {
  id: "kalahi-concepcion",
  title: "Kalahi-Concepcion",
  category: "Community / Web Application",
  description:
    "A web-based platform developed for the Kalahi program in Concepcion, designed to support community-related information, project activities, and digital access to relevant resources.",
  image: null,
  technologies: [
    "React.js",
    "JavaScript",
    "Bootstrap",
  ],
  liveDemo:
    "https://rea0410.github.io/Concepcion-Kalahi/",
},
  {
    id: "pms",
    title: "Personnel Management System",
    category: "Web Application",
    description:
      "A web-based system designed to streamline personnel information management and provide a centralized platform for managing employee records, positions, employment status, divisions, and office assignments.",
    image: null,
    technologies: [
      "React.js",
      "Node.js",
      "MySQL",
      "Bootstrap",
    ],
    github:
      "https://github.com/Rea0410/DOLE-EMS.git",
  },

  {
    id: "ict",
    title: "ICT Equipment Borrower Slip",
    category: "Equipment Management System",
    description:
      "A web-based application designed to manage and track ICT equipment borrowing transactions, providing an organized process for employees requesting laptops, projectors, and other IT resources.",
    image: null,
    technologies: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "LocalStorage",
    ],
    github:
      "https://github.com/Rea0410/ictbarrower.git",
  },

  {
    id: "livelihood",
    title: "Livelihood Proposal System",
    category: "Proposal Management System",
    description:
      "A web-based application designed to streamline the submission, tracking, and management of livelihood project proposals and related project information.",
    image: null,
    technologies: [
      "React.js",
      "Node.js",
      "MySQL",
      "Bootstrap",
    ],
    github:
      "https://github.com/Rea0410/livelihood_proposal_system.git",
  },
];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#0f172a",
      color: "#f8fafc",
      fontFamily: "Arial, sans-serif",
      padding: "40px",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    header: {
      marginBottom: "60px",
    },

    label: {
      color: "#38bdf8",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "2px",
    },

    title: {
      fontSize: "42px",
      margin: "10px 0 15px",
    },

    subtitle: {
      color: "#94a3b8",
      fontSize: "17px",
      lineHeight: "1.8",
      maxWidth: "750px",
    },

    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "25px",
    },

    card: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "18px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },

    imageContainer: {
      width: "100%",
      height: "220px",
      overflow: "hidden",
      background: "#020617",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    content: {
      padding: "25px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },

    category: {
      color: "#38bdf8",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "10px",
    },

    projectTitle: {
      fontSize: "23px",
      margin: "0 0 15px",
    },

    description: {
      color: "#94a3b8",
      fontSize: "14px",
      lineHeight: "1.7",
      flex: 1,
    },

    technologyList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      margin: "20px 0",
    },

    technology: {
      background: "#0f172a",
      border: "1px solid #334155",
      color: "#38bdf8",
      padding: "6px 10px",
      borderRadius: "6px",
      fontSize: "12px",
    },

    buttonContainer: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "10px",
    },

    detailsButton: {
      flex: 1,
      textAlign: "center",
      padding: "11px 15px",
      background: "#38bdf8",
      color: "#0f172a",
      borderRadius: "7px",
      textDecoration: "none",
      fontWeight: "700",
      fontSize: "14px",
    },

    githubButton: {
      flex: 1,
      textAlign: "center",
      padding: "11px 15px",
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      borderRadius: "7px",
      textDecoration: "none",
      fontWeight: "700",
      fontSize: "14px",
    },

    cta: {
      marginTop: "80px",
      padding: "50px",
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
      textAlign: "center",
    },

    ctaTitle: {
      fontSize: "30px",
      marginBottom: "15px",
    },

    ctaText: {
      color: "#94a3b8",
      lineHeight: "1.7",
      maxWidth: "650px",
      margin: "0 auto 25px",
    },

    primaryButton: {
      display: "inline-block",
      padding: "13px 25px",
      background: "#38bdf8",
      color: "#0f172a",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "700",
    },

    backButton: {
      display: "inline-block",
      marginTop: "40px",
      padding: "12px 22px",
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
    },

    footer: {
      textAlign: "center",
      color: "#64748b",
      padding: "50px 0 20px",
      marginTop: "70px",
      borderTop: "1px solid #1e293b",
    },
    placeholder: {
  width: "100%",
  height: "100%",
  minHeight: "220px",
  background: "#334155",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#38bdf8",
  fontSize: "18px",
  fontWeight: "700",
  padding: "20px",
  boxSizing: "border-box",
},

placeholderIcon: {
  fontSize: "45px",
  marginBottom: "15px",
},
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <header style={styles.header}>
          <span style={styles.label}>
            MY WORK
          </span>

          <h1 style={styles.title}>
            Projects
          </h1>

          <p style={styles.subtitle}>
            Here are some of the web applications and
            digital solutions I have developed. Each project
            focuses on solving real-world problems through
            technology and user-friendly design.
          </p>
        </header>


        {/* PROJECTS */}
        <div style={styles.projectsGrid}>

          {projects.map((project) => (

            <div
              key={project.id}
              style={styles.card}
            >

              {/* PROJECT IMAGE */}
              <div style={styles.imageContainer}>

  <div style={styles.placeholder}>
    <div style={styles.placeholderIcon}>
      💻
    </div>

    <div>
      {project.title}
    </div>
  </div>

</div>


              {/* PROJECT CONTENT */}
              <div style={styles.content}>

                <span style={styles.category}>
                  {project.category}
                </span>

                <h2 style={styles.projectTitle}>
                  {project.title}
                </h2>

                <p style={styles.description}>
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}
                <div style={styles.technologyList}>

                  {project.technologies.map(
                    (technology, index) => (

                      <span
                        key={index}
                        style={styles.technology}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* BUTTONS */}
               <div style={styles.buttonContainer}>

  <Link
    to={`/projects/${project.id}`}
    style={styles.detailsButton}
  >
    View Details
  </Link>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.githubButton}
  >
    GitHub
  </a>

  {project.liveDemo && (
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.githubButton}
    >
      Live Demo
    </a>
  )}

</div>

              </div>

            </div>

          ))}

        </div>


        {/* CTA */}
        <section style={styles.cta}>

          <h2 style={styles.ctaTitle}>
            Have a Project in Mind?
          </h2>

          <p style={styles.ctaText}>
            I'm always interested in new projects,
            collaborations, and opportunities to build
            useful and meaningful digital solutions.
          </p>

          <Link
            to="/contact"
            style={styles.primaryButton}
          >
            Let's Work Together →
          </Link>

        </section>


        {/* BACK BUTTON */}
        <Link
          to="/"
          style={styles.backButton}
        >
          ← Back to Dashboard
        </Link>


        {/* FOOTER */}
        <footer style={styles.footer}>
          © {new Date().getFullYear()} Realyn Linas Damasco.
          All rights reserved.
        </footer>

      </div>
    </div>
  );
};

export default Projects;