import React, { Component } from "react";

class FooterContainer extends Component {
  render() {
    return (
      <div className="App">
        <div class="w3l_footer" data-aos="fade-up">
          <div class="container">
            {/* <!-- <h3>Thanks for visiting my website!</h3>
			<div class="connect-social">  
				<ul>
					<li class="connect">Connect me with : </li>
					<li><a href="https://github.com/iamabhishek98" class="social-button github"><i class="fa fa-github"></i></a></li>
					<li><a href="https://linkedin.com/in/sai-abhishek-karnati/" class="social-button linkedin"><i class="fa fa-linkedin"></i></a></li>
				</ul>
			</div> --> */}
            <p class="agileits_w3ls_copyright">
              © Karnati Sai Abhishek 2020. All rights reserved
            </p>
            <div class="arrow-container animated fadeInDown">
              <a href="#home" class="arrow-2 scroll">
                <i class="fa fa-angle-up"></i>
              </a>
              <div class="arrow-1 animated hinge infinite zoomIn"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterContainer;
