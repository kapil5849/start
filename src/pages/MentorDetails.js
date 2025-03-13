import React from 'react';
import '../styles/mentor.css';
import kapilImage from '../assets/kapil.jpg';
import planetAlba from '../assets/planetalba.jpeg';
import DSAJunction from '../assets/junctiondsa.png';

const Mentor = () => {
  const mentors = [
    {
      name: 'Kapil Vaishnav',
      position: 'Lead Mentor',
      description: 'Experienced software engineer with expertise in algorithms and data structures.',
      imageUrl: kapilImage, // Replace with the actual image file path
      previousWork: [
        {
          company: 'Frontend Engineer at PlanetAlba',
          logoUrl: planetAlba, // Replace with the actual logo file path
        },
        {
          company: 'Founder at DSA Junction',
          logoUrl: DSAJunction, // Replace with the actual logo file path
        },
        // Add more previous work experiences as needed
      ],
    },
    // Add more mentors as needed
  ];

  return (
    <div className="mentor-section">
      <h2 className="mentor-heading">Meet the Instructor</h2>
      <div className="mentor-container">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <img
              src={mentor.imageUrl}
              alt={`${mentor.name}'s profile`}
              className="mentor-image"
            />
            <h3 className="mentor-name">{mentor.name}</h3>
            <p className="mentor-position">{mentor.position}</p>
            <p className="mentor-description">{mentor.description}</p>
            <div className="previous-work">
              {/* <h4>Previous Work</h4> */}
              {mentor.previousWork.map((work, workIndex) => (
                <div key={workIndex} className="work-item">
                  <img
                    src={work.logoUrl}
                    alt={`${work.company} logo`}
                    className="work-logo"
                  />
                  <p>{work.company}</p>
                </div>
              ))}
            </div>
            <div className="social-media">
              {/* <h4>Connect with {mentor.name}</h4> */}
              <a href="https://twitter.com/kapil__vaishnav" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/kapil--vaishnav/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/kapil____vaishnav/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
