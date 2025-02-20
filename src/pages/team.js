import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch team members from backend
    axios
      .get("http://127.0.0.1:8000/innovatex/teams/")
      .then((response) => {
        setTeamMembers(response.data);
      })
      .catch((error) => console.error("Error fetching team members:", error));
  }, []);

  return (
    <section className="team-section">
      <h2 className="section-title">
        <span className="highlighted-word">Meet</span> Our Team
      </h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-photo-wrapper">
              <img
                src={member.image || "https://via.placeholder.com/150"}
                alt={member.name}
                className="team-photo"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150")
                } // Fallback for broken images
              />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <div className="social-icons">
              {member.twitter_link && (
                <a
                  href={member.twitter_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              )}
              {member.linkedin_link && (
                <a
                  href={member.linkedin_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
