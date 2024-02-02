import React, { useState } from "react";

export default function About() {
  let [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black"
  })

  let [mode, setMode] = useState("Dark Mode")



  const toggleDarkLightMode = () => {
    if (mode == "White Mode") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",

      })

      setMode("Dark Mode")
    }
    else {
      setMyStyle({
        backgroundColor: "black",
        color: "white",

      })

      setMode("White Mode")
    }

  }

  return (

    <div className="container my-3" style={myStyle}>
      <h1 className="text-center">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              ABOUT THE PROJECT TEXT-MANUPULATOR
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Created modular and reusable React components for efficient and scalable UI development
                • Utilized JavaScript methods to enable users to easily convert input text to both lower and UPPER
                CASE,Capitalize Case
                • Integrated a customizable dark and light mode, allowing users to personalize their experience based on their
                preferences</strong>

            </div>
          </div>
        </div>


      </div>
   
        

    <div className="container my-4">
      <button type="button" onClick={toggleDarkLightMode} className="btn btn-primary my-3">{mode}</button>
    </div>
        </div >
      
    
  );
}
