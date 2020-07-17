import React, { Component } from "react";

class NavContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="w3l-banner">
          <div className="wthree-dot">
            {/* nav */}
            <div className="w3layouts-nav-right">
              <div className="fat-nav">
                <div className="fat-nav__wrapper">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#about" className="scroll">
                        About Me
                      </a>
                    </li>
                    <li>
                      <a href="#skills" className="scroll">
                        My Skills
                      </a>
                    </li>
                    <li>
                      <a href="#gallery" className="scroll">
                        My Projects
                      </a>
                    </li>
                    <li>
                      <a href="#experience" className="scroll">
                        My Work Experience
                      </a>
                    </li>
                    <li>
                      <a href="#education" className="scroll">
                        My Education
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="scroll">
                        Contact Me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* //nav */}

            {/* Header */}
            <div className="container" data-aos="fade-down">
              <div className="flexslider-info">
                <section className="slider col-md-6">
                  <div className="flexslider">
                    <ul className="slides">
                      <li>
                        <div className="w3l-info">
                          <h1>
                            <b>
                              Karnati Sai <span>Abhishek</span>
                            </b>
                          </h1>
                          <p>
                            <b>COMPUTER ENGINEERING UNDERGRADUATE</b>
                          </p>
                          <ul>
                            <li>
                              <a
                                href="resume/CV - Karnati Sai Abhishek.pdf"
                                className="w3ls_more"
                              >
                                View CV
                              </a>
                            </li>
                            <li>
                              <a href="#contact" className="scroll w3l_contact">
                                Contact Me
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavContainer;
