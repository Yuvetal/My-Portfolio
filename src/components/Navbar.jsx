import React from "react";

function Navbar() {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", padding:"20px"}}>
      <h1 style={{color:"#1A1AFF"}}>Logu Ajith Kumar</h1>
      <div>
        <a href="#about" style={{margin:"0 15px"}}>About</a>
        <a href="#projects" style={{margin:"0 15px"}}>Projects</a>
        <a href="#contact" style={{margin:"0 15px"}}>Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;