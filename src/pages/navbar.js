import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="index.html">
          INNOVATE_X<span>LABS</span>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a href="index.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="services.html" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="blog.html" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="careers.html" className="nav-link">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a href="testimonials.html" className="nav-link">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="partnership.html" className="nav-link">
                Partnership
              </a>
            </li>
            <li className="nav-item">
              <a href="works.html" className="nav-link">
                Works
              </a>
            </li>
            <li className="nav-item cta">
              <a href="#" className="nav-link">
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
