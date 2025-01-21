import React from "react";

const CaseStudyPage = () => {
  const caseStudies = [
    {
      title: "Project One",
      description:
        "A brief description of the project and the impact it created.",
      image: "images/pettrust.png",
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "A brief description of the project and the impact it created.",
      image: "images/pettrust.png",
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "A brief description of the project and the impact it created.",
      image: "images/pettrust.png",
      link: "#",
    },
  ];

  return (
    <div className="case-study-section">
      <div className="case-study-header">
        <h1 className="header-title">Case Studies</h1>
      </div>

      <div className="case-study-list">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-item">
            <img
              className="case-study-image"
              src={study.image}
              alt={study.title}
            />
            <div className="case-study-info">
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-description">{study.description}</p>
              <a className="case-study-link" href={study.link}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyPage;
