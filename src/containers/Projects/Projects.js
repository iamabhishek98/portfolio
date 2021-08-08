import React, { Component } from "react";
import ProjectModal from "./ProjectModalTemplate";
import "./Projects.css";
import Project from "./ProjectTemplate";

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
    const smartdance = {
      Id: "smartdance",
      Title: "SmartDance",
      Github:
        "https://github.com/iamabhishek98/capstone_proj/blob/master/Final Design Report.pdf",
      Highlights: "Python | C++ | Bluno Beetle (Arduino)",
      Duration: "Jan 2021 - May 2021",
      Images: ["images/projects/smartdance/smartdance.jpg"],
      Description: [
        `Collaborated in a team of 6 to construct a smart wearable system to instantly 
        identify dance moves and localize dancer positions using ML`,
        `Designed internal communications subcomponent which involved establishing multithreaded 
        BLE communication channels between multiple Bluno Beetles connected to sensors and a 
        laptop to transmit sensor data as TCP packets`,
        `Implemented three-way handshake, network time synchronization and error detection 
        protocols to attain a reliable data rate of 25 Hz between Beetles and laptop, allowing 
        for fast and accurate dance move classification`,
      ],
    };

    const fakenews = {
      Id: "fakenews",
      Title: "Fake News Bot",
      Github:
        "https://github.com/CS3244-MachineLearning-Project-AY2021/Fake_News_Detection/blob/master/Detection_of_Fake_News_Using_Supervised_Learning_Techniques.pdf",
      Highlights: "Python | Scikit-learn",
      Duration: "Jan 2021 - May 2021",
      Images: ["images/projects/fakenews/fakenews.jpg"],
      Description: [
        `Collaborated in a team of 6 to develop a telegram bot to detect fake news using NLP`,
        `Pre-processed datasets by employing techniques like stemming using NLTK and feature 
        extraction using TFIDF to improve classification results`,
        `Pioneered experimentation with various ML algorithms like Naïve Bayes and Passive-Aggressive 
        classifiers and achieved validation and test accuracies > 90% using novel ML techniques like 
        ensemble learning`,
      ],
    };

    const rtos = {
      Index: 0,
      Id: "rtos",
      Title: "RTOS RC Robot",
      Github: "https://github.com/iamabhishek98/rtos_proj",
      Highlights: "C | Cortex-M3",
      Duration: "Mar 2020 – Apr 2020",
      Images: ["images/projects/rtos/rtos_main.jpg"],
      Video: ["images/projects/rtos/rtos_vid.mp4"],
      Description: [
        `Built a robot which ran on RTOS (Real-Time Operating System)`,
        `Used message queues to efficiently handle and context switch between multiple concurrent processes`,
        `Developed an android application to tele-operate the robot over Bluetooth`,
      ],
    };

    const nustartup = {
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

    const archduke = {
      Id: "archduke",
      Title: "ArchDuke",
      Github: "https://github.com/iamabhishek98/main",
      Highlights: "Java | JUnit",
      Duration: "Oct 2019 - Nov 2019",
      Images: ["images/projects/archduke/archduke.jpg"],
      Description: [
        `Collaborated in a team of 5 to develop a command-line application, using agile methodology, 
        to solve project management issues amongst team leaders`,
        `Implemented features while adhering to software engineering principles and design patterns`,
        `Carried out extensive unit/integration testing while  documenting user and developer guides`,
      ],
    };

    const audiov = {
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
        `Programmed a FPGA to visualize audio input from a microphone in unique ways with the ability 
        to interactively mix and overlay different visualizations`,
        `Developed a frequency detector algorithm with an accuracy > 95% and programmed a 7SEG display 
        to show the detected frequency`,
      ],
    };

    // DONT FORGET TO REMOVE BOLD
    const parkevelution = {
      Index: 2,
      Id: "parkevelution",
      Title: "ParkEvelution",
      Github:
        "https://github.com/iamabhishek98/Parkevelution_App/blob/master/README.md",
      Link: "https://play.google.com/store/apps/details?id=com.OrbitApps.parkevolution1&hl=en",
      Highlights:
        "Java | JavaScript | PHP | Android Studio | Node.js | MySQL | Raspberry Pi",
      Duration: "May 2019 – Aug 2019",
      Images: [
        "images/projects/parkevelution/parkevelution_main.jpg",
        "images/projects/parkevelution/parkevelution_grppic.jpg",
      ],
      Video: ["images/projects/parkevelution/parkevelution_vid.mp4"],
      Description: [
        `parkevelution first line`,
        `Devised a mobile solution to solve common problems Singaporean drivers face while trying 
        to park, by providing real-time parking lot availability, parking rates and nearest car 
        parks to a given location`,
        `Implemented novel algorithms to recommend optimal car parks and predict future parking 
        lot availability`,
        `Developed and hosted a backend server on a port-forwarded Raspberry Pi to scrape real-time 
        car park information and used an interactive map to display user location and relevant car park information`,
        `Successfully launched app on Google Play Store and received positive response from users`,
      ],
    };

    const rideshare = {
      Id: "rideshare",
      Title: "RideShare",
      Github: "https://github.com/iamabhishek98/carpool",
      Highlights: "React.js | Node.js | PostgreSQL",
      Duration: "Oct 2019 – Nov 2019",
      Images: ["images/projects/rideshare/rideshare.jpg"],
      Description: [
        `Managed a group of 4 to develop a web-based carpooling system to enable drivers to 
        advertise rides and passengers to bid for rides`,
        `Designed Entity-Relational diagrams to visualize complex relational database relations 
        and wrote complex SQL queries to efficiently process and retrieve information from the database`,
      ],
    };

    const alex = {
      Index: 3,
      Id: "alex",
      Title: "Alex",
      Github: "https://github.com/iamabhishek98/CG1112_Alex",
      Highlights:
        "C++ | Arduino | OpenCV | Raspberry Pi | Hector SLAM | RPLiDAR",
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

    const mbot = {
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
                    <Project ProjectDetails={fakenews} />
                    <Project ProjectDetails={parkevelution} />
                    <Project ProjectDetails={rideshare} />
                    {/* <Project ProjectDetails={nustartup} /> */}
                    <Project ProjectDetails={archduke} />
                  </div>
                  <div className="col-md-6">
                    <Project ProjectDetails={smartdance} />
                    <Project ProjectDetails={rtos} />
                    <Project ProjectDetails={alex} />
                    <Project ProjectDetails={mbot} />
                    <Project ProjectDetails={audiov} />
                  </div>
                  <ProjectModal
                    ProjectDetails={fakenews}
                    Functions={Functions}
                  />
                  <ProjectModal ProjectDetails={rtos} Functions={Functions} />
                  {/* <ProjectModal
                    ProjectDetails={nustartup}
                    Functions={Functions}
                  /> */}
                  <ProjectModal
                    ProjectDetails={archduke}
                    Functions={Functions}
                  />
                  <ProjectModal ProjectDetails={audiov} Functions={Functions} />
                  <ProjectModal
                    ProjectDetails={smartdance}
                    Functions={Functions}
                  />
                  <ProjectModal
                    ProjectDetails={parkevelution}
                    Functions={Functions}
                  />
                  <ProjectModal
                    ProjectDetails={rideshare}
                    Functions={Functions}
                  />
                  <ProjectModal ProjectDetails={alex} Functions={Functions} />
                  <ProjectModal ProjectDetails={mbot} Functions={Functions} />
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
