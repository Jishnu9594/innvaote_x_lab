import React from "react";
import { FaArrowDown } from "react-icons/fa";

const ServiceHero = () => {
  return (
    <section className="service-hero-wrapper">
      <div className="hero-intro">
        <h1 className="hero-heading-text">
          Innovating the Future with{" "}
          <span className="highlight">Cutting-Edge Solutions</span>
        </h1>
        <p className="hero-description-text">
          At Innovatex Labs, we deliver top-tier digital services that empower
          businesses to succeed in the ever-evolving technological landscape.
        </p>
      </div>

      <div className="arrow-scroll-indicator">
        <FaArrowDown />
      </div>
    </section>
  );
};

export default ServiceHero;
