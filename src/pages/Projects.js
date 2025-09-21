import React from "react";
import "./Projects.css";
import project1 from "../assets/projects/project1.PNG";
import project2 from "../assets/projects/project2.PNG";
import placeholder from "../assets/projects/placeholder.jpg"; // add a placeholder image

const Projects = () => {
  const projectList = [
    {
    img: project1,
    title: "ICET Student Survey",
    role: "Desktop App Developer",
    description: "A desktop application with a structured form to collect student survey data, including residency, program selection, and courses.",
  },
  {
    img: project2,
    title: "Flight Booking System",
    role: "Desktop App Developer",
    description: "A flight booking form that lets users enter personal details, passenger count, travel class, and departure date in a user-friendly interface.",
  },
  {
    img: placeholder,
    title: "Project Three (Coming Soon)",
    role: "Software Designer",
    description: "An upcoming project I am currently working on. Details will be shared soon!",
  },
];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p><strong>Role:</strong> {project.role}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
