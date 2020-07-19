import React, { Component } from "react";
import Skill from "./SkillTemplate";

class SkillsContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="w3-services" id="skills" data-aos="fade-up">
          <div className="container">
            <h3 className="text-center">My skills</h3>
            <div className="modal-spa">
              <div className="skills">
                <div
                  className="col-md-6 bar-grids bargrids-left"
                  data-aos="fade-right"
                >
                  <h4> Programming </h4>
                  <Skill Text="Python" Percent="80" />
                  <Skill Text="Java" Percent="70" />
                  <Skill Text="C | C++" Percent="70" />
                  <Skill Text="Golang" Percent="40" />
                  <Skill Text="JavaScript" Percent="60" />
                  <Skill Text="Verilog" Percent="60" />
                  <br />
                </div>
                <div
                  className="col-md-6 bar-grids bargrids-right"
                  data-aos="fade-left"
                >
                  <h4> Web</h4>
                  <Skill Text="HTML5 | CSS" Percent="80" />
                  <Skill Text="React.js" Percent="60" />
                  <Skill Text="Node.js" Percent="60" />
                  <Skill Text="Express.js" Percent="50" />
                  <Skill Text="Ruby On Rails" Percent="40" />
                  <Skill Text="PostgreSQL" Percent="85" />

                  <div className="clearfix"></div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="skills">
              <div
                className="col-md-6 bar-grids bargrids-left"
                data-aos="fade-right"
              >
                <h4> Hardware </h4>
                <Skill Text="Raspberry Pi" Percent="75" />
                <Skill Text="Arduino" Percent="75" />
                <Skill Text="Cortex-M3" Percent="70" />
                <Skill Text="Basys3" Percent="60" />
              </div>

              <div
                className="col-md-6 bar-grids bargrids-right"
                data-aos="fade-left"
              >
                <h4> Others </h4>
                <Skill Text="OpenCV" Percent="40" />
                <Skill Text="Git" Percent="85" />
                <Skill Text="Linux" Percent="75" />
                <Skill Text="Microsoft Office" Percent="85" />

                <div className="clearfix"></div>
              </div>

              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsContainer;
