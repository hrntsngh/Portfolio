import React from "react";
import CUFOODZ from "../assets/CuFoodz.png";
import JuststayIn from "../assets/Just-stayIn.png";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="box">
        <div className="image">
          <motion.img
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            viewport={{ once: true }}
            src={CUFOODZ}
            alt=""
          />
        </div>
        <p>June - November, 2023</p>
        <h5>
          <span>CUFOODZ</span> - A FOOD DELIVERY WEB-APPLICATION
        </h5>
        <a className="visit-button" href="https://cufoodz.com">
          Visit
        </a>
      </div>
      <div className="box">
        <div className="image">
          <motion.img
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ ease: "linear" }}
            src={JuststayIn}
            alt=""
          />
        </div>
        <p>February - march, 2023</p>
        <h5>
          <span>JUST STAYIN</span> - A HOTEL BOOKING WEB-APPLICATION
        </h5>
        <a className="visit-button" href="https://cufoodz.com">
          Visit
        </a>
      </div>
    </div>
  );
};

export default Projects;
