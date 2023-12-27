import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tilt from "react-parallax-tilt";
import "./Exp.css";
import { motion } from "framer-motion";

const WorkIcon = () => <></>;
const Exp = () => {
  return (
    <div id="Experience">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        EXPERIENCE
      </motion.h1>
      <div className="verticalTimeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(20, 20, 65, 0.493)",
            }}
            date="2023 - present"
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Coding Ninjas</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Teaching Assistant
            </h4>
            <p>
              Solved doubts of hundreds of students related to data structures &
              algorithms
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{
              borderRight: "7px solid  rgba(20, 20, 65, 0.493)",
            }}
            date="2023 - present"
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Exp;
