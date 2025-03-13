import React, { useEffect, useState } from "react";
import { projectsData } from "../../components/Project/Project";
import "./Portfolio.css";
import AOS from "aos";
import github from "../../assets/images/github.png";
import laptop from "../../assets/images/laptop.png";
import "aos/dist/aos.css";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // Get unique technology categories
  const allTechnologies = ["All"];
  projectsData.forEach((project) => {
    project.technologies.forEach((tech) => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });

  // Filter projects based on selected technology
  const handleFilterClick = (tech) => {
    setActiveFilter(tech);

    if (tech === "All") {
      setFilteredProjects(projectsData);
      return;
    }

    const filtered = projectsData.filter((project) =>
      project.technologies.includes(tech)
    );
    setFilteredProjects(filtered);

    // Re-initialize AOS for filtered items
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <p>HERE ARE SOME OF THE PROJECTS THAT I'VE COMPLETED</p>
      </div>

      <div className="portfolio-filters" data-aos="fade-up">
        {allTechnologies.map((tech, index) => (
          <button
            key={index}
            className={`filter-btn ${activeFilter === tech ? "active" : ""}`}
            onClick={() => handleFilterClick(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-wrapper"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
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
                <img src={github} alt="GitHub" />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
                data-tooltip="View Live Demo"
              >
                <img src={laptop} alt="Live Demo" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
