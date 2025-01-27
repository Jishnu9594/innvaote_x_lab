import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Innovators",
      feedback:
        "Innovatex Labs revolutionized our operations with cutting-edge software solutions. We couldn’t have asked for a better partner.",
      image: "images/testimony-4.jpg", // Replace with actual image
    },
    {
      name: "Jane Smith",
      company: "Creative Solutions",
      feedback:
        "The team at Innovatex Labs is highly skilled and responsive. They turned our vision into reality, and the results speak for themselves.",
      image: "images/testimony-4.jpg", // Replace with actual image
    },
    {
      name: "Sam Johnson",
      company: "Business Pros",
      feedback:
        "Their innovative approach to software development has helped us scale faster than ever. We look forward to working with them again.",
      image: "images/testimony-4.jpg", // Replace with actual image
    },
  ];

  return (
    <div className="testimonial-section-software">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="testimonial-cards-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              className="testimonial-image"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className="testimonial-text">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
