import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaUserAlt,
  FaCog,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web App Development",
      description:
        "We build highly functional and scalable web applications tailored to your needs.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      description:
        "Crafting modern, user-friendly designs to elevate your brand and engage users.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Implementing effective strategies to grow your online presence and reach a wider audience.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Services",
      description:
        "Optimizing your website for search engines to boost your visibility and ranking.",
    },
    {
      icon: <FaUserAlt />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and delightful user interfaces and experiences for your users.",
    },
    {
      icon: <FaCog />,
      title: "Software Development",
      description:
        "Custom software solutions to automate business processes and improve efficiency.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <div className="service-card-back">
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
