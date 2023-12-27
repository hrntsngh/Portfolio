import React from "react";
import CSS from "../assets/CSS.png";
import HTML from "../assets/HTML.png";
import JS from "../assets/JS.png";
import NodeJs from "../assets/NodeJS.png";
import MongoDB from "../assets/MongoDB.png";
import ExpressJS from "../assets/ExpressJS.png";
import logo from "./logo.png";
import Tilt from "react-parallax-tilt";
import { easeIn, motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div id="Skills">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.h1>
      <div className="container">
        <div className="skillBox">
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            className="skill1"
          >
            {" "}
            <Tilt className="skill">
              <img src={HTML} alt="" />
              <h3>HTML</h3>
            </Tilt>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="skill2"
          >
            {" "}
            <Tilt className="skill">
              <img src={CSS} alt="" />
              <h3>CSS</h3>
            </Tilt>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3}
            className="skill3"
          >
            {" "}
            <Tilt className="skill">
              <img src={JS} alt="" />
              <h3>Javascript</h3>
            </Tilt>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={4}
            className="skill4"
          >
            <Tilt className="skill">
              <img src={logo} alt="" />
              <h3>ReactJS</h3>
            </Tilt>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={5}
            className="skill5"
          >
            <Tilt className="skill">
              <img src={NodeJs} alt="" />
              <h3>NodeJS</h3>
            </Tilt>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={6}
            className="skill6"
          >
            <Tilt className="skill">
              <img src={ExpressJS} alt="" />
              <h3>ExpressJs</h3>
            </Tilt>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={7}
            className="skill7"
          >
            <Tilt className="skill">
              <img src={MongoDB} alt="" />
              <h3>MongoDB</h3>
            </Tilt>
          </motion.div>

          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
