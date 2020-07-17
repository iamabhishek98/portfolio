import React, { Component } from "react";
import "./Projects.css";

class ProjectsContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="gallery" id="gallery" data-aos="fade-up">
          <div className="about-head text-center ">
            <h3 className="text-center">My Projects</h3>
            <div className="tab-pane" id="graphic-design" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6" data-aos="zoom-in">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="zoom-in"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a data-toggle="modal" data-target="#rtos-modal">
                        <figure className="cc-effect" id="hello">
                          <img
                            src="images/projects/rtos/rtos_main.jpg"
                            alt="Rtos"
                          />
                          <figcaption>
                            <div className="h4">
                              <b>RTOS RC Robot</b>
                            </div>

                            <p>
                              <b>C | Cortex-M3</b>
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="clearfix"></div>
            <div className="educationbottom">
              <div className="clearfix"> </div>
            </div>
            <script src="js/lightbox-plus-jquery.min.js"></script> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsContainer;
