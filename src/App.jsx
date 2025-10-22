import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    // Create the glow element once when app loads
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    let fadeTimeout;

    const handleMouseMove = (e) => {
      // Position the glow to follow the cursor
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;

      // Make glow visible when cursor moves
      glow.classList.add("active");
      clearTimeout(fadeTimeout);

      // Fade out after 1s of no movement
      fadeTimeout = setTimeout(() => {
        glow.classList.remove("active");
      }, 1000);
    };

    // Listen for mouse movements anywhere in the document
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      glow.remove();
    };
  }, []);

  return (
    <div id="app-container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
