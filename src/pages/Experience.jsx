import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const experiences = [
    {
      year: "Present",
      role: "Full-Stack Web Developer",
      company: "DOLE Regional Office VI",
      description:
        "Designing, developing, and maintaining web-based applications and digital solutions that support employee management, reporting, administrative workflows, and organizational processes.",
      responsibilities: [
        "Develop responsive web applications using React.js and modern frontend technologies.",
        "Build backend services and APIs for data processing and system integration.",
        "Design and manage relational databases for web applications.",
        "Develop customized internal systems to improve office workflows and information management.",
        "Implement authentication, data management, and user-friendly interfaces.",
        "Maintain and improve existing applications based on organizational requirements.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "Bootstrap",
        "REST API",
      ],
    },

    {
      year: "Recent Projects",
      role: "Web Application Developer",
      company: "Internal Web Systems & Digital Solutions",
      description:
        "Developed and maintained several web-based systems designed to improve organizational processes and digital workflows.",
      responsibilities: [
        "Developed a Personnel Management System for managing employee information and personnel records.",
        "Created an ICT Equipment Borrower Slip System for tracking equipment borrowing requests.",
        "Developed a Livelihood Proposal Management System for proposal submission, monitoring, and tracking.",
        "Designed responsive interfaces focused on usability and efficient information management.",
        "Integrated frontend applications with backend services and databases.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "Git",
        "GitHub",
      ],
    },

    {
      year: "Continuous Learning",
      role: "Full-Stack Development",
      company: "Professional Development",
      description:
        "Continuously improving my knowledge and experience in modern web development, backend technologies, databases, deployment, and software engineering practices.",
      responsibilities: [
        "Exploring modern React.js development practices.",
        "Learning backend development and API architecture.",
        "Working with MySQL and PostgreSQL databases.",
        "Improving knowledge of application deployment and hosting.",
        "Exploring UI/UX principles and responsive web design.",
        "Practicing clean, maintainable, and scalable application development.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "PHP",
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "Git",
        "GitHub",
      ],
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
      margin: "10px 0",
    },

    subtitle: {
      color: "#94a3b8",
      fontSize: "17px",
      lineHeight: "1.8",
      maxWidth: "750px",
    },

    timeline: {
      position: "relative",
      marginLeft: "20px",
      borderLeft: "2px solid #334155",
      paddingLeft: "40px",
    },

    experienceItem: {
      position: "relative",
      marginBottom: "60px",
    },

    timelineDot: {
      position: "absolute",
      left: "-51px",
      top: "5px",
      width: "18px",
      height: "18px",
      background: "#38bdf8",
      borderRadius: "50%",
      border: "4px solid #0f172a",
      boxShadow: "0 0 0 2px #38bdf8",
    },

    year: {
      display: "inline-block",
      color: "#38bdf8",
      fontSize: "14px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "10px",
    },

    card: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "18px",
      padding: "35px",
    },

    role: {
      fontSize: "26px",
      margin: "0 0 8px",
    },

    company: {
      color: "#38bdf8",
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "20px",
    },

    description: {
      color: "#94a3b8",
      fontSize: "16px",
      lineHeight: "1.8",
      marginBottom: "25px",
    },

    sectionTitle: {
      fontSize: "16px",
      marginBottom: "15px",
      color: "#f8fafc",
    },

    responsibilities: {
      paddingLeft: "20px",
      marginBottom: "25px",
    },

    responsibility: {
      color: "#cbd5e1",
      lineHeight: "1.7",
      marginBottom: "10px",
    },

    technologyList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "15px",
    },

    technology: {
      background: "#0f172a",
      border: "1px solid #334155",
      color: "#38bdf8",
      padding: "8px 13px",
      borderRadius: "7px",
      fontSize: "13px",
      fontWeight: "600",
    },

    summarySection: {
      marginTop: "80px",
    },

    summaryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "30px",
    },

    summaryCard: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "15px",
      padding: "30px",
      textAlign: "center",
    },

    summaryIcon: {
      fontSize: "35px",
      marginBottom: "15px",
    },

    summaryNumber: {
      fontSize: "28px",
      color: "#38bdf8",
      margin: "10px 0",
    },

    summaryText: {
      color: "#94a3b8",
      margin: 0,
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
      fontSize: "32px",
      marginBottom: "15px",
    },

    ctaText: {
      color: "#94a3b8",
      lineHeight: "1.7",
      maxWidth: "650px",
      margin: "0 auto 25px",
    },

    button: {
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
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <header style={styles.header}>
          <span style={styles.label}>
            EXPERIENCE
          </span>

          <h1 style={styles.title}>
            My Professional Journey
          </h1>

          <p style={styles.subtitle}>
            My experience in full-stack web development,
            system development, database management, and
            building digital solutions for real-world
            organizational needs.
          </p>
        </header>


        {/* TIMELINE */}
        <div style={styles.timeline}>

          {experiences.map((experience, index) => (

            <div
              key={index}
              style={styles.experienceItem}
            >

              {/* TIMELINE DOT */}
              <div style={styles.timelineDot}></div>


              {/* YEAR */}
              <span style={styles.year}>
                {experience.year}
              </span>


              {/* EXPERIENCE CARD */}
              <div style={styles.card}>

                <h2 style={styles.role}>
                  {experience.role}
                </h2>

                <div style={styles.company}>
                  {experience.company}
                </div>

                <p style={styles.description}>
                  {experience.description}
                </p>


                {/* RESPONSIBILITIES */}
                <h3 style={styles.sectionTitle}>
                  Key Responsibilities
                </h3>

                <ul style={styles.responsibilities}>

                  {experience.responsibilities.map(
                    (responsibility, responsibilityIndex) => (

                      <li
                        key={responsibilityIndex}
                        style={styles.responsibility}
                      >
                        {responsibility}
                      </li>

                    )
                  )}

                </ul>


                {/* TECHNOLOGIES */}
                <h3 style={styles.sectionTitle}>
                  Technologies & Tools
                </h3>

                <div style={styles.technologyList}>

                  {experience.technologies.map(
                    (technology, technologyIndex) => (

                      <span
                        key={technologyIndex}
                        style={styles.technology}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* EXPERIENCE SUMMARY */}
        <section style={styles.summarySection}>

          <span style={styles.label}>
            EXPERIENCE HIGHLIGHTS
          </span>

          <h2 style={styles.title}>
            What I Bring
          </h2>


          <div style={styles.summaryGrid}>

            <div style={styles.summaryCard}>

              <div style={styles.summaryIcon}>
                💻
              </div>

              <h3 style={styles.summaryNumber}>
                Full-Stack
              </h3>

              <p style={styles.summaryText}>
                Frontend and backend web development
              </p>

            </div>


            <div style={styles.summaryCard}>

              <div style={styles.summaryIcon}>
                🗄️
              </div>

              <h3 style={styles.summaryNumber}>
                Database
              </h3>

              <p style={styles.summaryText}>
                Database design and data management
              </p>

            </div>


            <div style={styles.summaryCard}>

              <div style={styles.summaryIcon}>
                🚀
              </div>

              <h3 style={styles.summaryNumber}>
                Solutions
              </h3>

              <p style={styles.summaryText}>
                Building practical digital solutions
              </p>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section style={styles.cta}>

          <h2 style={styles.ctaTitle}>
            Let's Build Something Great
          </h2>

          <p style={styles.ctaText}>
            I'm interested in opportunities where I can use
            my development skills to create meaningful,
            efficient, and user-friendly digital solutions.
          </p>

          <Link
            to="/contact"
            style={styles.button}
          >
            Get In Touch →
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

export default Experience;