import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      position: "CEO",
      imgSrc: "images/person_4.jpg",
      socialLinks: {
        twitter: "https://twitter.com/alice",
        linkedin: "https://linkedin.com/in/alice",
      },
    },
    {
      name: "Bob Smith",
      position: "CTO",
      imgSrc: "images/person_3.jpg",
      socialLinks: {
        twitter: "https://twitter.com/bob",
        linkedin: "https://linkedin.com/in/bob",
      },
    },
    {
      name: "Charlie Brown",
      position: "Designer",
      imgSrc: "images/person_2.jpg",
      socialLinks: {
        twitter: "https://twitter.com/charlie",
        linkedin: "https://linkedin.com/in/charlie",
      },
    },
  ];

  return (
    <div className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.imgSrc} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <div className="social-icons">
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
