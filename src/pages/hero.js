import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // Define the array of images and videos (optional)
  const backgrounds = [
    { type: "image", url: "images/innovatex1.jpg" },
    { type: "image", url: "images/innovatex2.jpg" },
    { type: "image", url: "images/innovatex3.jpg" },
  ];

  // Define the text array for background text and slide titles
  const texts = [
    "Empowering Innovation through Technology",
    "Simplifying Solutions for Your Business",
    "Transforming Ideas into Digital Realities",
  ];

  // State for current background index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the background and text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Get the current background type and URL
  const currentBackground = backgrounds[currentIndex % backgrounds.length];

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${currentBackground.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Overlay for better readability */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">{texts[currentIndex]}</h1>
        <p className="hero-description">
          We help businesses achieve their potential with innovative digital
          solutions and cutting-edge technologies.
        </p>
        <a href="#services" className="hero-btn">
          Discover Our Services
        </a>
      </div>

      {/* Scroll Indicator - Positioned at the center */}
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

export default HeroSection;
