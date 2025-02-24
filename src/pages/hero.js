import React, { useState, useEffect } from "react";

const HeroBanner = () => {
  // Define the array of images
  const backgrounds = [
    { type: "image", url: "images/innovatex1.jpg" },
    { type: "image", url: "images/innovatex2.jpg" },
    { type: "image", url: "images/innovatex3.jpg" },
  ];

  // Define text array for slide titles
  const slideTexts = [
    "Empowering Innovation through Technology",
    "Simplifying Solutions for Your Business",
    "Transforming Ideas into Digital Realities",
  ];

  // State for current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get current background
  const currentBackground = backgrounds[currentIndex % backgrounds.length];

  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${currentBackground.url})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="banner-overlay"></div>

      {/* Hero Content */}
      <div className="banner-content">
        <h1 className="banner-title">{slideTexts[currentIndex]}</h1>
        <p className="banner-description">
          We help businesses achieve their potential with innovative digital
          solutions and cutting-edge technologies.
        </p>
        <a href="#services" className="banner-btn">
          Discover Our Services
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-icon"></div>
        <span className="scroll-text">Scroll Down</span>
      </div>

      {/* Slide Indicator */}
      <div className="slide-indicator">
        {backgrounds.map((_, index) => (
          <span
            key={index}
            className={`slide-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
