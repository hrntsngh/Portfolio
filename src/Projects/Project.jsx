import React from "react";
import { motion } from "framer-motion";
import "./Project.css";
import Projects from "./Projects";
const Project = () => {
  return (
    <div id="project">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h1>
      <div className="project-overview">
        <Projects />
      </div>
    </div>
  );
};

export default Project;
