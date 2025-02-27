import React, { useEffect, useState } from "react";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://innovate-x-lab-backend.onrender.com/innovatex/clients/") // Adjust API URL if necessary
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2 className="clients-title">Trusted by Industry Leaders</h2>
        <p className="clients-subtitle">
          Join the companies that trust us to deliver exceptional solutions.
        </p>
      </div>

      <div className="clients-logo-list">
        {clients.map((client, index) => (
          <div key={index} className="client-logo-container">
            <img
              className="client-logo"
              src={client.client_logo}
              alt={client.client_name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
