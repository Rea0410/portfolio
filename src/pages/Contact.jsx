import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary submit action
    // You can connect this later to EmailJS, Formspree, or your backend
    console.log("Form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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
      fontSize: "17px",
      lineHeight: "1.8",
      maxWidth: "700px",
    },

    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: "30px",
      alignItems: "stretch",
    },

    infoCard: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
      padding: "35px",
    },

    cardTitle: {
      fontSize: "25px",
      marginBottom: "15px",
    },

    cardText: {
      color: "#94a3b8",
      lineHeight: "1.7",
      marginBottom: "30px",
    },

    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "15px",
      marginBottom: "25px",
    },

    icon: {
      width: "45px",
      height: "45px",
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      flexShrink: 0,
    },

    itemLabel: {
      color: "#94a3b8",
      fontSize: "13px",
      marginBottom: "5px",
    },

    itemValue: {
      color: "#f8fafc",
      fontSize: "15px",
      margin: 0,
    },

    socialSection: {
      marginTop: "35px",
      paddingTop: "25px",
      borderTop: "1px solid #334155",
    },

    socialLinks: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "15px",
    },

    socialLink: {
      display: "inline-block",
      padding: "10px 15px",
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "8px",
      color: "#38bdf8",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "600",
    },

    formCard: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "20px",
      padding: "35px",
    },

    formGroup: {
      marginBottom: "20px",
    },

    labelText: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#cbd5e1",
    },

    input: {
      width: "100%",
      boxSizing: "border-box",
      padding: "14px",
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "8px",
      color: "#f8fafc",
      fontSize: "15px",
      outline: "none",
    },

    textarea: {
      width: "100%",
      boxSizing: "border-box",
      padding: "14px",
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "8px",
      color: "#f8fafc",
      fontSize: "15px",
      outline: "none",
      resize: "vertical",
      minHeight: "160px",
      fontFamily: "Arial, sans-serif",
    },

    button: {
      width: "100%",
      padding: "14px",
      background: "#38bdf8",
      color: "#0f172a",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
    },

    success: {
      marginTop: "20px",
      padding: "15px",
      background: "#064e3b",
      border: "1px solid #10b981",
      borderRadius: "8px",
      color: "#a7f3d0",
      fontSize: "14px",
    },

    backButton: {
      display: "inline-block",
      marginTop: "50px",
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
            CONTACT
          </span>

          <h1 style={styles.title}>
            Let's Work Together
          </h1>

          <p style={styles.subtitle}>
            Have a project in mind, a question, or an opportunity
            to collaborate? Feel free to send me a message.
            I'd be happy to hear from you.
          </p>
        </header>


        {/* CONTACT CONTENT */}
        <div style={styles.contactGrid}>

          {/* CONTACT INFORMATION */}
          <div style={styles.infoCard}>

            <h2 style={styles.cardTitle}>
              Get In Touch
            </h2>

            <p style={styles.cardText}>
              I'm open to discussing web development projects,
              freelance opportunities, collaborations, and
              other professional opportunities.
            </p>


            {/* EMAIL */}
            <div style={styles.contactItem}>

              <div style={styles.icon}>
                📧
              </div>

              <div>
                <div style={styles.itemLabel}>
                  EMAIL
                </div>

                <p style={styles.itemValue}>
                  Realynlinas@email.com
                </p>
              </div>

            </div>


            {/* PHONE */}
            <div style={styles.contactItem}>

              <div style={styles.icon}>
                📱
              </div>

              <div>
                <div style={styles.itemLabel}>
                  PHONE
                </div>

                <p style={styles.itemValue}>
                  09494513957
                </p>
              </div>

            </div>


            {/* LOCATION */}
            <div style={styles.contactItem}>

              <div style={styles.icon}>
                📍
              </div>

              <div>
                <div style={styles.itemLabel}>
                  LOCATION
                </div>

                <p style={styles.itemValue}>
                  Philippines
                </p>
              </div>

            </div>


            {/* SOCIAL LINKS */}
            <div style={styles.socialSection}>

              <div style={styles.itemLabel}>
                FIND ME ONLINE
              </div>

              <div style={styles.socialLinks}>

                <a
                  href="https://github.com/Rea0410"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>


          {/* CONTACT FORM */}
          <div style={styles.formCard}>

            <h2 style={styles.cardTitle}>
              Send Me a Message
            </h2>

            <p style={styles.cardText}>
              Fill out the form below and I'll get back
              to you as soon as possible.
            </p>


            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div style={styles.formGroup}>

                <label style={styles.labelText}>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  style={styles.input}
                />

              </div>


              {/* EMAIL */}
              <div style={styles.formGroup}>

                <label style={styles.labelText}>
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={styles.input}
                />

              </div>


              {/* MESSAGE */}
              <div style={styles.formGroup}>

                <label style={styles.labelText}>
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  style={styles.textarea}
                />

              </div>


              <button
                type="submit"
                style={styles.button}
              >
                Send Message →
              </button>


              {submitted && (
                <div style={styles.success}>
                  ✅ Thank you! Your message has been
                  submitted successfully.
                </div>
              )}

            </form>

          </div>

        </div>


        {/* BACK TO DASHBOARD */}
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

export default Contact;