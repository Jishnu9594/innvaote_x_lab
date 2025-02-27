import { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("position", formData.position);

    try {
      const response = await fetch(
        "https://innovate-x-lab-backend.onrender.com/innovatex/apply/",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setMessage("✅ Application submitted successfully!");
      } else {
        setMessage("❌ Failed to submit application.");
      }
    } catch (error) {
      setMessage("⚠️ An error occurred while submitting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-application-container">
      <div className="job-application-card">
        <h2 className="job-application-title">
          Join <span>InnovateX Labs</span>
        </h2>
        <p className="job-application-subtitle">Apply for your dream job!</p>

        {message && <p className="message">{message}</p>}

        <form onSubmit={handleSubmit} className="job-application-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            required
            onChange={handleChange}
          />
          <label className="file-label">
            Upload Resume (PDF, DOC)
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="job-submit-button"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
