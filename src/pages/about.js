import React from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const OurStorySection = () => {
  const icons = [
    FaReact,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaDatabase,
    FaCloud,
  ];

  return (
    <section className="our-story-section">
      {/* Animated Scattered Icons */}
      <div className="animated-icons">
        {Array.from({ length: 30 }).map((_, index) => {
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

      {/* Content */}
      <div className="our-story-left">
        <h2 className="our-story-title">Our Story</h2>
        <p className="our-story-content">
          InnovateX Labs is an ecosystem under the Jaibharth Startup Mission,
          designed to provide students with real-time exposure to projects,
          helping them gain hands-on experience. At InnovateX, we focus on
          nurturing young talent by providing opportunities in Web Development,
          Software Development, UI/UX Design, and Digital Marketing.
        </p>
        <a href="#about-us" className="about-us-button">
          About Us <FaReact className="arrow-icon" />
        </a>
      </div>

      {/* Large Animated Logo */}
      <div className="our-story-logo">
        <img src="images/innovatexlogo.png" alt="InnovateX Logo" />
      </div>
    </section>
  );
};

export default OurStorySection;
