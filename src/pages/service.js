import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ServicesSection = () => {
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="row justify-content-center">
          {/* Service 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-light rounded">
              <div className="card-body text-center">
                <div className="icon mb-3">
                  <i className="fas fa-bolt fa-3x text-warning"></i>
                </div>
                <h5 className="card-title">
                  Information Technology Consultancy
                </h5>
                <p className="card-text">
                  We provide expert IT consultancy to guide you through
                  technology challenges and optimize your infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-light rounded">
              <div className="card-body text-center">
                <div className="icon mb-3">
                  <i className="fas fa-lightbulb fa-3x text-info"></i>
                </div>
                <h5 className="card-title">Product Design Strategy</h5>
                <p className="card-text">
                  We design intuitive products with user experience at the heart
                  of our process to ensure the best outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-light rounded">
              <div className="card-body text-center">
                <div className="icon mb-3">
                  <i className="fas fa-shield-alt fa-3x text-success"></i>
                </div>
                <h5 className="card-title">Cyber Security & Web Development</h5>
                <p className="card-text">
                  We offer robust cybersecurity solutions and expert web
                  development to protect and enhance your online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
