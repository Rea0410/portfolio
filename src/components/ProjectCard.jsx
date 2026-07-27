
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const styles = {
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

    placeholder: {
      width: "100%",
      height: "100%",
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

    title: {
      fontSize: "23px",
      margin: "0 0 15px",
      color: "#f8fafc",
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
  };

  return (
    <div style={styles.card}>

      {/* PROJECT IMAGE */}
      <div style={styles.imageContainer}>

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={styles.image}
          />
        ) : (
          <div style={styles.placeholder}>
            <div style={styles.placeholderIcon}>
              💻
            </div>

            <div>
              {project.title}
            </div>
          </div>
        )}

      </div>

      {/* PROJECT CONTENT */}
      <div style={styles.content}>

        {/* CATEGORY */}
        <span style={styles.category}>
          {project.category}
        </span>

        {/* TITLE */}
        <h2 style={styles.title}>
          {project.title}
        </h2>

        {/* DESCRIPTION */}
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

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;