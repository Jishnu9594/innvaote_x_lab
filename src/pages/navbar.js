import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`custom-navbar ${
        isScrolled ? (isMobile ? "scrolled-mobile" : "scrolled-desktop") : ""
      }`}
    >
      <div className="custom-nav-container">
        {/* Logo */}
        <a href="/" className="custom-nav-logo">
          <img
            src="images/innovatexlogo.png"
            alt="Logo"
            className="custom-logo-img"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <div className="custom-nav-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul
          className={`custom-nav-menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <li className="custom-nav-item">
            <a href="/" className="custom-nav-link">
              Home
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="/about" className="custom-nav-link">
              About
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="/services" className="custom-nav-link">
              Services
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="/blog" className="custom-nav-link">
              Blog
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="/careers" className="custom-nav-link">
              Careers
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="/contact" className="custom-nav-link">
              Contact
            </a>
          </li>
          <li className="custom-nav-item">
            <a href="/login" className="custom-nav-button">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
