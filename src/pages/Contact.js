import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show success or error

  const API_URL = "http://localhost:5000/api/contacts";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      setFormData({
        firstname: "",
        lastname: "",
        contactNumber: "",
        email: "",
        message: "",
      });
      setStatus("Message sent successfully!");
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p><strong>Email:</strong> olamilekanjohnson13@gmail.com</p>
        <p><strong>Phone:</strong> +1 (647) 473-1060</p>
        <p><strong>Location:</strong> Toronto, Canada</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
