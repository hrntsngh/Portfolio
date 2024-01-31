import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Exp.css";
import { motion } from "framer-motion";
import CNlogo from "../assets/CNlogo.png";

const WorkIcon = () => (
  <div className="workIcon">
    <img src={CNlogo} alt="" />
  </div>
);
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur auctor eros, quis malesuada odio blandit
              vitae.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            contentArrowStyle={{
              borderRight: "7px solid  rgba(20, 20, 65, 0.493)",
            }}
            date="2023 - present"
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Testing</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur auctor eros, quis malesuada odio blandit
              vitae.
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Exp;
