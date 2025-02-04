import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDatabase,
  FaGithub,
} from "react-icons/fa"; // Importing FaGithub

const TechStackSection = () => {
  return (
    <div className="tech-stack-section-wrapper">
      <div className="tech-stack-intro">
        <h2 className="tech-stack-heading-text">
          Tech Stack We Use <span>Innovative and Modern</span>
        </h2>
        <p className="tech-stack-description-text">
          We are always up-to-date with the latest technologies to ensure we
          provide cutting-edge solutions for our clients.
        </p>
      </div>

      <div className="tech-stack-icons-container">
        <div className="tech-stack-icon-card">
          <FaReact className="tech-icon" />
          <h3>React</h3>
          <p>We build fast, scalable, and maintainable web apps using React.</p>
        </div>
        <div className="tech-stack-icon-card">
          <FaNodeJs className="tech-icon" />
          <h3>Node.js</h3>
          <p>
            We use Node.js for building scalable and high-performance
            server-side applications.
          </p>
        </div>
        <div className="tech-stack-icon-card">
          <FaDocker className="tech-icon" />
          <h3>Docker</h3>
          <p>
            Docker helps us with containerization and ensures consistency across
            development and production environments.
          </p>
        </div>
        <div className="tech-stack-icon-card">
          <FaAws className="tech-icon" />
          <h3>AWS</h3>
          <p>
            We rely on AWS services for scalable cloud infrastructure and secure
            deployments.
          </p>
        </div>
        <div className="tech-stack-icon-card">
          <FaDatabase className="tech-icon" />
          <h3>Database</h3>
          <p>
            We work with databases like PostgreSQL, MongoDB, and others to
            manage large-scale data efficiently.
          </p>
        </div>
        <div className="tech-stack-icon-card">
          <FaGithub className="tech-icon" /> {/* Adding the Git icon */}
          <h3>Git</h3>
          <p>
            We use Git for version control, enabling collaborative development
            and efficient code management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
