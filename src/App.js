import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavContainer from "./containers/Navigation";
import AboutContainer from "./containers/About";
import SkillsContainer from "./containers/Skills/Skills";
import ProjectsContainer from "./containers/Projects/Projects";
import ExperiencesContainer from "./containers/Experiences/Experiences";
import EducationContainer from "./containers/Education/Education";
import ContactContainer from "./containers/Contact";
import FooterContainer from "./containers/Footer";

function App() {
  return (
    <Router>
      {/* <Route path="/" component={NavContainer} /> */}
      <Route path="/" component={AboutContainer} />
      <Route path="/" component={SkillsContainer} />
      {/* <Route path="/projects" component={ProjectsContainer} /> */}
      <Route path="/" component={ExperiencesContainer} />
      <Route path="/" component={EducationContainer} />
      <Route path="/" component={ContactContainer} />
      <Route path="/" component={FooterContainer} />
    </Router>
  );
}

export default App;
