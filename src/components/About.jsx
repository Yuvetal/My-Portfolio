import React from "react";
import "./About.css"; // we'll move styling to CSS for consistency

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I’m a passionate Frontend Developer who loves creating clean, responsive,
        and engaging user interfaces. I enjoy working with technologies like{" "}
        <strong>React, JavaScript, HTML, CSS</strong>, and exploring new ways
        to make web experiences smoother and more interactive.
      </p>
      <p>
        Lately, I’ve been diving into the fascinating world of{" "}
        <strong>blockchain technology</strong> — learning how decentralized
        systems can transform the way we share and secure data. I’m also studying{" "}
        <strong>Japanese</strong> and love challenging myself to learn new things
        every day.
      </p>
      <p>
        Outside of tech, I’m a huge fan of <strong>gaming</strong> — it inspires
        me to think creatively, pay attention to design details, and build
        experiences that truly connect with users. My goal is to keep growing as
        a developer and work on projects that combine creativity, logic, and
        real-world impact.
      </p>
    </section>
  );
}

export default About;
