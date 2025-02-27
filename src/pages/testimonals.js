import React, { useState, useEffect } from "react";
import axios from "axios";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Fetch testimonials from backend
    axios
      .get(
        "https://innovate-x-lab-backend.onrender.com/innovatex/testimonials/"
      )
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="testimonial-section-software">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="testimonial-cards-wrapper">
        <div
          className="testimonial-cards-container"
          style={{
            transform: `translateX(${-currentSlide * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {testimonial.image ? (
                <img
                  className="testimonial-image"
                  src={testimonial.image} // Use image URL directly
                  alt={testimonial.name}
                  onError={(e) => (e.target.style.display = "none")} // Hide broken images
                />
              ) : (
                <div className="no-image-placeholder">No Image Available</div>
              )}
              <div className="testimonial-text">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
                <p className="testimonial-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
