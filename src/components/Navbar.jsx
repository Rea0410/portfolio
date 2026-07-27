
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #1e293b",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 30px",
      height: "75px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    logo: {
      color: "#38bdf8",
      textDecoration: "none",
      fontSize: "24px",
      fontWeight: "800",
      letterSpacing: "1px",
    },

    desktopMenu: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },

    navLink: {
      color: "#cbd5e1",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      transition: "0.3s",
    },

    activeLink: {
      color: "#38bdf8",
    },

    contactButton: {
      background: "#38bdf8",
      color: "#0f172a",
      padding: "10px 18px",
      borderRadius: "7px",
      textDecoration: "none",
      fontWeight: "700",
      fontSize: "14px",
    },

    menuButton: {
      display: "none",
      background: "transparent",
      border: "none",
      color: "#38bdf8",
      fontSize: "28px",
      cursor: "pointer",
    },

    mobileMenu: {
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      gap: "20px",
      padding: "25px 30px",
      background: "#0f172a",
      borderTop: "1px solid #1e293b",
    },
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>

        {/* LOGO */}
        <Link
          to="/"
          style={styles.logo}
          onClick={() => setMenuOpen(false)}
        >
          Dev Rea
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div style={styles.desktopMenu}>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                ...styles.navLink,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            style={styles.contactButton}
          >
            Contact Me
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          style={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div style={styles.mobileMenu}>

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              ...styles.navLink,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            {item.name}
          </NavLink>
        ))}

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          style={styles.contactButton}
        >
          Contact Me
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;

