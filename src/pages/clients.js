import React from "react";

const ClientsSection = () => {
  const clientLogos = [
    "images/1.svg",
    "images/2.svg",
    "images/3.svg",
    "images/4.svg",
    "images/5.svg",
    "images/6.svg",
    "images/7.svg",
    "images/8.svg",
  ];

  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2 className="clients-title">Our Clients</h2>
      </div>

      <div className="clients-logo-list">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            className="client-logo"
            src={logo}
            alt={`Client ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
