import React, { Component } from "react";
import Experience from "./ExperienceTemplate";

class ExperiencesContainer extends Component {
  render() {
    const garuda = {
      Role: "software engineer intern",
      Name: "garuda robotics",
      Duration: "may 2021 – aug 2021",
      Description: [
        `Led full-stack development of an Unmanned Aircraft Traffic Management (UTM) system 
        with Unmanned Aerial Vehicle (UAV) surveillance capabilities from initial stages to 
        a stage ready for deployment to clients`,
        `Designed scalable backend microservices to detect drone violations and created alert 
        propagation pipelines while integrating in-house and third-party services to create 
        an operations map for real-time drone monitoring`,
        `Carried out detailed code reviews and conducted company-wide workshops on writing clean, 
        performant and high-quality code leading to appreciation from CTO`,
        `Tech Stack: JavaScript, React.js, Leaflet, Node.js, RESTful & WebSocket APIs, RabbitMQ, 
        MongoDB, Mongoose, Mocha`,
      ],
    };

    const sensorflow = {
      Role: "software engineer intern",
      Name: "sensorflow",
      Duration: "jul 2020 - dec 2020",
      Description: [
        `Led full-stack development of a secure application allowing management of clients 
        and deployed IOT sensors`,
        `Designed GraphQL queries/mutations to efficiently propagate data between server and 
        client while also automating unit, integration and e2e testing to achieve code coverage > 90%`,
        `Spearheaded SQL database schema discussions and designed complex database queries 
        to optimize inefficient backend code (order of several seconds)`,
        `Conducted internal product discussions to ensure smooth flow of user experience 
        requirements from product managers to developers and planned agile SCRUM sprints`,
        `Tech Stack: TypeScript, Nest.js, RESTful APIs, Jest, GraphQL, PostgreSQL, TypeORM, Docker`,
      ],
    };

    const hp = {
      Role: "software engineer intern",
      Name: "hewlett-packard",
      Duration: "may 2020 – jul 2020",
      Description: [
        `Identified and analysed opportunities for process improvement and took initiative 
        to develop a new large-scale full-stack application to support data automation in 
        internal processes on a global scale`,
        `Collaborated with functional teams to create efficient algorithms to draw intelligence 
        from raw existing data and was awarded a Certificate of Recognition for outstanding contributions `,
        `Tech Stack: JavaScript, React.js, Node.js, PostgreSQL, VB, UiPath, Power BI, Power Automate`,
      ],
    };

    const orbital_TA = {
      Role: "senior advisor for cp2106",
      Name: "nus computing",
      Duration: "may 2020 – aug 2021",
      Description: [
        `Supervised 30 teams in completion of advanced software projects and guided them 
        by providing architectural advice along with troubleshooting their issues`,
        `Evaluated monthly progress by ensuring they adhered to following good software 
        engineering practices and giving constructive feedback`,
        `Received overwhelmingly positive feedback due to many teams being able to achieve 
        targets exceeding initial expectations`,
      ],
    };

    const amaris = {
      Role: "computer vision intern",
      Name: "amaris.ai",
      Duration: "dec 2019 – jan 2020",
      Description: [
        `Leveraged on cutting-edge computer vision algorithms to automate image processing 
        tasks like data augmentation and object detection`,
        `Implemented algorithms to innovatively solve action recognition problems using 
        pose estimation which earned appreciation from company’s Chief Innovation Officer`,
        `Tech Stack: OpenCV, NumPy/Pandas, Detectron2, YOLOv3`,
      ],
    };

    const cg1111_TA = {
      Role: "teaching assistant for cg1111",
      Name: "nus computing",
      Duration: "aug 2019 – dec 2019",
      Description: [
        `Selected to be a Teaching Assistant for CG1111 (Engineering Principles & Practices) upon
        performing outstandingly well in the module`,
        `Explained concepts, clarified doubts and assisted 10 students with weekly lab assignments`,
        `Monitored, assessed and acted upon their performance by conducting consultations 
        during/after lab sessions and guided them in ground-up development of a sensor-assisted autonomous robot`,
        `Topics Included: DC/AC Principles, Signal Processing, Arduino Programming`,
      ],
    };

    const astar = {
      Role: "embedded software engineering intern",
      Name: "a*star",
      Duration: "may 2019 – aug 2019",
      Description: [
        `Established an IoT middleware platform that facilitated interoperability between 
        IoT edge devices and applications and developed visualization dashboards to monitor 
        real-time data from those devices`,
        `Solved problems of scraping sensor data from a native Windows application by 
        reverse-engineering it using Wireshark and rebuilding it on a Linux-based embedded 
        system using Python and MQTT listeners`,
        `Tech Stack: Golang, Python, JavaScript, EdgeXFoundry, Wireshark, SmartMesh, MQTT`,
      ],
    };
    return (
      <div className="App">
        <section className="experience" id="experience" data-aos="fade-up">
          <div className="container">
            <h3 className="text-center">My Work Experience</h3>

            <div className="col-md-2 exp-left" />
            <div className="col-md-8  exp_right">
              <div className="exp_grids">
                <Experience CompanyDetails={garuda} />
                <Experience CompanyDetails={orbital_TA} />
                <Experience CompanyDetails={sensorflow} />
                <Experience CompanyDetails={hp} />
                <Experience CompanyDetails={amaris} />
                <Experience CompanyDetails={cg1111_TA} />
                <Experience CompanyDetails={astar} />
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
