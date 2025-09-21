import React from "react";
import "./About.css";
import myPhoto from "../assets/myphoto.jpg"; // Replace with your photo path
import Resume from "../assets/Resume.pdf";   // Replace with your PDF path

const About = () => {
  return (
    <div className="about-container">
      <img src={myPhoto} alt="My Headshot" />
      <h1>[Olamilekan Johnson]</h1>
      <p>
        Hi! I’m Olamilekan Johnson, a passionate software developer with experience in
        web and mobile development. I enjoy building projects that solve real-world problems.
      </p>
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        <button className="resume-button">View Resume</button>
      </a>
    </div>
  );
};

export default About;
