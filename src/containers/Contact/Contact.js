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
              <div style={{ textAlign: "center" }}>
                <h5 className="col-md-2 col-sm-6">
                  <span className="fa fa-phone fa-2x"></span>
                  <br />
                  <b> +65 9499 6547</b>
                </h5>
                <h5 className="col-md-3 col-sm-6">
                  <span className="fa fa-github fa-2x"></span>{" "}
                  <a href="https://github.com/iamabhishek98">
                    <br />
                    <b>@iamabhishek98</b>
                  </a>
                </h5>
                <h5 className="col-md-3 col-sm-6">
                  <span className="fa fa-linkedin fa-2x"></span>{" "}
                  <a href="https://linkedin.com/in/sai-abhishek-karnati/">
                    <br />
                    <b> @sai-abhishek-karnati</b>
                  </a>
                </h5>
                <h5 className="col-md-4 col-sm-6">
                  <span className="fa fa-envelope fa-2x"></span>{" "}
                  <a href="mailto:saiabhishek.karnati@u.nus.edu">
                    <br />
                    <b>saiabhishek.karnati@u.nus.edu</b>
                  </a>
                </h5>
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