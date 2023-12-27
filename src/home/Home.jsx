import React from "react";
// import NavBar from "./NavBar/NavBar";
import Slider from "./Slider/Slider";
import Summary from "./Summary/Summary";
import "./Home.css";

const Home = () => {
  return (
    <div id="main">
      <Slider />
      <Summary />
    </div>
  );
};

export default Home;
