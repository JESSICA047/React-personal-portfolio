import React from "react";
import { projectsData } from "../../components/Project/Project";
import "./Portfolio.css";
import github from "../../assets/images/github.png";
import laptop from "../../assets/images/laptop.png";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <p>HERE ARE SOME OF THE PROJECTS THAT I'VE COMPLETED</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-wrapper">
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                data-tooltip="View on GitHub"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
                data-tooltip="View Live Demo"
              >
                <img src={laptop} alt="laptop" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
