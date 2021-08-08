import React, { Component } from "react";

class AboutContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="about" id="about" data-aos="fade-up">
          <div className="container">
            <h3 className="text-center">About Me</h3>
            <div className="col-md-5 about_left" data-aos="fade-right" />
            <div className="col-md-7 about_right" data-aos="fade-left">
              <h4>Introduction</h4>
              <p>
                Hi there! I am Abhishek, a final year undergraduate student at
                the National University of Singapore pursuing a Bachelor's
                Degree (Honours) in Computer Engineering with a minor in
                Financial Mathematics. If I were to summarize myself in one
                sentence it would be, “someone who likes to be challenged and
                pushed to his limits through continuous learning and building
                innovative solutions”.
              </p>
              <h4>What am I looking for?</h4>
              <p>
                The biggest takeaway from my experiences is to seek discomfort
                in whatever I take up. I believe that by doing so, I can
                challenge myself in areas not known to me and uncover my hidden
                potential. I am constantly on the lookout for such opportunities
                that quench my urge to learn new skills while stimulating my
                capabilities.
              </p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
