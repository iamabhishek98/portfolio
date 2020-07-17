import React, { Component } from "react";
import Education from "./EducationTemplate";
import "./Education.css";

class EducationContainer extends Component {
  render() {
    const Nus = {
      Id: "nus",
      Image: "images/nus.png",
      Link: "http://nus.edu.sg",
      Name: "national university of singapore",
      Duration: "2018 – Present",
      Details: {
        Major: "Computer Engineering",
        "Expected Graduation Date:": "May 2022",
        "Cumulative Average Point:": "<em>4.25 / 5.00</em>",
        BR: "Relevant Coursework:",
        "Relevant Coursework:": [
          "Data Structures & Algorithms",
          "Software Engineering & Object-Oriented Programming",
          "Database Systems",
          "Real-Time Operating Systems",
          "Digital Design",
        ],
      },
    };

    const Giis = {
      Id: "giis",
      Image: "images/giis.png",
      Link: "https://singapore.globalindianschool.org/",
      Name: "global indian international school",
      Duration: "2014 – 2016",
      Details: {
        "High School Diploma:": "International Baccalaureate",
        "Grade Point:": "<em>41 / 45</em>",
        BR: "Subjects Taken:",
        "Subjects Taken:": [
          "Physics Higher Level",
          "Maths Higher Level",
          "Chemistry Higher Level",
          "Economics Standard Level",
          "English Literature Standard Level",
          "Hindi Standard Level",
        ],
      },
    };
    return (
      <div className="App">
        <div className="education" id="education" data-aos="fade-up">
          <div className="col-md-2 exp-left">
            {/* <img src="images/abhishek.jpg" alt="" /> */}
          </div>
          <div className="col-md-8 education-w3l">
            <h3
              data-aos="zoom-in"
              className="w3l_head three"
              style={{ fontWeight: "500", textAlign: "center" }}
            >
              My Education
            </h3>

            <Education SchoolDetails={Nus} />
            <Education SchoolDetails={Giis} />
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default EducationContainer;
