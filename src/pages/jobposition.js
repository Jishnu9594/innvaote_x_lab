import React from "react";

const CareerSection = () => {
  const jobPositions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      postedDate: "March 1, 2024",
      deadline: "March 15, 2024",
      description: "Build stunning UI/UX experiences with React and Tailwind.",
    },
    {
      title: "Backend Developer",
      location: "New York",
      postedDate: "February 25, 2024",
      deadline: "March 10, 2024",
      description: "Develop and optimize APIs using Django and PostgreSQL.",
    },
    {
      title: "Full Stack Developer",
      location: "San Francisco",
      postedDate: "March 2, 2024",
      deadline: "March 18, 2024",
      description: "Work on full-stack web apps with MERN stack technologies.",
    },
    {
      title: "Product Manager",
      location: "Remote",
      postedDate: "March 5, 2024",
      deadline: "March 20, 2024",
      description:
        "Lead product development & strategy for innovative projects.",
    },
    {
      title: "UI/UX Designer",
      location: "London",
      postedDate: "March 3, 2024",
      deadline: "March 16, 2024",
      description: "Create intuitive and engaging user interfaces.",
    },
    {
      title: "DevOps Engineer",
      location: "Berlin",
      postedDate: "March 4, 2024",
      deadline: "March 19, 2024",
      description: "Build and manage scalable CI/CD pipelines.",
    },
  ];

  return (
    <div className="career-section">
      <h2 className="career-heading">Current Openings</h2>
      <p className="career-subheading">
        Become part of a high-performing & collaborative team
      </p>

      <div className="career-grid">
        {jobPositions.map((job, index) => (
          <div key={index} className="career-card">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-location">Location {job.location}</p>
            <p className="job-date">Posted: {job.postedDate}</p>
            <p className="job-deadline">Deadline: {job.deadline}</p>
            <p className="job-description">{job.description}</p>
            <button className="apply-btn">
              Apply Now <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSection;
