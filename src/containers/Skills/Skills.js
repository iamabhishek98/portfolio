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
                <div className="col-md-6 bar-grids bargrids-left">
                  <h4> Programming </h4>
                  <Skill Orientation="right" Text="Python" Percent="80" />
                  <Skill Orientation="right" Text="Java" Percent="70" />
                  <Skill Orientation="right" Text="C | C++" Percent="70" />
                  <Skill Orientation="right" Text="Golang" Percent="40" />
                  <Skill Orientation="right" Text="JavaScript" Percent="60" />
                  <Skill Orientation="right" Text="Verilog" Percent="60" />
                  <br />
                </div>
                <div className="col-md-6 bar-grids bargrids-right">
                  <h4> Web</h4>
                  <Skill Orientation="left" Text="HTML5 | CSS" Percent="80" />
                  <Skill Orientation="left" Text="React.js" Percent="60" />
                  <Skill Orientation="left" Text="Node.js" Percent="60" />
                  <Skill Orientation="left" Text="Express.js" Percent="50" />
                  <Skill Orientation="left" Text="Ruby On Rails" Percent="40" />
                  <Skill Orientation="left" Text="PostgreSQL" Percent="85" />

                  <div className="clearfix"></div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="skills">
              <div className="col-md-6 bar-grids bargrids-left">
                <h4> Hardware </h4>
                <Skill Orientation="right" Text="Raspberry Pi" Percent="75" />
                <Skill Orientation="right" Text="Arduino" Percent="75" />
                <Skill Orientation="right" Text="Cortex-M3" Percent="70" />
                <Skill Orientation="right" Text="Basys3" Percent="60" />
              </div>

              <div className="col-md-6 bar-grids bargrids-right">
                <h4> Others </h4>
                <Skill Orientation="left" Text="OpenCV" Percent="40" />
                <Skill Orientation="left" Text="Git" Percent="85" />
                <Skill Orientation="left" Text="Linux" Percent="75" />
                <Skill
                  Orientation="left"
                  Text="Microsoft Office"
                  Percent="85"
                />

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
