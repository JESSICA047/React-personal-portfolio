import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import "animate.css";

function Home() {
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
                I'M <span className="name">JESSICA</span>, 
              </p>
              <p className="role-text">AND I'M A FRONT-END DEVELOPER.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
