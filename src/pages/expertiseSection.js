import React, { useEffect, useState } from "react";

const ExpertiseSection = () => {
  const words = ["Innovate.", "Create.", "Transform."];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="expertise-section">
      <div className="expertise-content">
        <h2 className="expertise-title">
          {words.map((word, index) => (
            <span
              key={index}
              className={`expertise-word ${
                index === activeIndex ? "active" : ""
              }`}
            >
              {word}
            </span>
          ))}
        </h2>
        <p className="expertise-description">
          At <strong>Innovatex Lab</strong>, we redefine digital transformation
          through AI-driven solutions, cloud innovations, and cutting-edge
          technology. Elevate your business with our expertise.
        </p>
        <div className="expertise-btn-wrapper">
          <a className="arw-btn" href="/services">
            <span>Explore Our Expertise</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
