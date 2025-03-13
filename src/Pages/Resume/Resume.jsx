import React, { useEffect } from "react";
import "./Resume.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Resume() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="resume-container">
      <div className="resume-title">
        <h1 data-aos="fade-down">Resume</h1>
        <p data-aos="fade-up">
          EXPLORE MY PROFESSIONAL EXPERIENCE, EDUCATION, AND TECHNICAL EXPERTISE
        </p>
      </div>

      <div className="resume-content">
        <div className="resume-section" data-aos="fade-up">
          <h2>Experience</h2>

          <div
            className="resume-item"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="resume-item-header">
              <h3>Web Developer</h3>
              <span className="resume-date">2022 - Present</span>
            </div>
            <h4>Company Name</h4>
            <ul>
              <li>Developed responsive web applications using React</li>
              <li>
                Collaborated with design team to implement UI/UX improvements
              </li>
              <li>
                Improved website performance by optimizing code and assets
              </li>
            </ul>
          </div>

          <div
            className="resume-item"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="resume-item-header">
              <h3>Frontend Developer Intern</h3>
              <span className="resume-date">2021 - 2022</span>
            </div>
            <h4>Another Company</h4>
            <ul>
              <li>Created interactive UI components with JavaScript and CSS</li>
              <li>Assisted senior developers with code reviews and testing</li>
              <li>Implemented responsive designs for mobile and desktop</li>
            </ul>
          </div>
        </div>

        <div className="resume-section" data-aos="fade-up">
          <h2>Education</h2>

          <div
            className="resume-item"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="resume-item-header">
              <h3>Bachelor of Science in Computer Science</h3>
              <span className="resume-date">2018 - 2022</span>
            </div>
            <h4>University of the People</h4>
            <p>
              Relevant coursework: Web Development, Database Design, Algorithms
            </p>
          </div>
        </div>

        <div className="resume-section" data-aos="fade-up">
          <h2>Skills</h2>

          <div className="skills-container">
            <div
              className="skill-category"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3>Languages</h3>
              <div className="skills-list">
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">Python</span>
              </div>
            </div>

            <div
              className="skill-category"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3>Frameworks & Libraries</h3>
              <div className="skills-list">
                <span className="skill-item">React</span>
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">Bootstrap</span>
              </div>
            </div>

            <div
              className="skill-category"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h3>Tools</h3>
              <div className="skills-list">
                <span className="skill-item">Git</span>
                <span className="skill-item">VS Code</span>
                <span className="skill-item">Figma</span>
                <span className="skill-item">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-download" data-aos="fade-up" data-aos-delay="600">
        {/* Open in new tab */}
        <a
          href="https://docs.google.com/document/d/1KkYK8HQYeSEQn00Aivvdbt3o72ZsLCwC3NvQ8S3tFRo/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>

        {/* For downloading, use export URL with PDF format */}
        <a
          href="https://docs.google.com/document/d/1KkYK8HQYeSEQn00Aivvdbt3o72ZsLCwC3NvQ8S3tFRo/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
