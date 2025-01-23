import React from "react";
import {
  FaCode,
  FaSearch,
  FaBullhorn,
  FaChalkboardTeacher,
  FaCog,
  FaUsersCog,
  FaArrowRight, // Import arrow icon
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Developing cutting-edge websites with the latest technologies for optimal performance.",
    },
    {
      icon: <FaSearch />,
      title: "SEO",
      description:
        "Optimizing websites to rank higher on search engines and drive organic traffic.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Creating and executing strategic marketing campaigns to increase your brand presence online.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Training",
      description:
        "Offering specialized training programs to help you and your team stay ahead in the tech industry.",
    },
    {
      icon: <FaCog />,
      title: "Custom Software Solutions",
      description:
        "Providing tailored software solutions to fit your unique business needs and workflows.",
    },
    {
      icon: <FaUsersCog />,
      title: "Consulting Services",
      description:
        "Helping businesses optimize their strategies, improve performance, and drive growth through expert consulting.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Expertise</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-icon">{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <a href="#learn-more" className="service-card-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
      <div className="view-all-services-container">
        <button className="view-all-services-button">
          View All Services <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
