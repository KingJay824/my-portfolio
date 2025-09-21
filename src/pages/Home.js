import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi! I’m [Your Name], a software developer passionate about building
        amazing web and mobile applications.
      </p>
      <Link to="/about">
        <button className="cta-button">Learn More About Me</button>
      </Link>
    </div>
  );
};

export default Home;
