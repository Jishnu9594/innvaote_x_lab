import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-overlay"></div>
      <div className="video-content">
        <img src="/images/innovatexlogo.png" alt="Logo" className="logo" />
        <h1 className="animated-text">
          <span className="highlight">Kerala's first</span>{" "}
          <span className="highlight-green">
            AI eco-system at Jai Bharath College
          </span>
        </h1>
        <p>
          InnovateX Labs is an ecosystem under the Jaibharth Startup Mission,
          designed to provide students with real-time exposure to projects,
          helping them gain hands-on experience. At InnovateX, we focus on
          nurturing young talent by providing opportunities in Web Development,
          Software Development, UI/UX Design, and Digital Marketing.
        </p>
        <button className="cta-button">Explore More</button>

        {/* Stats Section */}
        <div className="stats-section">
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
