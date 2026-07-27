
import React from "react";

const SkillCard = ({ skill, icon }) => {
  const styles = {
    card: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      color: "#cbd5e1",
      transition: "all 0.3s ease",
      cursor: "default",
    },

    icon: {
      fontSize: "30px",
      marginBottom: "10px",
    },

    name: {
      margin: 0,
      fontSize: "15px",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.icon}>
        {icon || "💻"}
      </div>

      <p style={styles.name}>
        {skill}
      </p>
    </div>
  );
};

export default SkillCard;

