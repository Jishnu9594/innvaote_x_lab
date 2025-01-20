import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // Define the array of images and videos
  const backgrounds = [
    { type: "image", url: "images/bg_1.jpg" },
    { type: "video", url: "images/ai.mp4" },
    { type: "image", url: "images/bg_2.jpg" },
    { type: "video", url: "videos/bg_2.mp4" },
    { type: "image", url: "images/bg_3.jpg" },
    { type: "video", url: "videos/bg_3.mp4" },
  ];

  // Define the text array
  const texts = [
    "A small river named Duden flows by their place and supplies",
    "Providing cutting-edge IT solutions for businesses",
    "Innovating technology for a better tomorrow",
  ];

  // State for current background index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Get the current background type and URL
  const currentBackground = backgrounds[currentIndex % backgrounds.length];

  return (
    <div
      className="hero-wrap js-fullheight"
      style={{
        height: "100vh", // Full height of the viewport
        position: "relative", // For positioning text in the background
      }}
      data-stellar-background-ratio="0.5"
    >
      {/* Render background based on its type */}
      {currentBackground.type === "video" ? (
        <video
          className="background-video"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the video covers the entire container
            zIndex: 0, // Ensure the video is behind text
          }}
        >
          <source src={currentBackground.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${currentBackground.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: 0,
          }}
        ></div>
      )}

      {/* Overlay for better text readability */}
      <div className="overlay"></div>

      {/* Background text */}
      <div
        className="background-text"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 1,
          maxWidth: "80%",
        }}
      >
        {texts[currentIndex % texts.length]}
      </div>

      {/* Content on top of the background */}
      <div className="container">
        <div
          className="row no-gutters slider-text js-fullheight align-items-center"
          data-scrollax-parent="true"
        >
          <div
            className="col-md-8 ftco-animate mt-5 pt-md-5"
            data-scrollax="properties: { translateY: '70%' }"
          >
            <div className="row">
              <div className="col-md-7">
                <p
                  className="mb-4 pl-md-5 line"
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                  {texts[currentIndex % texts.length]}
                </p>
              </div>
            </div>
            <h1
              className="mb-4"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Experienced for <br />
              Every Kinds of ITSolution
            </h1>
            <p>
              <a href="#" className="btn btn-primary px-4 py-3">
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
