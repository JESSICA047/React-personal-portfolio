import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import "animate.css";

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["HEALTH-TECH ENTHUSIAST", "FRONT-END DEVELOPER"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 1500;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));

          // Once we've typed the full role
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), delayBetweenRoles);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));

          // Once we've deleted the role
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <div className="home">
      <Navbar />
      <main className="main-content">
        <section className="hero-section">
          <div className="left">
            <h1 className="hello-text animate__animated animate__fadeInLeft">
              HELLO THERE!
            </h1>
          </div>
          <div className="right">
            <div className="intro-text animate__animated animate__fadeInRight">
              <p className="im-text">
                I'M{" "}
                <Link to="/about" className="name">
                  JESSICA
                </Link>
                ,<p>AND I'M A </p>
              </p>
              <p className="role-text">
                <p>
                  {" "}
                  <span className="role-animation">{displayText}</span>
                  <span className="cursor"></span>
                </p>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
