import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div id="About">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        ABOUT
      </motion.h1>
      <p>
        <span className="greetings">Greetings!</span> I'm Harneet Singh Kahlon,
        a dynamic and tech-savvy individual from the vibrant land of{" "}
        <span className="state">ਪੰਜਾਬ, India</span>. Currently in my third year
        pursuing a Bachelor's in Computer Science at the esteemed Chandigarh
        University, I am on a relentless journey to elevate my skills and make a
        mark in the world of technology. Equipped with a strong foundation in
        problem-solving, I thrive in tackling complex challenges head-on,
        whether it's optimizing algorithms or troubleshooting code. I believe in
        the power of perpetual learning, staying at the forefront of innovative
        web technologies as the tech landscape evolves. Join me on this exciting
        journey as I navigate the ever-evolving world of technology, seeking
        excellence and leaving an indelible mark along the way.
      </p>
    </div>
  );
};

export default About;
