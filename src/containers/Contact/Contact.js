import React, { Component } from "react";
import "./Contact.css";

class ContactContainer extends Component {
  render() {
    return (
      <div className="App">
        <section className="comment-w3l" id="contact" data-aos="fade-up">
          <div className="container">
            <h3 className="text-center">GET IN TOUCH</h3>

            <div
              className="col-lg-12 col-md-12 col-sm-12 comment-agile1"
              data-aos="flip-up"
            >
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="single-contact text-center">
                    <i class="fa fa-github"></i>
                    <h2>
                      <a href="https://github.com/iamabhishek98">
                        @iamabhishek98
                      </a>
                    </h2>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="single-contact text-center">
                    <i class="fa fa-envelope"></i>
                    <h2>
                      <a href="mailto:saiabhishek.karnati@u.nus.edu">
                        saiabhishek.karnati@u.nus.edu
                      </a>
                    </h2>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="single-contact text-center">
                    <i class="fa fa-linkedin"></i>
                    <div class="socials">
                      <h2>
                        <a href="https://linkedin.com/in/sai-abhishek-karnati/">
                          @sai-abhishek-karnati
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/xrgygjwq" method="post">
                <div className="control-group form-group">
                  <div className="controls">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Full Name"
                      required=""
                      name="Name"
                    />
                    <p className="help-block"></p>
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="Subject"
                      required=""
                      name="Subject"
                    />
                    <p className="help-block"></p>
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      required=""
                      name="Email"
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <textarea
                      rows="10"
                      cols="100"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required=""
                      name="Message"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div className="clearfix"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactContainer;
