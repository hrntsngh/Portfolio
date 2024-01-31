import "./App.css";
import Project from "./Projects/Project";
import Home from "./home/Home.jsx";
import Exp from "./Experience/Exp.jsx";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import NavBar from "./home/NavBar/NavBar";
import About from "./About/About";
import { useEffect } from "react";
import Footer from "./Footer/Footer.jsx";
// import Motion from "./Motion.jsx";

function App() {
  // useEffect(() => {
  //   alert("Under Development, Click OK to Continue");
  // }, []);

  return (
    <>
      <NavBar></NavBar>
      <Home />
      <About />
      <Project />
      <Exp />
      <Skills />
      <Contact />
      <Footer />
      {/* <Motion /> */}
    </>
  );
}

export default App;
