import React, { useState } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
 e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    .then(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error("Email Error:", error);
      alert("Failed to send message. Try again!");
    });

    e.target.reset();
  };

  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#1A1AFF", marginBottom: "20px" }}>Hey! How’s your day? </h2>

      <form onSubmit={handleSubmit} style={{
        display: "flex", flexDirection: "column", gap: "15px",
        maxWidth: "400px", margin: "40px auto", background: "#1b1b2f",
        padding: "25px", borderRadius: "12px",
        boxShadow: "0 0 20px rgba(26,26,255,0.2)"
      }}>
        <input type="text" placeholder="Your Name" name="name" style={{
          padding: "12px", borderRadius: "8px", border: "none",
          outline: "none", background: "#0e0e1a", color: "#fff"
        }}/>
        <input type="email" placeholder="Your Email" name="email"style={{
          padding: "12px", borderRadius: "8px", border: "none",
          outline: "none", background: "#0e0e1a", color: "#fff"
        }}/>
        <textarea placeholder="Type your message..." name="message"rows="5" style={{
          padding: "12px", borderRadius: "8px", border: "none",
          outline: "none", background: "#0e0e1a", color: "#fff", resize: "none"
        }}/>
        <button type="submit" style={{
          background: "#1A1AFF", color: "#fff", border: "none",
          padding: "12px", borderRadius: "8px", cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseOver={e => e.target.style.boxShadow = "0 0 12px #1A1AFF"}
        onMouseOut={e => e.target.style.boxShadow = "none"}>
          Send it over ✉️
        </button>
      </form>

      {submitted && <p style={{ color: "#00ff99", marginTop: "20px" }}>Thanks! I’ll get back to you soon 😄</p>}
    </section>
  );
}

export default Contact;
