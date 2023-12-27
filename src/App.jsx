import "./App.css";
import Project from "./Projects/Project";
import Home from "./home/Home.jsx";
import Exp from "./Experience/Exp.jsx";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import NavBar from "./home/NavBar/NavBar";
// import Motion from "./Motion.jsx";
function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <Home />
        <Project />
      </div>

      <Exp />
      <Skills />
      <Contact />
      {/* <Motion /> */}
    </>
  );
}

export default App;
