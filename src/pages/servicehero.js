import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaArrowDown,
} from "react-icons/fa"; // Added FaArrowDown here

const ServiceHero = () => {
  return (
    <section className="service-hero-wrapper">
      <div className="hero-intro">
        <h1 className="hero-heading-text">
          Innovating the Future with Cutting-Edge Solutions
        </h1>
        <p className="hero-description-text">
          At Innovatex Labs, we deliver top-tier digital services that empower
          businesses to succeed in the ever-evolving technological landscape.
        </p>
      </div>

      <div className="arrow-scroll-indicator">
        <FaArrowDown />
      </div>

      <div className="service-cards-container">
        <div className="single-service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Web Development</h3>
          <p>
            We create user-centric websites that are fast, secure, and easy to
            navigate, tailored to meet the specific needs of your business.
          </p>
        </div>
        <div className="single-service-card">
          <FaMobileAlt className="service-icon" />
          <h3>App Development</h3>
          <p>
            Our mobile app solutions enhance your customer experience with
            high-performance applications across Android and iOS.
          </p>
        </div>
        <div className="single-service-card">
          <FaCloud className="service-icon" />
          <h3>Cloud Solutions</h3>
          <p>
            Our cloud-based solutions provide scalability, security, and
            flexibility, ensuring your business grows with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
