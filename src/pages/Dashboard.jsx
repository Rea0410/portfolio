import React from "react";
import { Link } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import illustration from "../assets/illustration.png";
import resume from "../assets/ReaResume.pdf";

const Dashboard = () => {
  const projects = [
    {
    title: "Kalahi-Concepcion",
    description:
      "A web-based platform developed for the Kalahi program in Concepcion, providing digital access to community-related information, project activities, and relevant resources.",
    technologies: [
      "React.js",
      "JavaScript",
      "Bootstrap",
    ],
    github: "",
    liveDemo:
      "https://rea0410.github.io/Concepcion-Kalahi/",
  },
    {
      title: "Personnel Management System",
      description:
        "A web-based employee management system designed to centralize personnel records, employment status, positions, divisions, and office assignments.",
      technologies: ["React.js", "Node.js", "MySQL"],
      github: "https://github.com/Rea0410/DOLE-EMS.git",
    },

    {
      title: "ICT Equipment Borrower Slip",
      description:
        "A web-based system for managing and tracking ICT equipment borrowing requests, including laptops, projectors, and other IT resources.",
      technologies: ["React.js", "JavaScript", "Bootstrap"],
      github: "https://github.com/Rea0410/ictbarrower.git",
    },

    {
      title: "Livelihood Proposal System",
      description:
        "A web-based application designed to streamline the submission, tracking, and management of livelihood project proposals.",
      technologies: ["React.js", "Node.js", "MySQL"],
      github:
        "https://github.com/Rea0410/livelihood_proposal_system.git",
    },
  ];

  const skills = [
  { name: "React.js", icon: "⚛️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js", icon: "🟢" },
  { name: "MySQL", icon: "🗄️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "REST API", icon: "🔗" },
  { name: "Git & GitHub", icon: "🐙" },
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

    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "50px",
      minHeight: "500px",
      padding: "40px 0",
    },

    heroContent: {
      flex: 1,
    },

    welcome: {
      color: "#38bdf8",
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "1px",
    },

    title: {
      fontSize: "52px",
      lineHeight: "1.1",
      margin: "15px 0",
    },

    titleName: {
      color: "#38bdf8",
    },

    subtitle: {
      fontSize: "26px",
      color: "#cbd5e1",
      marginBottom: "20px",
    },

    description: {
      color: "#94a3b8",
      fontSize: "17px",
      lineHeight: "1.8",
      maxWidth: "650px",
    },

    buttons: {
      display: "flex",
      gap: "15px",
      marginTop: "30px",
      flexWrap: "wrap",
    },

    primaryButton: {
      background: "#38bdf8",
      color: "#0f172a",
      padding: "13px 25px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "700",
      display: "inline-block",
    },

    secondaryButton: {
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      padding: "13px 25px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "700",
      display: "inline-block",
    },

    heroImage: {
      flex: 1,
      textAlign: "center",
    },

   image: {
  width: "100%",
  maxWidth: "430px",
  animation: "floatImage 4s ease-in-out infinite",
},
    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      margin: "30px 0 100px",
    },

    statCard: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "15px",
      padding: "25px",
      textAlign: "center",
    },

    statNumber: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#38bdf8",
      margin: "10px 0",
    },

    statText: {
      color: "#94a3b8",
      margin: 0,
    },

    section: {
      padding: "70px 0",
    },

    sectionLabel: {
      color: "#38bdf8",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "2px",
    },

    sectionTitle: {
      fontSize: "36px",
      margin: "10px 0 20px",
    },

    aboutText: {
      color: "#94a3b8",
      fontSize: "17px",
      lineHeight: "1.8",
      maxWidth: "850px",
    },

    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "25px",
      marginTop: "40px",
    },

    projectCard: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "15px",
      overflow: "hidden",
    },

    projectImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      display: "block",
    },

    projectPlaceholder: {
      width: "100%",
      height: "200px",
      background: "#334155",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
      boxSizing: "border-box",
      color: "#38bdf8",
      fontSize: "20px",
      fontWeight: "700",
    },

    projectContent: {
      padding: "25px",
    },

    projectTitle: {
      fontSize: "21px",
      marginBottom: "12px",
    },

    projectDescription: {
      color: "#94a3b8",
      lineHeight: "1.6",
      fontSize: "14px",
    },

    techList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      margin: "20px 0",
    },

    tech: {
      background: "#0f172a",
      color: "#38bdf8",
      padding: "6px 10px",
      borderRadius: "5px",
      fontSize: "12px",
    },

    githubLink: {
      color: "#38bdf8",
      textDecoration: "none",
      fontWeight: "600",
    },

    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "15px",
      marginTop: "30px",
    },

    skill: {
      background: "#1e293b",
      border: "1px solid #334155",
      padding: "18px",
      borderRadius: "10px",
      textAlign: "center",
      color: "#cbd5e1",
    },

    contact: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
      padding: "50px",
      marginTop: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "30px",
    },

    footer: {
      textAlign: "center",
      color: "#64748b",
      padding: "50px 0 20px",
      borderTop: "1px solid #1e293b",
      marginTop: "80px",
    },
     animatedName: {
    display: "inline-block",
    animation: "nameGlow 2s ease-in-out infinite alternate",
  },

  animatedImage: {
    width: "100%",
    maxWidth: "430px",
    animation: "floatImage 4s ease-in-out infinite",
  },
  resumeButton: {
  background: "transparent",
  border: "1px solid #225bc5",
  color: "#222ac5",
  padding: "13px 25px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "700",
  display: "inline-block",
  transition: "all 0.3s ease",
},
  
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HERO */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <span style={styles.welcome}>
              WELCOME TO MY PORTFOLIO 👋
            </span>

            <h1
  style={{
    ...styles.title,
    animation: "fadeUp 1s ease-out",
  }}
