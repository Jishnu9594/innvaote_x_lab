import React, { useEffect, useState } from "react";

const VideoSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Check if the stats section is in view
      const statsSection = document.querySelector(".stats-section");
      if (statsSection) {
        const statsSectionTop = statsSection.getBoundingClientRect().top;
        if (statsSectionTop < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="video-section">
      {/* Background Video */}
      <video autoPlay muted loop className="video-background">
        <source src="images/ai2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left-aligned Text Section */}
      <div className="video-content">
        <div className="text-section">
          <h1 className="animated-text">
            Kerala's first AI ecosystem at Jaibharth College
          </h1>
          <p>
            InnovateX Labs is an ecosystem under the Jaibharth Startup Mission,
            designed to provide students with real-time exposure to projects,
            helping them gain hands-on experience. At InnovateX, we focus on
            nurturing young talent by providing opportunities in Web
            Development, Software Development, UI/UX Design, and Digital
            Marketing.
          </p>
        </div>

        {/* Scrolling Stats Section */}
        <div className={`stats-section ${isVisible ? "visible" : ""}`}>
          <div className="stat">
            <h2>600+</h2>
            <p>International Clients</p>
          </div>
          <div className="stat">
            <h2>35+</h2>
            <p>Countries</p>
          </div>
          <div className="stat">
            <h2>12+</h2>
            <p>Years Of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
