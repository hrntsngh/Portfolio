import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Summary.css";

const Summary = () => {
  const [text] = useTypewriter({
    words: ["Hello", "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ"],
    loop: {},
  });
  return (
    <div className="Summary">
      <motion.img
        src="https://filmfare.wwmindia.com/thumb/content/2022/may/sidhumoosewalafacts41653884597.jpg?width=1200&height=900"
        alt=""
      />
      <h1 className="divide">
        <span>{text}</span>
        <Cursor />,
        <br /> I'm Harneet Singh Kahlon
      </h1>
      <h3>FULL STACK DEVELOPER</h3>
    </div>
  );
};

export default Summary;
