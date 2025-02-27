import React from "react";
import { FaArrowDown } from "react-icons/fa";

const ServiceHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="white-text">Innovating the Future with</span>{" "}
          <span className="green-highlight">Cutting-Edge Solutions</span>
        </h1>
        <p className="hero-description">
          At Innovatex Lab, we deliver top-tier digital services that empower
          businesses to succeed in the ever-evolving technological landscape.
        </p>
      </div>

      <div className="scroll-arrow">
        <FaArrowDown />
      </div>
    </section>
  );
};

export default ServiceHero;
