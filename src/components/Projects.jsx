import React from "react";

function Projects() {
  const projects = [
    {title:"Blockchain based Transaction Ledger", desc:"A centralized blockchain-based ledger to record, verify, and manage daily transactions securely.", link:"https://github.com/Yuvetal/PyCharmVault"},
    {title:"Agricultural Produce Supply Chain", desc:"A machine learning model that analyzes text sentiment to determine positivity, negativity, or neutrality in input data. ", link:"https://github.com/Yuvetal/SupplyChain"},
    {title:"Voice Asistant using Python", desc:"A Python-based voice-controlled assistant capable of executing system commands and fetching AI-powered responses.", link:"https://github.com/Yuvetal/Voice_Assistant"},
    {title:"Python-Gemini Integration", desc:"Integrated Google Gemini API with Python to enable intelligent automation and data-driven decision-making.", link:"https://github.com/Yuvetal/Gemini_Integration"},
    {title:"Sentiment Analyser by happytransformer", desc:"A machine learning model that analyzes text sentiment to determine positivity, negativity, or neutrality in input data.", link:"https://github.com/Yuvetal/Sentiment_Analysis"},
  ];

  return (
    <section id="projects">
      <h2 style={{color:"#1A1AFF", marginBottom:"20px"}}>Projects</h2>
      <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
        {projects.map((p, index) => (
          <div key={index} style={{
            backgroundColor:"#111111", padding:"20px", borderRadius:"12px", minWidth:"250px", flex:"1"
          }}>
            <h3 style={{color:"#1A1AFF"}}>{p.title}</h3>
            <p style={{color:"#CCCCCC"}}>{p.desc}</p>
            <a href={p.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;