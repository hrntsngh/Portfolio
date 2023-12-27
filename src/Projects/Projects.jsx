import React from "react";
import CUFOODZ from "../assets/CuFoodz.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      {/* <div className="box">
        <div className="image">
          <img src="src\assets\CuFoodz.png" alt="" />
        </div>
        <p>February - march, 2023</p>
        <h5>CUFOODZ - A FOOD DELIVERY WEB-APPLICATION</h5>
        <button className="visit-button">Visit</button>
      </div> */}
      <div className="box">
        <div className="image">
          <img src={CUFOODZ} alt="" />
        </div>
        <p>February - march, 2023</p>
        <h5>
          <span>CUFOODZ</span> - A FOOD DELIVERY WEB-APPLICATION
        </h5>
        <button className="visit-button">Visit</button>
      </div>
      <div className="box">
        <div className="image">
          <img src={CUFOODZ} alt="" />
        </div>
        <p>February - march, 2023</p>
        <h5>
          <span>CUFOODZ</span> - A FOOD DELIVERY WEB-APPLICATION
        </h5>
        <button className="visit-button">Visit</button>
      </div>
      <div className="box">
        <div className="image">
          <img src={CUFOODZ} alt="" />
        </div>
        <p>February - march, 2023</p>
        <h5>
          <span>CUFOODZ</span> - A FOOD DELIVERY WEB-APPLICATION
        </h5>
        <button className="visit-button">Visit</button>
      </div>
    </div>
  );
};

export default Projects;
