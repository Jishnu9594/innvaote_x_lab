import React, { useEffect, useState } from "react";

const VideoSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="video-section">
      {/* Left-aligned Text Section */}
      <div className="video-content">
        <div
          className="text-section"
          style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
        >
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
        <div
          className="stats-section"
          style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
        >
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
