import React, { Component } from "react";

class AboutContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="about" id="about" data-aos="fade-up">
          <div className="container">
            <h3 className="text-center">About Me</h3>

            <div className="col-md-5 about_left" data-aos="fade-right">
              <ul className="address">
                <li>
                  <ul className="agileits-address-text ">
                    <li>
                      <b>NAME</b>
                    </li>
                    <li>Karnati Sai Abhishek</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li>
                      <b>SCHOOL</b>
                    </li>
                    <li>National University of Singapore</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li>
                      <b>MAJOR </b>
                    </li>
                    <li>Computer Engineering</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text ">
                    <li>
                      <b>D.O.B</b>
                    </li>
                    <li>28-12-1998</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text ">
                    <li>
                      <b>NATIONALITY</b>
                    </li>
                    <li>Singaporean</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li>
                      <b>PHONE</b>
                    </li>
                    <li>+65 9499 6547</li>
                  </ul>
                </li>
                <li>
                  <ul className="agileits-address-text">
                    <li>
                      <b>LANGUAGES </b>
                    </li>
                    <li>English, Hindi, Telugu</li>
                  </ul>
                </li>
                {/*  <li>
									<ul className="agileits-address-text">
										<li><b>JOB</b></li>
										<li>Designer & Developer</li>
									</ul>
								</li>
								
								<li>
									<ul className="agileits-address-text">
										<li><b>E-MAIL </b></li>
										<li><a href="mailto:example@mail.com"> info@example.com</a></li>
									</ul>
								</li>
								<li>
									<ul className="agileits-address-text">
										<li><b>WEBSITE </b></li>
										<li><a href="#">www.mywebsite.com</a></li>
									</ul>
								</li>  */}
              </ul>
              <div className="w3-socials about-social">
                <ul>
                  <li>
                    <a href="mailto:saiabhishek.karnati@u.nus.edu">
                      <span className="fa fa-envelope"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/sai-abhishek-karnati/">
                      <span className="fa fa-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/iamabhishek98">
                      <span className="fa fa-github"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://join.skype.com/invite/YwJ2ei4HK6kK">
                      <span className="fa fa-skype"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7 about_right" data-aos="fade-left">
              <h4>Introduction</h4>
              <p>
                Hi there! I am Abhishek, a penultimate student at the National
                University of Singapore majoring in Computer Engineering. Ever
                since my university journey began, my innate obssession to learn
                new skills in the technical field has pushed me to
                experientially learn from my co-curricular experiences. Through
                my experiences, I hope to be exposed to the best opportunities,
                best minds, best environment to build the better version of
                myself.
              </p>
              <h4>What am I looking for?</h4>
              <p>
                My biggest takeaway from the various projects and internships I
                pursued is to seek discomfort in whatever I take up. I strongly
                believe that by doing so, I can challenge myself in areas not
                known to me and uncover my hidden potential. I am constantly on
                the lookout for such opportunities which quench my urge to learn
                new skills while stimulating my capabilities.{" "}
              </p>
              {/*  I trust that my unique skillset and experiences coupled with my optimistic attitude make me a valuable addition to any team.  */}
              {/*  I am an enthusiastic individual majoring in Computer Engineering at National University of Singapore (NUS). My curiosity and interest in Computing since my childhood, has led me to strongly believe that learning does not stop after stepping out of the classroom. 
My first year at NUS has helped me further my interest in Computing by providing me with excellent opportunities to work on exciting projects and by exposing me to challenging competitive programming problems. These challenges have not only taught me about the importance of teamwork but have also ameliorated my critical thinking skills. 
My unique selling point is that along with my experience in working with C, C++, Verilog, HTML5, CSS, Javascript, Arduino, Raspberry Pi and ROS, I have a strong work ethic and firmly believe in the motto that hard work is the key to success.  */}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
