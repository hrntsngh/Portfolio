import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Exp.css";
import { motion } from "framer-motion";
import CNlogo from "../assets/CNlogo.png";
import TCS from "../assets/TCS.png";

const WorkIcon1 = () => (
  <div className="workIcon">
    <img src={CNlogo} alt="" />
  </div>
);
const WorkIcon2 = () => (
  <div className="workIcon">
    <img src={TCS} alt="" />
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
            date="January' 24 - April' 24 "
            icon={<WorkIcon1 />}
          >
            <h3 className="vertical-timeline-element-title">Coding Ninjas</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Teaching Assistant
            </h4>
            <p>
              <ul>
                <li>
                  Mentored over 200 students in Data Structures and Algorithms
                  (DSA).
                </li>
                <li>
                  Achieved a rating of 4.92 out of 5, with 90% 5-star ratings.
                </li>
                <li>
                  Provided personalized assistance to students in solving DSA
                  problems, fostering a deeper understanding of concepts.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{
              borderRight: "7px solid  rgba(20, 20, 65, 0.493)",
            }}
            date="March' 25 - April' 25"
            icon={<WorkIcon2 />}
          >
            <h3 className="vertical-timeline-element-title">
              Tata Consultancy Services Limited
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Project Intern
            </h4>
            <p>
              <ul>
                <li>
                  Built AWS CDK code to replicate error scenarios and
                  implemented prompt engineering solutions to enhance model
                  training.
                </li>
                <li>
                  Optimized scripts for training and deploying AI models,
                  improving efficiency and scalability using AWS services like
                  S3, DynamoDB, EC2, ECS, and Lambda.
                </li>
                <li>
                  Delivered high-quality code with a 99% approval rate and
                  achieved 100% code coverage for error replication files.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Exp;
