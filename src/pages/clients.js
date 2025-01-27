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
        <h2 className="clients-title">Trusted by Industry Leaders</h2>
        <p className="clients-subtitle">
          Join the companies that trust us to deliver exceptional solutions.
        </p>
      </div>

      <div className="clients-logo-list">
        {clientLogos.map((logo, index) => (
          <div key={index} className="client-logo-container">
            <img
              className="client-logo"
              src={logo}
              alt={`Client ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
