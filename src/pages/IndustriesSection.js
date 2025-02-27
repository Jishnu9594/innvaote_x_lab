import React from "react";
import { FaIndustry, FaMobileAlt, FaCloud, FaSearch } from "react-icons/fa";

const IndustriesSection = () => {
  return (
    <section className="industries-section-wrapper">
      <div className="industries-intro">
        <h2 className="industries-heading-text">Industries We Serve</h2>
        <p className="industries-description-text">
          At Innovatex Lab, we work with a wide range of industries to deliver
          solutions that drive innovation, growth, and efficiency. Our team is
          committed to understanding the unique challenges of each sector and
          providing tailored solutions.
        </p>
      </div>

      <div className="industries-cards-container">
        <div className="single-industry-card">
          <FaIndustry className="industry-icon" />
          <h3>Manufacturing</h3>
          <p>
            We help manufacturers streamline operations, improve productivity,
            and reduce costs with customized solutions that embrace technology.
          </p>
        </div>
        <div className="single-industry-card">
          <FaMobileAlt className="industry-icon" />
          <h3>Telecommunications</h3>
          <p>
            Our telecom solutions empower service providers to deliver seamless
            communication experiences and manage network complexities.
          </p>
        </div>
        <div className="single-industry-card">
          <FaCloud className="industry-icon" />
          <h3>Cloud Services</h3>
          <p>
            Innovate your business with our cloud solutions designed to enhance
            scalability, flexibility, and security for your operations.
          </p>
        </div>
        <div className="single-industry-card">
          <FaSearch className="industry-icon" />
          <h3>Healthcare</h3>
          <p>
            We create digital solutions that help healthcare providers manage
            data, improve patient care, and enhance overall service delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
