import React, { Component } from "react";
import "./Projects.css";
import Project from "./ProjectTemplate";
import ProjectModal from "./ProjectModalTemplate";

class ProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: [1, 1, 1, 1, 1],
      slideId: [
        "rtos_slides",
        "audiov_slides",
        "parkevelution_slides",
        "alex_slides",
        "mbot_slides",
      ],
      slideButtonId: [
        "rtos_button",
        "audiov_button",
        "parkevelution_button",
        "alex_button",
        "mbot_button",
      ],
    };
  }

  componentDidMount() {
    this.showDivs(1, 0);
    this.showDivs(1, 1);
    this.showDivs(1, 2);
    this.showDivs(1, 3);
    this.showDivs(1, 4);
  }

  pauseVids(id) {
    document.getElementById("rtos_video").pause();
    document.getElementById("parkevelution_video").pause();
    document.getElementById("mbot_video").pause();
  }

  plusDivs = (n, no) => {
    this.showDivs((this.state.slideIndex[no] += n), no);
  };

  currentDiv = (n, no) => {
    this.showDivs((this.state.slideIndex[no] = n), no);
  };

  showDivs = (n, no) => {
    var i;
    var x = document.getElementsByClassName(this.state.slideId[no]);
    var dots = document.getElementsByClassName(this.state.slideButtonId[no]);

    if (n > x.length) {
      this.state.slideIndex[no] = 1;
    }
    if (n < 1) {
      this.state.slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-black", "");
    }

    if (
      x[this.state.slideIndex[no] - 1] == document.getElementById("rtos_vid")
    ) {
      console.log("video");
      document.getElementById("rtos_video").play();
    } else if (
      x[this.state.slideIndex[no] - 1] ==
      document.getElementById("parkevelution_vid")
    ) {
      console.log("video");
      document.getElementById("parkevelution_video").play();
    } else if (
      x[this.state.slideIndex[no] - 1] == document.getElementById("mbot_vid")
    ) {
      console.log("video");
      document.getElementById("mbot_video").play();
    } else {
      console.log("not video");
      this.pauseVids();
    }
    x[this.state.slideIndex[no] - 1].style.display = "block";
    dots[this.state.slideIndex[no] - 1].className += " w3-black";
  };

  render() {
    const Rtos = {
      Index: 0,
      Id: "rtos",
      Title: "RTOS RC Robot",
      Github: "https://github.com/iamabhishek98/rtos_proj",
      Highlights: "C | Cortex-M3",
      Duration: "Mar 2020 – Apr 2020",
      Images: ["images/projects/rtos/rtos_main.jpg"],
      Video: ["images/projects/rtos/rtos_vid.mp4"],
      Description: [
        `Developed a robot running on RTOS (Real-Time Operating System) and designed
          a native Android application to tele-operate it via a Bluetooth connection`,
      ],
    };

    const Nustartup = {
      Id: "nustartup",
      Title: "NUStartup",
      Github: "https://github.com/iamabhishek98/NUStartup",
      Highlights: "Java | Firebase",
      Duration: "Jan 2020",
      Images: ["images/projects/nustartup/nustartup.png"],
      Description: [
        `Developed a native Android application from scratch within the span of 24 hours 
        that serves as a social platform for students with innovative startup ideas to 
        collaborate and work together`,
      ],
    };

    const ArchDuke = {
      Id: "archduke",
      Title: "ArchDuke",
      Github: "https://github.com/iamabhishek98/main",
      Highlights: "Java",
      Duration: "Jan 2020",
      Images: ["images/projects/archduke/archduke.jpg"],
      Description: [
        `Developed a command-line application in a team of 5 that seeks to solve project 
        management issues amongst team leaders`,
        `Adhered to Software Engineering Principles and Design Patterns when implementing features`,
        `Carried out several forms of code-based testing and wrote detailed documentation 
        for the User and Developer Guide`,
      ],
    };

    const Audiov = {
      Index: 1,
      Id: "audiov",
      Title: "Real-Time Audio Visualizer",
      Github: "https://github.com/iamabhishek98/FPGA_Design_Project",
      Highlights: "Verilog | Basys3",
      Duration: "Apr 2019 – May 2019",
      Images: [
        "images/projects/audiov/audiov_main.jpg",
        "images/projects/audiov/audiov_1.png",
        "images/projects/audiov/audiov_2.jpg",
        "images/projects/audiov/audiov_3.jpg",
      ],
      Description: [
        `Developed visual and audio analysis applications based on processing of an audio 
        input signal on a Basys3 FPGA`,
        `These applications include different ways to visualize the signal and accurate 
        calculation of the frequency`,
      ],
    };

    // DONT FORGET TO REMOVE BOLD
    const Parkevelution = {
      Index: 2,
      Id: "parkevelution",
      Title: "ParkEvelution",
      Github: "https://github.com/iamabhishek98/Parkevelution_App",
      Link:
        "https://play.google.com/store/apps/details?id=com.OrbitApps.parkevolution1&hl=en",
      Highlights: "Java | Node.js | PHP | MySQL | Raspberry Pi",
      Duration: "May 2019 – Aug 2019",
      Images: [
        "images/projects/parkevelution/parkevelution_main.jpg",
        "images/projects/parkevelution/parkevelution_grppic.jpg",
      ],
      Video: ["images/projects/parkevelution/parkevelution_vid.mp4"],
      Description: [
        `parkevelution first line`,
        `Developed a native Android application in  a team of 2 that seeks to solve all 
        the parking problems of Singaporean Drivers`,
        `Used Google Maps API to visually display real-time parking information provided 
        by Data.gov.sg APIs`,
        `Used a port-forwarded Raspberry Pi as a database server for collecting parking 
        lot information in real-time`,
        `Implemented algorithms to suggest optimal carparks and predict future parking 
        lot availability based on trends in the database`,
      ],
    };

    const Rideshare = {
      Id: "rideshare",
      Title: "RideShare",
      Github: "https://github.com/iamabhishek98/carpool",
      Highlights: "Node.js | PostgreSQL",
      Duration: "Oct 2019 – Nov 2019",
      Images: ["images/projects/rideshare/rideshare.jpg"],
      Description: [
        `Led a team of 4 to build a mock carpooling application`,
        `Drew Entity-Relational diagrams to visualize and designed the relational database 
        needed to support the application`,
        `Wrote multiple complex SQL queries to process and retrieve information from the 
        database in real-time`,
      ],
    };

    const Alex = {
      Index: 3,
      Id: "alex",
      Title: "Alex",
      Github: "https://github.com/iamabhishek98/CG1112_Alex",
      Highlights: "C++ | SLAM | OpenCV | Arduino |<br> Raspberry Pi | Li",
      Duration: "Mar 2019 – May 2019",
      Images: [
        "images/projects/alex/alex_main.jpg",
        "images/projects/alex/alex_slam.jpg",
        "images/projects/alex/alex_grppic.jpg",
      ],
      Description: [
        `Developed a tele operated robot in a team of 5 designed to traverse a simulated 
        environment with obstacles resembling a real search and rescue operation`,
        `Robot featured self-localization and colour-detection capabilities to actively 
        learn and navigate through the surroundings`,
      ],
    };

    const Mbot = {
      Index: 4,
      Id: "mbot",
      Title: "mBot",
      Github: "https://github.com/iamabhishek98/CG1111_Mbot",
      Highlights: "C++ | Arduino",
      Duration: "Oct 2018 – Nov 2018",
      Images: ["images/projects/mbot/mbot_main.jpg"],
      Video: ["images/projects/mbot/mbot_vid.mp4"],
      Description: [
        `mbot first line`,
        `Developed a maze-solving robot to navigate through an unknown environment`,
        `Robot featured colour-detection, obstacle avoidance and audio analysis capabilities`,
      ],
    };

    const Functions = {
      PauseVids: this.pauseVids,
      PlusDivs: this.plusDivs,
      CurrentDiv: this.currentDiv,
    };

    return (
      <div className="gallery" id="gallery" data-aos="fade-up">
        <div className="container">
          <div className="about-head text-center">
            <h3 className="text-center">My Projects</h3>
            <div className="tab-pane" id="graphic-design" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <Project ProjectDetails={Rtos} />
                    <Project ProjectDetails={Nustartup} />
                    <Project ProjectDetails={ArchDuke} />
                    <Project ProjectDetails={Audiov} />
                  </div>
                  <div className="col-md-6">
                    <Project ProjectDetails={Parkevelution} />
                    <Project ProjectDetails={Rideshare} />
                    <Project ProjectDetails={Alex} />
                    <Project ProjectDetails={Mbot} />
                  </div>
                  <ProjectModal ProjectDetails={Rtos} Functions={Functions} />
                  <ProjectModal
                    ProjectDetails={Nustartup}
                    Functions={Functions}
                  />
                  <ProjectModal
                    ProjectDetails={ArchDuke}
                    Functions={Functions}
                  />
                  <ProjectModal ProjectDetails={Audiov} Functions={Functions} />
                  <ProjectModal
                    ProjectDetails={Parkevelution}
                    Functions={Functions}
                  />
                  <ProjectModal
                    ProjectDetails={Rideshare}
                    Functions={Functions}
                  />
                  <ProjectModal ProjectDetails={Alex} Functions={Functions} />
                  <ProjectModal ProjectDetails={Mbot} Functions={Functions} />
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="educationbottom">
              <div className="clearfix"></div>
            </div>
            <script src="js/lightbox-plus-jquery.min.js"></script>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsContainer;
