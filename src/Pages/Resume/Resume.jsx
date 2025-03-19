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
        <h1 data-aos="fade-down">Experience</h1>
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
              <h3>Frontend Developer Intern</h3>
              <span className="resume-date">Oct 2024 - Present</span>
            </div>
            <h4>Node Eight</h4>
            <ul>
              <li>
                Worked in team to develop a responsive web applications using
                React
              </li>
            </ul>
          </div>

          <div
            className="resume-item"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="resume-item-header">
              <h3>Monitoring Evaluating and Learning Officer Intern</h3>
              <span className="resume-date">Oct 2024 - Present</span>
            </div>
            <h4>Node Eight</h4>
            <ul>
              <li>Monitored , Evaluated and Analyzed data for company</li>
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
              <span className="resume-date">2023 - Present</span>
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
                <span className="skill-item">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-download" data-aos="zoom-in" data-aos-delay="400">
        {/* Download CV */}
        <a
          href="https://drive.google.com/file/d/1aDhCXu5hUFCm-T2t0AtYFVULSDTbJEFv/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="download-btn"
        >
          Download CV
        </a>

        {/* Download Resume */}
        <a
          href="https://drive.google.com/file/d/1aDhCXu5hUFCm-T2t0AtYFVULSDTbJEFv/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download="Jessica_Resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
