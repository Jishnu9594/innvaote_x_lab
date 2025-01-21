import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaCog,
  FaUserAlt,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web App Development",
      description:
        "Develop powerful and scalable web apps to drive your business forward.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Design beautiful and intuitive user interfaces that users love.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Reach a wider audience and grow your brand with targeted digital marketing strategies.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description:
        "Optimize your website to rank higher in search engines and drive traffic.",
    },
    {
      icon: <FaCog />,
      title: "Custom Software Solutions",
      description:
        "Delivering high-quality, tailor-made software solutions for your business.",
    },
    {
      icon: <FaUserAlt />,
      title: "Consulting Services",
      description:
        "Expert advice to streamline your business processes and improve efficiency.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-content">
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <button className="service-card-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
