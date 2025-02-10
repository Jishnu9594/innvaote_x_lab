import React from "react";

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-heading">
        <h2>InnovateX Labs Locations</h2>
        <p>We work in prime location of kochi</p>
      </div>

      <div className="location-details">
        <h3>INDIA</h3>
        <div className="address">
          <p>
            INNOVATE_X LABS JB Campus, Perumbavoor-Puthenkurish Road,
            Arakkappady, Vengola, Perumbavoor, Kerala 683556
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <a
              href="https://www.google.com/maps/search/?q=Webandcrafts+Technology+Solutions+Pvt.+Ltd.+Special+Economic+Zone+Infopark+Thrissur,+Koratty+P.O,+Thrissur+-+680308,+Kerala,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Map
            </a>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <p>General Enquiry: +91 480 2733 111</p>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <p>Sales Enquiry: +91 480 2733 555</p>
          </div>

          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>
              Email:{" "}
              <a href="mailto:info@webandcrafts.com">info@innovatex.com</a>
            </p>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <p>HR Enquiry: +91 480 2733 999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
