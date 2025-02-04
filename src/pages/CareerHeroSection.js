import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon

const CareerHeroSection = () => {
  return (
    <div className="career-hero-container">
      <div className="career-hero-overlay">
        <div className="career-hero-content">
          <h1 className="career-hero-title">We're Hiring!</h1>
          <p className="career-hero-description">
            Unlock your potential and work with a team that's shaping the future
            of technology. Explore exciting opportunities to grow with us.
          </p>
          <a href="/careers" className="career-hero-button">
            See Open Positions <FaArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSection;