>
  Hi, I'm{" "}
  <span
    style={{
      ...styles.titleName,
      display: "inline-block",
      animation: "nameGlow 2s ease-in-out infinite alternate",
    }}
  >
    Realyn Linas Damasco
  </span>
</h1>

            <h2 style={styles.subtitle}>
              Full-Stack Web Developer
            </h2>

            <p style={styles.description}>
              I design and develop modern, responsive, and
              user-friendly web applications that help
              organizations improve workflows, manage
              information, and solve real-world problems.
            </p>

            <div style={styles.buttons}>

  <Link
    to="/contact"
    style={styles.primaryButton}
  >
    Contact Me
  </Link>

  <Link
    to="/projects"
    style={styles.secondaryButton}
  >
    View My Work
  </Link>

  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.resumeButton}
  >
    📄 View / Print Resume
  </a>

</div>
          </div>

          <div style={styles.heroImage}>
            <img
              src={illustration}
              alt="Realyn Linas Damasco"
              style={styles.image}
            />
          </div>
        </section>

        {/* STATS */}
        <section style={styles.stats}>

          <div style={styles.statCard}>
            <div>💻</div>
            <h3 style={styles.statNumber}>10+</h3>
            <p style={styles.statText}>
              Web Projects
            </p>
          </div>

          <div style={styles.statCard}>
            <div>⚛️</div>
            <h3 style={styles.statNumber}>
              React.js
            </h3>
            <p style={styles.statText}>
              Frontend Development
            </p>
          </div>

          <div style={styles.statCard}>
            <div>🔧</div>
            <h3 style={styles.statNumber}>
              Full-Stack
            </h3>
            <p style={styles.statText}>
              Web Development
            </p>
          </div>

          <div style={styles.statCard}>
            <div>🚀</div>
            <h3 style={styles.statNumber}>
              Responsive
            </h3>
            <p style={styles.statText}>
              Modern Web Apps
            </p>
          </div>

        </section>

        {/* ABOUT */}
        <section style={styles.section}>

          <span style={styles.sectionLabel}>
            ABOUT ME
          </span>

          <h2 style={styles.sectionTitle}>
            Building solutions through technology
          </h2>

          <p style={styles.aboutText}>
            I am a Full-Stack Web Developer with experience
            in building web-based systems and digital solutions.
            I enjoy transforming ideas and business requirements
            into functional, efficient, and user-friendly
            applications.
          </p>

          <p style={styles.aboutText}>
            My experience includes developing systems for
personnel management, ICT equipment tracking,
livelihood proposal management, and community
development initiatives.
          </p>

          <Link
            to="/about"
            style={styles.secondaryButton}
          >
            Learn More About Me →
          </Link>

        </section>

        {/* PROJECTS */}
        <section style={styles.section}>

          <span style={styles.sectionLabel}>
            MY WORK
          </span>

          <h2 style={styles.sectionTitle}>
            Featured Projects
          </h2>

          <p style={styles.aboutText}>
            Some of the systems and applications I have
            developed.
          </p>

          <div style={styles.projectsGrid}>

            {projects.map((project, index) => (

              <div
                key={index}
                style={styles.projectCard}
              >

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.projectImage}
                  />
                ) : (
                  <div style={styles.projectPlaceholder}>
                    {project.title}
                  </div>
                )}

                <div style={styles.projectContent}>

                  <h3 style={styles.projectTitle}>
                    {project.title}
                  </h3>

                  <p style={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div style={styles.techList}>

                    {project.technologies.map(
                      (technology, techIndex) => (

                        <span
                          key={techIndex}
                          style={styles.tech}
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                  <div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  }}
>
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.githubLink}
    >
      View on GitHub →
    </a>
  )}

  {project.liveDemo && (
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.githubLink}
    >
      Live Demo →
    </a>
  )}
</div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* SKILLS */}
        <section style={styles.section}>

          <span style={styles.sectionLabel}>
            TECHNOLOGIES
          </span>

          <h2 style={styles.sectionTitle}>
            Tools & Technologies
          </h2>

          <div style={styles.skillsGrid}>

            {skills.map((skill, index) => (
  <SkillCard
    key={index}
    skill={skill.name}
    icon={skill.icon}
  />
))}

          </div>

        </section>

        {/* CONTACT CTA */}
        <section style={styles.contact}>

          <div>

            <span style={styles.sectionLabel}>
              HAVE A PROJECT IN MIND?
            </span>

            <h2 style={styles.sectionTitle}>
              Let's build something together.
            </h2>

            <p style={styles.aboutText}>
              I'm always interested in discussing new
              projects, creative ideas, and opportunities
              to build useful digital solutions.
            </p>

          </div>

          <Link
            to="/contact"
            style={styles.primaryButton}
          >
            Get In Touch →
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

<style>
  {`
    @keyframes floatImage {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-15px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    @keyframes nameGlow {
      from {
        text-shadow: 0 0 5px rgba(56, 189, 248, 0.2);
      }

      to {
        text-shadow: 0 0 20px rgba(56, 189, 248, 0.7);
      }
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
</style>

export default Dashboard;