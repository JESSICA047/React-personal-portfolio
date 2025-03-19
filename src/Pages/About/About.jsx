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
          LEARN MORE ABOUT MY JOURNEY, SKILLS, AND ASPIRATIONS IN WEB
          DEVELOPMENT
        </p>
      </div>

      <div className="about-content">
        <p data-aos="fade-up">
          Hello! I'm Jessica, a <strong>junior front-end developer</strong> with a
          growing interest in
          <strong> health-tech applications</strong>. Based in Ghana, I'm
          actively developing my skills in web development while drawing from my
          background in
          <strong> biomedical sciences</strong>.
        </p>

        <p data-aos="fade-up" data-aos-delay="100">
          I dedicate my time to learning new technologies, practicing coding,
          and exploring how digital solutions can address real-world problems.
          My ambition is to create intuitive interfaces that make healthcare
          information more accessible and user-friendly.
        </p>

        <h2 data-aos="fade-up">Technical Skills</h2>

        <div data-aos="fade-up" data-aos-delay="100">
          <ul>
            <li>
              🚀 <strong>Front-end:</strong> HTML5, CSS3, JavaScript, React.js
            </li>
            <li>
             🎮 <strong>Version Control:</strong> Git, GitHub
            </li>
            <li>
              🎨 <strong>Design Tools:</strong> VS Code,
            </li>
          </ul>
        </div>

        <p data-aos="fade-up" data-aos-delay="150">
          When I'm not coding, you'll find me writing, exploring new
          technologies, or watching TV series. I enjoy learning about emerging
          trends in the tech industry and how they can be applied to healthcare
          solutions.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          I'm currently seeking <strong>collaborative opportunities</strong> and
          <strong> front-end development projects</strong> that will help me
          grow professionally. I'm particularly interested in health-tech
          initiatives where I can contribute my developing skills. Let's
          connect!
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
