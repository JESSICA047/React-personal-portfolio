import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <div>
      <div className="contact-title">
        <h1>Contact</h1>
        <p>HERE ARE SOME OF THE PROJECTS THAT I'VE COMPLETED</p>
      </div>
      <div className="contact-form">
        <h1>Contact Me!</h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
