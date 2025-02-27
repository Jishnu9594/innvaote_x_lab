import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CareerSection = () => {
  const navigate = useNavigate();
  const [jobPositions, setJobPositions] = useState([]);

  // Fetch jobs from Django API
  useEffect(() => {
    fetch("https://innovate-x-lab-backend.onrender.com/innovatex/jobs/") // Change URL in production
      .then((response) => response.json())
      .then((data) => setJobPositions(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="career-section">
      <h2 className="career-heading">Current Openings</h2>
      <p className="career-subheading">
        Become part of a high-performing & collaborative team
      </p>

      <div className="career-grid">
        {jobPositions.map((job) => (
          <div key={job.id} className="career-card">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-location">Location: {job.location}</p>
            <p className="job-date">Posted: {job.posted_date}</p>
            <p className="job-deadline">Deadline: {job.deadline}</p>
            <p className="job-description">{job.description}</p>
            <button onClick={() => navigate("/apply")} className="apply-btn">
              Apply Now <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSection;
