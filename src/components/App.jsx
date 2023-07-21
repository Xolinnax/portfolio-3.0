import React from "react";
import Title from "./TitleScreen.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";
import ContactMe from "./ContactMe.jsx";
import Contents from "./Contents.jsx";

function App() {
  return (
    <div className="App">
        <Contents />
        <ContactMe />
        <Title />
        <div className="content">
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    </div>
  );
}

export default App;
