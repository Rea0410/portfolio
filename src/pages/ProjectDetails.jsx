import React from "react";
import { Link, useParams } from "react-router-dom";


import ICT from "../assets/ICT.png";
import livelihoodScreenshot from "../assets/livelihood.png";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projects = {
    pms: {
      title: "Personnel Management System",
      category: "Web Application",
  image: null,

      description:
        "The Personnel Management System (PMS) is a web-based application designed to streamline the management of employee information and personnel records. The system provides a centralized platform for managing employee details, positions, employment status, divisions, and office assignments.",

      overview:
        "This system was developed to help improve personnel information management and make employee records easier to organize, access, and maintain.",

      features: [
        "Centralized employee information management",
        "Employee profile and personnel records",
        "Position and employment status management",
        "Division and office assignment tracking",
        "Organized personnel information",
        "User-friendly web interface",
      ],

      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Bootstrap",
        "REST API",
      ],

      github: "https://github.com/Rea0410/DOLE-EMS.git",
    },

    ict: {
      title: "ICT Equipment Borrower Slip",
      category: "Equipment Management System",
      image: ICT,

      description:
        "The ICT Equipment Borrower Slip is a web-based system designed to efficiently manage and track the borrowing of ICT equipment within an organization. It provides a streamlined process for employees to request and borrow devices such as laptops, projectors, and other IT resources.",

      overview:
        "The system helps simplify equipment borrowing transactions and provides an organized way to document and monitor ICT equipment requests.",

      features: [
        "ICT equipment borrowing request",
        "Borrower information management",
        "Equipment details recording",
        "Printable borrower slip",
        "Borrowing transaction tracking",
        "User-friendly interface",
      ],

      technologies: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "LocalStorage",
        "React-to-Print",
      ],

      github: "https://github.com/Rea0410/ictbarrower.git",
    },

    livelihood: {
      title: "Livelihood Proposal System",
      category: "Proposal Management System",
      image: livelihoodScreenshot,

      description:
        "The Livelihood Proposal System is a web-based application designed to streamline the submission, tracking, and management of livelihood project proposals. The system enables users to submit proposals, monitor approval status, and organize project details for efficient coordination.",

      overview:
        "The system was designed to improve the management of livelihood proposals by providing a centralized platform for proposal processing, monitoring, and information management.",

      features: [
        "Livelihood proposal submission",
        "Proposal tracking and monitoring",
        "Proposal status management",
        "Project information management",
        "Beneficiary information",
        "Proposal document management",
        "Organized administrative workflow",
      ],

      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Bootstrap",
        "REST API",
      ],

      github:
        "https://github.com/Rea0410/livelihood_proposal_system.git",
    },
  };

  const project = projects[projectId];

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

    backButton: {
      display: "inline-block",
      marginBottom: "40px",
      padding: "11px 20px",
      border: "1px solid #38bdf8",
      borderRadius: "8px",
      color: "#38bdf8",
      textDecoration: "none",
      fontWeight: "600",
    },

    hero: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "50px",
      alignItems: "center",
      marginBottom: "70px",
    },

    category: {
      color: "#38bdf8",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
    },

    title: {
      fontSize: "48px",
      lineHeight: "1.2",
      margin: "15px 0 20px",
    },

    description: {
      color: "#94a3b8",
      fontSize: "17px",
      lineHeight: "1.8",
    },

    imageContainer: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
      padding: "15px",
    },

    image: {
      width: "100%",
      display: "block",
      borderRadius: "12px",
      objectFit: "cover",
    },

    buttonContainer: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
      marginTop: "30px",
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

    secondaryButton: {
      display: "inline-block",
      padding: "13px 25px",
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "700",
    },

    section: {
      marginBottom: "60px",
    },

    sectionLabel: {
      color: "#38bdf8",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "2px",
    },

    sectionTitle: {
      fontSize: "32px",
      margin: "10px 0 20px",
    },

    sectionText: {
      color: "#94a3b8",
      fontSize: "16px",
      lineHeight: "1.8",
      maxWidth: "850px",
    },

    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "15px",
      marginTop: "30px",
    },

    featureCard: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "10px",
      padding: "18px",
      color: "#cbd5e1",
    },

    technologyList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "25px",
    },

    technology: {
      padding: "10px 16px",
      background: "#1e293b",
      border: "1px solid #334155",
      color: "#38bdf8",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
    },

    bottomCta: {
      marginTop: "80px",
      padding: "50px",
      textAlign: "center",
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
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

    footer: {
      textAlign: "center",
      color: "#64748b",
      padding: "50px 0 20px",
      marginTop: "70px",
      borderTop: "1px solid #1e293b",
    },
  };

  // If project does not exist
  if (!project) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>

          <h1>
            Project Not Found
          </h1>

          <p style={styles.description}>
            The project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            style={styles.primaryButton}
          >
            ← Back to Projects
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* BACK BUTTON */}
        <Link
          to="/projects"
          style={styles.backButton}
        >
          ← Back to Projects
        </Link>


        {/* HERO */}
        <section style={styles.hero}>

          <div>

            <span style={styles.category}>
              {project.category}
            </span>

            <h1 style={styles.title}>
              {project.title}
            </h1>

            <p style={styles.description}>
              {project.description}
            </p>

            <div style={styles.buttonContainer}>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.primaryButton}
              >
                View on GitHub →
              </a>

              <Link
                to="/projects"
                style={styles.secondaryButton}
              >
                View Other Projects
              </Link>

            </div>

          </div>


          {/* PROJECT IMAGE */}
          <div style={styles.imageContainer}>

            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
            />

          </div>

        </section>


        {/* PROJECT OVERVIEW */}
        <section style={styles.section}>

          <span style={styles.sectionLabel}>
            PROJECT OVERVIEW
          </span>

          <h2 style={styles.sectionTitle}>
            About This Project
          </h2>

          <p style={styles.sectionText}>
            {project.overview}
          </p>

        </section>


        {/* FEATURES */}
        <section style={styles.section}>

          <span style={styles.sectionLabel}>
            FEATURES
          </span>

          <h2 style={styles.sectionTitle}>
            Key Features
          </h2>

          <div style={styles.featureGrid}>

            {project.features.map(
              (feature, index) => (

                <div
                  key={index}
                  style={styles.featureCard}
                >
                  ✓ {feature}
                </div>

              )
            )}

          </div>

        </section>


        {/* TECHNOLOGIES */}
        <section style={styles.section}>

          <span style={styles.sectionLabel}>
            TECHNOLOGIES
          </span>

          <h2 style={styles.sectionTitle}>
            Technologies & Tools
          </h2>

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

        </section>


        {/* CTA */}
        <section style={styles.bottomCta}>

          <h2 style={styles.ctaTitle}>
            Interested in My Work?
          </h2>

          <p style={styles.ctaText}>
            Feel free to explore my other projects or
            get in touch if you would like to discuss
            a project or collaboration.
          </p>

          <Link
            to="/contact"
            style={styles.primaryButton}
          >
            Contact Me →
          </Link>

        </section>


        {/* FOOTER */}
        <footer style={styles.footer}>
          © {new Date().getFullYear()} Realyn Linas Damasco.
          All rights reserved.
        </footer>

      </div>
    </div>
  );
};

export default ProjectDetails;