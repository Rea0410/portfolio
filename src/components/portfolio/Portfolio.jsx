import React from "react";
import "./Portfolio.css";
import illustration from "./illustration.png";
import resume from "./resume.pdf";
import livelihoodScreenshot from "../portfolio/livelihood.png";
import ICT from "../portfolio/ICT.png"
import PMS from "../portfolio/PMS.jfif"
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <p>Hello, I’m</p>
          <h1>Realyn Linas Damasco</h1>
          <p>Senior Full-Stack Web Developer</p>
          <a href={resume} download>
            <button className="btn">Download Resume</button>
          </a>
        </div>
        <img src={illustration} alt="illustration" className="hero-img" />
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">React.js</div>
          <div className="card">Node.js</div>
          <div className="card">MySQL</div>
          <div className="card">Bootstrap</div>
          <div className="card">HTML</div>
          <div className="card">Java Script</div>
          <div className="card">API Integration</div>
          <div className="card">Figma</div>
          <div className="card">Authentication</div>
          <div className="card">CSS</div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Project Card 1 */}
          <div className="card">
            
            <h3>Personnel Management System</h3>
            <p>
              The Personnel Management System (PMS) is a web-based application
              designed to streamline the management of employee information,
              track personnel status, and improve administrative efficiency
              within an organization. This system provides a centralized
              platform for storing and managing employee records, including
              personal details, job positions, employment status (regular or
              non-regular), division, and office assignment.
            </p>
             <img 
    src={PMS} 
    alt="PMS Screenshot" 
    className="project-screenshot" 
  />
            <a
              href="https://github.com/Rea0410/DOLE-EMS.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Personnel Management System on GitHub"
            >
              <button className="btn github-btn">View on GitHub</button>
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="card">
            <h3>ICT Equipment Barrower Slip</h3>
            
            <p>
              The ICT Equipment Borrowers Slip is a web-based system designed to
              efficiently manage and track the borrowing of ICT equipment within
              an organization. It provides a streamlined process for employees
              to request and borrow devices such as laptops, projectors, and
              other IT resources.
            </p>
            <img 
    src={ICT} 
    alt="PMS Screenshot" 
    className="project-screenshot" 
  />
            <a
              href="https://github.com/Rea0410/ictbarrower.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Another Project on GitHub"
            >
              <button className="btn github-btn">View on GitHub</button>
            </a>
          </div>

          {/* Project Card 3 */}
          <div className="card">
            <h3>Livelihood Proposal System</h3>
            
            <p>
              A web-based application designed to streamline the submission,
              tracking, and management of livelihood project proposals. The
              system enables users to submit proposals, monitors approval
              status, and organizes project details for efficient coordination.
              Built with a user-friendly interface, it enhances administrative
              efficiency and ensures transparency in managing livelihood
              programs.
            </p>
             <img 
    src={livelihoodScreenshot} 
    alt="PMS Screenshot" 
    className="project-screenshot" 
  />
            <a
              href="https://github.com/Rea0410/livelihood_proposal_system.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Third Project on GitHub"
            >
              <button className="btn github-btn">View on GitHub</button>
            </a>
          </div>
        </div>
      </section>

     {/* Contact */}
<section className="contact">
  <h2>Contact</h2>
  <div className="contact-container">
    <div className="contact-info">
      <p><strong>Email:</strong> Realynlinas@email.com</p>
      <p><strong>Contact Number:</strong> 09494513957</p>
    </div>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit" className="btn">Send Message</button>
    </form>
  </div>
</section>
    </div>
  );
};

export default Portfolio;
