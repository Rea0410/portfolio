import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: "🎨",
      description:
        "Building responsive, interactive, and user-friendly interfaces for modern web applications.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React Router",
      ],
    },

    {
      category: "Backend Development",
      icon: "⚙️",
      description:
        "Developing backend services, APIs, and server-side applications that support web systems.",
      technologies: [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "REST API",
      ],
    },

    {
      category: "Database Management",
      icon: "🗄️",
      description:
        "Managing and organizing application data using relational database technologies.",
      technologies: [
        "MySQL",
        "MariaDB",
        "PostgreSQL",
        "SQL",
        "Database Design",
      ],
    },

    {
      category: "UI & UX Design",
      icon: "✨",
      description:
        "Creating clean, organized, and user-friendly interfaces focused on usability and responsive design.",
      technologies: [
        "Figma",
        "Responsive Design",
        "Wireframing",
        "UI Design",
        "User Experience",
      ],
    },

    {
      category: "Tools & Version Control",
      icon: "🛠️",
      description:
        "Using development tools and version control systems to manage projects and maintain code.",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "npm",
        "GitHub Pages",
      ],
    },

    {
      category: "Application Development",
      icon: "🚀",
      description:
        "Building complete web-based systems that integrate frontend interfaces, backend services, APIs, and databases.",
      technologies: [
        "Full-Stack Development",
        "Authentication",
        "API Integration",
        "CRUD Operations",
        "System Development",
      ],
    },
  ];

  const skillLevels = [
    {
      name: "React.js",
      level: "Advanced",
      percentage: 85,
    },
    {
      name: "JavaScript",
      level: "Advanced",
      percentage: 80,
    },
    {
      name: "HTML & CSS",
      level: "Advanced",
      percentage: 90,
    },
    {
      name: "Bootstrap",
      level: "Advanced",
      percentage: 85,
    },
    {
      name: "Node.js",
      level: "Intermediate",
      percentage: 70,
    },
    {
      name: "MySQL",
      level: "Advanced",
      percentage: 80,
    },
    {
      name: "PostgreSQL",
      level: "Intermediate",
      percentage: 65,
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
      percentage: 70,
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

    categoryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "25px",
    },

    categoryCard: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "18px",
      padding: "30px",
    },

    icon: {
      fontSize: "38px",
      marginBottom: "15px",
    },

    categoryTitle: {
      fontSize: "21px",
      marginBottom: "12px",
    },

    categoryDescription: {
      color: "#94a3b8",
      fontSize: "14px",
      lineHeight: "1.7",
      marginBottom: "20px",
    },

    technologyList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },

    technology: {
      background: "#0f172a",
      border: "1px solid #334155",
      color: "#38bdf8",
      padding: "7px 10px",
      borderRadius: "6px",
      fontSize: "12px",
    },

    section: {
      marginTop: "80px",
    },

    sectionTitle: {
      fontSize: "32px",
      margin: "10px 0 15px",
    },

    sectionText: {
      color: "#94a3b8",
      fontSize: "16px",
      lineHeight: "1.7",
      maxWidth: "700px",
    },

    skillList: {
      marginTop: "35px",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "25px",
    },

    skillItem: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "12px",
      padding: "20px",
    },

    skillHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "12px",
    },

    skillName: {
      fontWeight: "700",
    },

    skillLevel: {
      color: "#38bdf8",
      fontSize: "13px",
    },

    progressBackground: {
      width: "100%",
      height: "8px",
      background: "#0f172a",
      borderRadius: "10px",
      overflow: "hidden",
    },

    progressBar: {
      height: "100%",
      background: "#38bdf8",
      borderRadius: "10px",
    },

    percentage: {
      textAlign: "right",
      color: "#64748b",
      fontSize: "12px",
      marginTop: "7px",
    },

    learningSection: {
      marginTop: "80px",
      padding: "50px",
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
    },

    learningGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "30px",
    },

    learningCard: {
      padding: "25px",
      background: "#0f172a",
      borderRadius: "12px",
      border: "1px solid #334155",
    },

    learningIcon: {
      fontSize: "30px",
      marginBottom: "10px",
    },

    learningTitle: {
      fontSize: "18px",
      marginBottom: "10px",
    },

    learningText: {
      color: "#94a3b8",
      fontSize: "14px",
      lineHeight: "1.7",
    },

    cta: {
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
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <header style={styles.header}>
          <span style={styles.label}>
            SKILLS & TECHNOLOGIES
          </span>

          <h1 style={styles.title}>
            My Technical Skills
          </h1>

          <p style={styles.subtitle}>
            My technical skills and tools that I use to design,
            develop, and maintain modern web applications and
            digital solutions.
          </p>
        </header>


        {/* SKILL CATEGORIES */}
        <section>

          <div style={styles.categoryGrid}>

            {skills.map((skill, index) => (

              <div
                key={index}
                style={styles.categoryCard}
              >

                <div style={styles.icon}>
                  {skill.icon}
                </div>

                <h2 style={styles.categoryTitle}>
                  {skill.category}
                </h2>

                <p style={styles.categoryDescription}>
                  {skill.description}
                </p>

                <div style={styles.technologyList}>

                  {skill.technologies.map(
                    (technology, techIndex) => (

                      <span
                        key={techIndex}
                        style={styles.technology}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* SKILL PROFICIENCY */}
        <section style={styles.section}>

          <span style={styles.label}>
            PROFICIENCY
          </span>

          <h2 style={styles.sectionTitle}>
            Technical Proficiency
          </h2>

          <p style={styles.sectionText}>
            A quick overview of my experience and proficiency
            with some of the technologies I commonly use.
          </p>


          <div style={styles.skillList}>

            {skillLevels.map((skill, index) => (

              <div
                key={index}
                style={styles.skillItem}
              >

                <div style={styles.skillHeader}>

                  <span style={styles.skillName}>
                    {skill.name}
                  </span>

                  <span style={styles.skillLevel}>
                    {skill.level}
                  </span>

                </div>


                <div style={styles.progressBackground}>

                  <div
                    style={{
                      ...styles.progressBar,
                      width: `${skill.percentage}%`,
                    }}
                  ></div>

                </div>


                <div style={styles.percentage}>
                  {skill.percentage}%
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* CURRENT FOCUS */}
        <section style={styles.learningSection}>

          <span style={styles.label}>
            CURRENT FOCUS
          </span>

          <h2 style={styles.sectionTitle}>
            Always Learning & Improving
          </h2>

          <p style={styles.sectionText}>
            Technology continuously evolves, so I focus on
            improving my skills and learning new tools that
            help me build better applications.
          </p>


          <div style={styles.learningGrid}>

            <div style={styles.learningCard}>

              <div style={styles.learningIcon}>
                🚀
              </div>

              <h3 style={styles.learningTitle}>
                Modern Web Development
              </h3>

              <p style={styles.learningText}>
                Exploring modern approaches to building
                responsive, scalable, and maintainable
                web applications.
              </p>

            </div>


            <div style={styles.learningCard}>

              <div style={styles.learningIcon}>
                🗄️
              </div>

              <h3 style={styles.learningTitle}>
                Backend & Databases
              </h3>

              <p style={styles.learningText}>
                Improving knowledge in backend architecture,
                APIs, database design, and data management.
              </p>

            </div>


            <div style={styles.learningCard}>

              <div style={styles.learningIcon}>
                🎨
              </div>

              <h3 style={styles.learningTitle}>
                UI & User Experience
              </h3>

              <p style={styles.learningText}>
                Creating cleaner interfaces and improving
                usability through responsive and intuitive
                designs.
              </p>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section style={styles.cta}>

          <h2 style={styles.ctaTitle}>
            Let's Build Something Together
          </h2>

          <p style={styles.ctaText}>
            Looking for a developer who can turn ideas into
            functional web applications? Let's connect and
            discuss your project.
          </p>

          <Link
            to="/contact"
            style={styles.primaryButton}
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

export default Skills;