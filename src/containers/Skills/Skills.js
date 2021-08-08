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
                  <Skill Text="JavaScript | TypeScript" Percent="95" />
                  <Skill Text="Python" Percent="90" />
                  <Skill Text="Java" Percent="75" />
                  <Skill Text="C | C++" Percent="70" />
                  <Skill Text="Golang" Percent="60" />
                  <Skill Text="Verilog" Percent="60" />
                  <br />
                </div>
                <div
                  className="col-md-6 bar-grids bargrids-right"
                  data-aos="fade-left"
                >
                  <h4> Web</h4>
                  <Skill Text="HTML5 | CSS" Percent="90" />
                  <Skill Text="React.js" Percent="80" />
                  <Skill Text="Node.js" Percent="95" />
                  <Skill Text="Nest.js" Percent="90" />
                  <Skill Text="PostgreSQL" Percent="90" />
                  <Skill Text="MongoDB" Percent="85" />

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
                <Skill Text="Arduino" Percent="80" />
                <Skill Text="Raspberry Pi" Percent="75" />
                <Skill Text="Cortex-M3" Percent="70" />
                <Skill Text="Basys3" Percent="60" />
              </div>

              <div
                className="col-md-6 bar-grids bargrids-right"
                data-aos="fade-left"
              >
                <h4> Others </h4>
                <Skill Text="Git" Percent="95" />
                <Skill Text="Linux" Percent="80" />
                <Skill Text="FreeRTOS" Percent="70" />
                <Skill Text="Microsoft Office" Percent="90" />

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
