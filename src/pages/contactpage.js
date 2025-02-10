import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleDownload = () => {
    const brochureUrl = "/brochure.pdf"; // Update with actual brochure path
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.setAttribute("download", "Innovatex_Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="heading">Discover Digital Transformation</h1>
        <p className="subtext">
          Take your business to the next level with cutting-edge innovation.
        </p>
        <button className="btn-transparent" onClick={handleDownload}>
          📥 Download Brochure
        </button>
      </div>

      <div className="contact-right">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tell Us More"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleCheckboxChange}
              required
            />
            <label>
              I have read the privacy policy and consent to the processing of my
              data for the purpose of handling my enquiry.
            </label>
          </div>
          <button type="submit" className="btn-transparent">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
