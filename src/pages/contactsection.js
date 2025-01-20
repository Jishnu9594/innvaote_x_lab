import React from "react";

const ContactSection = () => {
  return (
    <div className="wrap">
      <div className="container">
        <div className="row justify-content-between">
          {/* Contact Info */}
          <div className="col-12 col-md d-flex align-items-center">
            <p className="mb-0 phone">
              <span className="mailus">Phone no:</span>
              <a href="tel:+001234567">+00 1234 567</a> or{" "}
              <span className="mailus">email us:</span>
              <a href="mailto:emailsample@email.com">
                innovate_xlabs@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-12 col-md d-flex justify-content-md-end">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-facebook">
                    <i className="sr-only">Facebook</i>
                  </span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-twitter">
                    <i className="sr-only">Twitter</i>
                  </span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-instagram">
                    <i className="sr-only">Instagram</i>
                  </span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-dribbble">
                    <i className="sr-only">Dribbble</i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
