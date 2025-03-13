import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1 data-aos="fade-down">Get In Touch</h1>
        <p data-aos="fade-up">LET'S CREATE SOMETHING AMAZING TOGETHER</p>
      </div>

      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right">
          <div className="contact-info-item">
            <div className="icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>Ho, Ghana</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>adzoyijessica04@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon">🔗</div>
            <div>
              <h3>Connect</h3>
              <div className="mini-socials">
                <a
                  href="https://github.com/JESSICA047"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dziedzorm0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="animated-form">
            <div
              className={`form-group ${focused.name ? "focused" : ""} ${
                formData.name ? "has-value" : ""
              }`}
            >
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
              />
              <label htmlFor="name">Your Name</label>
              <span className="focus-border"></span>
            </div>

            <div
              className={`form-group ${focused.email ? "focused" : ""} ${
                formData.email ? "has-value" : ""
              }`}
            >
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
              />
              <label htmlFor="email">Your Email</label>
              <span className="focus-border"></span>
            </div>

            <div
              className={`form-group ${focused.message ? "focused" : ""} ${
                formData.message ? "has-value" : ""
              }`}
            >
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
              ></textarea>
              <label htmlFor="message">Your Message</label>
              <span className="focus-border"></span>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
