import React from "react";
import "./Services.css";

// Import your downloaded icons
import webIcon from "../assets/services/web.png";
import mobileIcon from "../assets/services/mobile.png";
import designIcon from "../assets/services/design.png";

const Services = () => {
  const services = [
    {
      img: webIcon,
      title: "Web Development",
      description: "Building responsive and scalable websites using React, HTML, CSS, and modern frameworks.",
    },
    {
      img: mobileIcon,
      title: "Mobile App Development",
      description: "Developing mobile-friendly applications for Android and iOS platforms.",
    },
    {
      img: designIcon,
      title: "UI/UX Design",
      description: "Designing clean, user-friendly interfaces that enhance user experience.",
    },
  ];

  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
