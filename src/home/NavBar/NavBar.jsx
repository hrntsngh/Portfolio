import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [UnderlineAbout, setUnderlineAbout] = useState(false);
  const [UnderlineProjects, setUnderlineProjects] = useState(false);
  const [UnderlineExperience, setUnderlineExperience] = useState(false);
  const [UnderlineSkills, setUnderlineSkills] = useState(false);
  const [UnderlineContact, setUnderlineContact] = useState(false);
  // const [hidden, setHidden] = useState(false);

  // const { scrollY } = useScroll();
  const clicked = () => {
    setClick(!click);
  };
  const handleHover = () => {
    setHovered(true);
  };

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious();
  //   if (latest > previous && latest > 500) {
  //     setHidden(true);
  //   } else {
  //     setHidden(false);
  //   }
  // });
  const showUnderlineAbout = () => {
    setUnderlineAbout(true);
  };
  const exitUnderlineAbout = () => {
    setUnderlineAbout(false);
  };
  const showUnderlineProjects = () => {
    setUnderlineProjects(true);
  };
  const exitUnderlineProjects = () => {
    setUnderlineProjects(false);
  };
  const showUnderlineExperience = () => {
    setUnderlineExperience(true);
  };
  const exitUnderlineExperience = () => {
    setUnderlineExperience(false);
  };
  const showUnderlineSkills = () => {
    setUnderlineSkills(true);
  };
  const exitUnderlineSkills = () => {
    setUnderlineSkills(false);
  };
  const showUnderlineContact = () => {
    setUnderlineContact(true);
  };
  const exitUnderlineContact = () => {
    setUnderlineContact(false);
  };
  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <motion.div className="NavBar" initial={{ y: "-200px" }} animate={{ y: 0 }}>
      <div className="NavBar-logo">
        <a
          href="#main"
          className={hovered ? "ASTAAD" : "show"}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          style={{
            fontSize: hovered ? "24.5px" : "20px",
          }}
        >
          {hovered ? "astaad" : "ਅਸਤਾਦ"}
        </a>
      </div>
      <div className="NavBar-links">
        <div className="line">
          <motion.a
            onMouseEnter={showUnderlineAbout}
            onMouseLeave={exitUnderlineAbout}
            href="#About"
          >
            ABOUT{" "}
          </motion.a>
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={
              UnderlineAbout
                ? { width: "100%", backgroundColor: "white", height: "0.5px" }
                : { backgroundColor: "white" }
            }
            exit={{ width: 0, ease: "easeInOut" }}
            transition={{ duration: 0.3 }}
            className="uline"
          ></motion.div>
        </div>
        <div className="line">
          <motion.a
            onMouseEnter={showUnderlineProjects}
            onMouseLeave={exitUnderlineProjects}
            href="#project"
          >
            PROJECTS{" "}
          </motion.a>
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={
              UnderlineProjects
                ? { width: "100%", backgroundColor: "white", height: "0.5px" }
                : { backgroundColor: "white" }
            }
            className="uline"
          ></motion.div>
        </div>
        {/* <div className="line">
          <motion.a
            onMouseEnter={showUnderlineProjects}
            onMouseLeave={exitUnderlineProjects}
            href="#project"
          >
            PROJECTS
          </motion.a>
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={
              UnderlineProjects
                ? { width: "100%", backgroundColor: "white", height: "1px" }
                : ""
            }
            className="uline"
          ></motion.div>
        </div> */}

        <div className="line">
          <motion.a
            onMouseEnter={showUnderlineExperience}
            onMouseLeave={exitUnderlineExperience}
            href="#Experience"
          >
            EXPERIENCE
          </motion.a>
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={
              UnderlineExperience
                ? { width: "100%", backgroundColor: "white", height: "0.5px" }
                : { backgroundColor: "white" }
            }
            className="uline"
          ></motion.div>
        </div>

        <div className="line">
          <motion.a
            onMouseEnter={showUnderlineSkills}
            onMouseLeave={exitUnderlineSkills}
            href="#Skills"
          >
            SKILLS
          </motion.a>
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={
              UnderlineSkills
                ? { width: "100%", backgroundColor: "white", height: "0.5px" }
                : { backgroundColor: "white" }
            }
            className="uline"
          ></motion.div>
        </div>

        <div className="line">
          <motion.a
            onMouseEnter={showUnderlineContact}
            onMouseLeave={exitUnderlineContact}
            href="#Contact"
          >
            CONTACT
          </motion.a>
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={
              UnderlineContact
                ? { width: "100%", backgroundColor: "white", height: "0.5px" }
                : { backgroundColor: "white" }
            }
            className="uline"
          ></motion.div>
        </div>
      </div>
      <div className="NavBar-icons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="optionButton" onClick={clicked}>
        <motion.div
          animate={
            click
              ? {
                  rotate: 45,
                  translateY: 5,
                  width: "20px",
                  height: "2px",
                  backgroundColor: "#fff",
                }
              : {
                  width: "20px",
                  height: "2px",
                  backgroundColor: "#fff",
                }
          }
          className="line1"
        ></motion.div>
        <motion.div
          animate={
            click
              ? { opacity: 0 }
              : { width: "20px", height: "2px", backgroundColor: "#fff" }
          }
          className="line2"
        ></motion.div>
        <motion.div
          animate={
            click
              ? {
                  rotate: -45,
                  translateY: -6,
                  width: "20px",
                  height: "2px",
                  backgroundColor: "#fff",
                }
              : {
                  width: "20px",
                  height: "2px",
                  backgroundColor: "#fff",
                }
          }
          className="line3"
        ></motion.div>
      </div>
      {/* {click && ( */}
      <motion.div
        className="dropDownMenu"
        animate={
          click
            ? { height: "100%", display: "flex" }
            : { height: "0px", display: "none" }
        }
      >
        <a href="#About" onClick={clicked}>
          About
        </a>

        <a href="#project" onClick={clicked}>
          Projects
        </a>
        <a href="#Experience" onClick={clicked}>
          Experience
        </a>
        <a href="#Skills" onClick={clicked}>
          Skills
        </a>
        <a href="#Contact" onClick={clicked}>
          Contact
        </a>
      </motion.div>
      {/* )} */}
    </motion.div>
  );
};

export default NavBar;
