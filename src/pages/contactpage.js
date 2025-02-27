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

  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(null); // To show error message
  const [success, setSuccess] = useState(null); // To show success message

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formDataToSend = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      consent: formData.consent,
    };

    try {
      const response = await fetch(
        "https://innovate-x-lab-backend.onrender.com/innovatex/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError("Failed to send message. Please try again.");
        console.error("Error:", errorData);
      } else {
        setSuccess("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
          consent: false,
        });
      }
    } catch (error) {
      setError("Network error. Please try again.");
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Brochure Download
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
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
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
          <button type="submit" className="btn-transparent" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
