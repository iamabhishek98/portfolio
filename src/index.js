import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AboutContainer from "./containers/About";
import NavContainer from "./containers/Navigation";
import SkillsContainer from "./containers/Skills/Skills";
import ExperiencesContainer from "./containers/Experiences/Experiences";
import EducationContainer from "./containers/Education/Education";
import ContactContainer from "./containers/Contact/Contact";
import FooterContainer from "./containers/Footer";
import ProjectsContainer from "./containers/Projects/Projects";

// ReactDOM.render(<NavContainer />, document.getElementById("home"));
ReactDOM.render(<AboutContainer />, document.getElementById("about"));
ReactDOM.render(<SkillsContainer />, document.getElementById("skills"));
ReactDOM.render(<ProjectsContainer />, document.getElementById("projects"));
ReactDOM.render(
  <ExperiencesContainer />,
  document.getElementById("experiences")
);
ReactDOM.render(<EducationContainer />, document.getElementById("education"));
ReactDOM.render(<ContactContainer />, document.getElementById("contact"));
ReactDOM.render(<FooterContainer />, document.getElementById("footer"));
// ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
