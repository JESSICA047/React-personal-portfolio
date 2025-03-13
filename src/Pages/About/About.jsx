import React, { useEffect } from "react";
import AOS from "aos";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import gmail from "../../assets/images/gmail.png";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="about-title">
        <h1 data-aos="fade-down">About</h1>
        <p data-aos="fade-up">
          LEARN MORE ABOUT MY JOURNEY, SKILLS, AND EXPERIENCE IN THE WORLD OF
          WEB DEVELOPMENT
        </p>
      </div>

      <div className="about-content">
        <p data-aos="fade-up">
          Hello there, I'm Jessica, a full-stack developer in the making with a
          passion for machine learning and AI. I'm currently based in Ghana and
          actively building my skills in software development while integrating
          my background in biomedical sciences and data science.
        </p>

        <p data-aos="fade-up" data-aos-delay="100">
          I'm constantly learning new technologies and sharpening my
          problem-solving skills to create impactful digital solutions. My goal
          is to bridge the gap between healthcare, AI, and software development
          by building smart, data-driven applications.
        </p>

        <h2 data-aos="fade-up">Technical Skills</h2>

        <div data-aos="fade-up" data-aos-delay="100">
          <ul>
            <li>Front-end: HTML5, CSS3, JavaScript, React.js</li>
            <li>Back-end: Node.js, Express</li>
            <li>Databases: MongoDB, SQL</li>
            <li>Version Control: Git, GitHub</li>
            <li>Other Tools: VS Code, Figma, Postman</li>
          </ul>
        </div>

        <p data-aos="fade-up" data-aos-delay="150">
          When I'm not coding, you'll find me writing, brainstorming business
          ideas, or exploring AI applications. I also love a good TV series,
          especially anything with a great storyline!
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          I'm actively looking for collaborations and exciting opportunities in
          software development, AI, and data-driven projects. Feel free to
          connect with me through my socials below!
        </p>
      </div>

      <div className="socials" data-aos="fade-up" data-aos-delay="250">
        <a
          href="https://github.com/JESSICA047"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={github} alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/dziedzorm0/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>

        <a href="mailto:adzoyijessica04@gmail.com" className="social-link">
          <img src={gmail} alt="Email" />
        </a>
      </div>
    </div>
  );
}

export default About;
