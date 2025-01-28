import React from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

const OurStorySection = () => {
  const icons = [FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs];

  return (
    <section className="our-story-section">
      {/* Background Gradient */}
      <div className="background-gradient"></div>

      {/* Content */}
      <div className="our-story-content">
        {/* Logo */}
        <div className="our-story-logo">
          <img src="images/innovatexlogo.png" alt="InnovateX Logo" />
        </div>

        {/* Title and Description */}
        <div className="our-story-text-container">
          <h2 className="our-story-title">
            <span className="highlight-word">Our</span> Story
          </h2>
          <p className="our-story-description">
            InnovateX Labs is an ecosystem under the Jaibharth Startup Mission,
            designed to provide students with real-time exposure to projects,
            helping them gain hands-on experience. At InnovateX, we focus on
            nurturing young talent by providing opportunities in Web
            Development, Software Development, UI/UX Design, and Digital
            Marketing.
          </p>
        </div>

        {/* Animated Scattered Icons */}
        <div className="icons-container">
          {Array.from({ length: 15 }).map((_, index) => {
            const Icon = icons[index % icons.length];
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            return (
              <Icon
                key={index}
                className="animated-icon"
                style={{
                  top: `${randomY}%`,
                  left: `${randomX}%`,
                  animationDelay: `${randomDelay}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
