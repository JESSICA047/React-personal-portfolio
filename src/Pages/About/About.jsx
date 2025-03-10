import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
      delay: 200,
    });
  }, []);

  return (
    <div>
      <div className="about-title" data-aos="fade-up">
        <h1>About</h1>
        <p>
          LEARN MORE ABOUT MY JOURNEY, SKILLS, AND EXPERIENCE IN THE WORLD OF
          WEB DEVELOPMENT
        </p>
      </div>
      <div className="about-content">
        <p data-aos="fade-up" data-aos-duration="1500">
          Hello there, I'm Jessica, a full-stack developer in the making with a
          passion for machine learning and AI. I'm currently based in Ghana and
          actively building my skills in software development while integrating
          my background in biomedical sciences and data science.
        </p>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          I'm constantly learning new technologies and sharpening my
          problem-solving skills to create impactful digital solutions. My goal
          is to bridge the gap between healthcare, AI, and software development
          by building smart, data-driven applications.
        </p>
        <h2 data-aos="fade-right" data-aos-duration="1500">
          Technical Skills
        </h2>
        <ul>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            Front-end: HTML5, CSS3, JavaScript, React.js,
          </li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            Back-end: 
          </li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            Databases: 
          </li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
            Version Control: Git, GitHub
          </li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
            Other Tools: 
          </li>
        </ul>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
          When I'm not coding, you'll find me writing, brainstorming business
          ideas, or exploring AI applications. I also love a good TV series,
          especially anything with a great storyline!
        </p>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
          I'm actively looking for collaborations and exciting opportunities in
          software development, AI, and data-driven projects. Feel free to
          connect with me through my socials below!
        </p>
      </div>
    </div>
  );
}

export default About;
