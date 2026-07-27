import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/illustration.png";


const About = () => {
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
      marginBottom: "50px",
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
      fontSize: "18px",
      lineHeight: "1.7",
      maxWidth: "750px",
    },

    profileSection: {
      display: "flex",
      alignItems: "center",
      gap: "60px",
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
      padding: "50px",
      marginBottom: "40px",
    },

    imageContainer: {
      flex: "0 0 350px",
      textAlign: "center",
    },

    image: {
      width: "100%",
      maxWidth: "320px",
    },

    content: {
      flex: 1,
    },

    heading: {
      fontSize: "28px",
      marginBottom: "20px",
    },

    paragraph: {
      color: "#94a3b8",
      fontSize: "16px",
      lineHeight: "1.8",
      marginBottom: "18px",
    },

    button: {
      display: "inline-block",
      marginTop: "15px",
      padding: "13px 25px",
      background: "#38bdf8",
      color: "#0f172a",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "700",
    },

    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "25px",
      marginTop: "30px",
    },

    card: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "15px",
      padding: "30px",
    },

    icon: {
      fontSize: "35px",
      marginBottom: "15px",
    },

    cardTitle: {
      fontSize: "20px",
      marginBottom: "12px",
    },

    cardText: {
      color: "#94a3b8",
      lineHeight: "1.7",
      fontSize: "15px",
    },

    journeySection: {
      marginTop: "80px",
    },

    timeline: {
      marginTop: "35px",
      borderLeft: "2px solid #38bdf8",
      paddingLeft: "30px",
    },

    timelineItem: {
      position: "relative",
      marginBottom: "40px",
    },

    dot: {
      position: "absolute",
      left: "-39px",
      top: "5px",
      width: "14px",
      height: "14px",
      background: "#38bdf8",
      borderRadius: "50%",
      border: "4px solid #0f172a",
    },

    year: {
      color: "#38bdf8",
      fontSize: "14px",
      fontWeight: "700",
    },

    role: {
      fontSize: "21px",
      margin: "8px 0",
    },

    roleDescription: {
      color: "#94a3b8",
      lineHeight: "1.7",
      maxWidth: "800px",
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
      maxWidth: "650px",
      margin: "0 auto 25px",
      lineHeight: "1.7",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* PAGE HEADER */}
        <header style={styles.header}>
          <span style={styles.label}>
            ABOUT ME
          </span>

          <h1 style={styles.title}>
            Get to Know Me
          </h1>

          <p style={styles.subtitle}>
            I'm a Full-Stack Web Developer passionate about
            creating practical, efficient, and user-friendly
            digital solutions.
          </p>
        </header>


        {/* PROFILE SECTION */}
        <section style={styles.profileSection}>

          <div style={styles.imageContainer}>
            <img
              src={illustration}
              alt="Realyn Linas Damasco"
              style={styles.image}
            />
          </div>


          <div style={styles.content}>

            <h2 style={styles.heading}>
              Hello, I'm Realyn Linas Damasco 👋
            </h2>

            <p style={styles.paragraph}>
              I am a Full-Stack Web Developer who enjoys
              designing and developing web applications that
              solve real-world problems and improve business
              processes.
            </p>

            <p style={styles.paragraph}>
              My experience includes developing web-based
              systems for personnel management, ICT equipment
              tracking, and livelihood proposal management.
              I focus on building applications that are
              functional, responsive, organized, and easy to use.
            </p>

            <p style={styles.paragraph}>
              I enjoy learning new technologies, exploring
              better development practices, and continuously
              improving my skills as a developer.
            </p>

            <Link
              to="/contact"
              style={styles.button}
            >
              Let's Connect →
            </Link>

          </div>

        </section>


        {/* WHAT I DO */}
        <section>

          <span style={styles.label}>
            WHAT I DO
          </span>

          <h2 style={styles.title}>
            How I Can Help
          </h2>


          <div style={styles.cardsGrid}>

            <div style={styles.card}>

              <div style={styles.icon}>
                💻
              </div>

              <h3 style={styles.cardTitle}>
                Web Development
              </h3>

              <p style={styles.cardText}>
                I build responsive and user-friendly web
                applications using modern frontend and
                backend technologies.
              </p>

            </div>


            <div style={styles.card}>

              <div style={styles.icon}>
                ⚙️
              </div>

              <h3 style={styles.cardTitle}>
                System Development
              </h3>

              <p style={styles.cardText}>
                I develop customized web-based systems
                designed to improve workflows, information
                management, and organizational processes.
              </p>

            </div>


            <div style={styles.card}>

              <div style={styles.icon}>
                🔗
              </div>

              <h3 style={styles.cardTitle}>
                API & Database Integration
              </h3>

              <p style={styles.cardText}>
                I work with APIs and databases to create
                connected applications that securely manage
                and process information.
              </p>

            </div>

          </div>

        </section>


        {/* MY JOURNEY */}
        <section style={styles.journeySection}>

          <span style={styles.label}>
            MY JOURNEY
          </span>

          <h2 style={styles.title}>
            My Professional Journey
          </h2>


          <div style={styles.timeline}>

            <div style={styles.timelineItem}>

              <div style={styles.dot}></div>

              <span style={styles.year}>
                PRESENT
              </span>

              <h3 style={styles.role}>
                Full-Stack Web Developer
              </h3>

              <p style={styles.roleDescription}>
                Developing and maintaining web-based systems
                and digital solutions. Working with frontend,
                backend, databases, APIs, and deployment to
                deliver functional applications.
              </p>

            </div>


            <div style={styles.timelineItem}>

              <div style={styles.dot}></div>

              <span style={styles.year}>
                WEB DEVELOPMENT
              </span>

              <h3 style={styles.role}>
                Building Real-World Web Applications
              </h3>

              <p style={styles.roleDescription}>
                Developed systems including personnel
                management, ICT equipment borrowing, and
                livelihood proposal management applications.
              </p>

            </div>


            <div style={styles.timelineItem}>

              <div style={styles.dot}></div>

              <span style={styles.year}>
                CONTINUOUS LEARNING
              </span>

              <h3 style={styles.role}>
                Growing as a Developer
              </h3>

              <p style={styles.roleDescription}>
                Continuously learning new technologies,
                improving development practices, and exploring
                better ways to build reliable and scalable
                applications.
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
            Have a project idea or looking for a developer
            to help bring your ideas to life? I'd love to
            hear from you.
          </p>

          <Link
            to="/contact"
            style={styles.button}
          >
            Get In Touch →
          </Link>

        </section>

      </div>
    </div>
  );
};

export default About;