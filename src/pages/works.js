import React, { useEffect, useState } from "react";
import axios from "axios";

const CaseStudyPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/innovatex/case-studies/list/")
      .then((response) => {
        setCaseStudies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching case studies:", error);
        setCaseStudies([
          {
            project_title: "Error",
            project_description: "Unable to fetch case studies.",
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="case-study-section">
      <div className="case-study-header">
        <h1 className="case-study-title">
          <span className="highlight">Our</span> Projects
        </h1>
      </div>

      <div className="case-study-container">
        {loading ? (
          <p>Loading case studies...</p>
        ) : (
          caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <img
                className="case-study-image"
                src={study.project_image}
                alt={study.project_title}
              />
              <div className="case-study-info">
                <h3 className="case-study-card-title">{study.project_title}</h3>
                <p className="case-study-card-description">
                  {study.project_description}
                </p>
                <a className="case-study-card-button" href={study.project_link}>
                  Learn More
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* View All Projects Button */}
      <div className="view-all-case-studies-container">
        <a className="view-all-case-studies-button" href="#">
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path d="M11.854 7.854a.5.5 0 0 0 0-.708L8.707 4.707a.5.5 0 0 0-.708.708L10.793 7H4.5a.5.5 0 0 0 0 1h6.293l-2.793 2.793a.5.5 0 0 0 .708.708l3.146-3.147z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CaseStudyPage;
