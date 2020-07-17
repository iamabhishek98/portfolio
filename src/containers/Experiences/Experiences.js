import React, { Component } from "react";
import Experience from "./ExperienceTemplate";

class ExperiencesContainer extends Component {
  render() {
    const Hp = {
      Role: "software developer intern",
      Name: "hewlett-packard",
      Duration: "may 2020 – jul 2020",
      Description: [],
    };

    const Nus_SA = {
      Role: "cp2106 senior advisor",
      Name: "nus",
      Duration: "may 2020 – aug 2020",
      Description: [],
    };

    const Amaris = {
      Role: "computer vision intern",
      Name: "amaris.ai",
      Duration: "dec 2019 – jan 2020",
      Description: [
        `Developed solutions for object detection and user action recognition applications`,
        `Trained Deep Learning models to detect offenders like PMD riders and motorcyclists 
        without safety headgear`,
        `Initiated and Implemented novel algorithms from scratch to perform exercise counting`,
      ],
    };

    const Nus_TA = {
      Role: "undergraduate teaching assistant",
      Name: "nus",
      Duration: "aug 2019 – nov 2019",
      Description: [
        `Nominated as a Teaching Assistant for CG1111 upon
        performing outstandingly well in the module`,
        `Explained concepts, clarified doubts as well as
        assisted a group of 10 students with debugging their Arduino
        codes and breadboard electronic circuits`,
        `Monitored, assessed and acted upon the performance
        of students by conducting consultations during and after lab
        sessions`,
        `Evaluated and graded students’ lab reports`,
      ],
    };

    const Astar = {
      Role: "software engineering intern",
      Name: "a*star",
      Duration: "may 2019 – aug 2019",
      Description: [
        `Developed a visualization dashboard for industrial
          application using HTML, CSS, Javascript and Semantic UI`,
        `Reverse-engineered the VSE004 Windows sensor
          application using Python and Wireshark to replicate it and
          extract sensor data for a ML program running on a
          Linux-based embedded system`,
        `Enabled Golang-based EdgeXFoundry in the I2R IOT
          platform using MongoDB as the database`,
        `Configured a low-power border router to enable IPv6
          connections between a SmartMesh IP network and Internet`,
        `Carried out adhoc power data logging measurements
          for various IOT devices using a DC power analyser`,
      ],
    };
    return (
      <div className="App">
        <section className="experience" id="experience" data-aos="fade-up">
          <div className="container">
            <h3 className="text-center">My Work Experience</h3>

            <div className="col-md-2 exp-left">
              {/* <!-- <img src="images/abhishek.jpg" alt="" /> --> */}
            </div>
            <div className="col-md-8  exp_right">
              <div className="exp_grids">
                {/* <Experience CompanyDetails={Hp} />
                <Experience CompanyDetails={Nus_SA} /> */}
                <Experience CompanyDetails={Amaris} />
                <Experience CompanyDetails={Nus_TA} />
                <Experience CompanyDetails={Astar} />
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </section>{" "}
      </div>
    );
  }
}

export default ExperiencesContainer;
