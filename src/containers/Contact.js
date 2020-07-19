import React, { Component } from "react";

class ContactContainer extends Component {
  render() {
    return (
      <div className="App">
        <section className="comment-w3l" id="contact" data-aos="fade-up">
          <div className="container">
            <h3 className="text-center">GET IN TOUCH</h3>
            <br />
            <div
              className="col-lg-6 col-md-6 col-sm-6 comment-agile1"
              data-aos="flip-up"
            >
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
            <div
              className="col-lg-6 col-md-6 col-sm-6 comment-agile2"
              data-aos="flip-up"
              style={{ textAlign: "center" }}
            >
              <h4>Feel free to contact me for more details</h4>

              <h5>
                <span className="fa fa-phone"></span>
                <b> +65 9499 6547</b>
              </h5>
              <h5>
                <span className="fa fa-github"></span>{" "}
                <a href="https://github.com/iamabhishek98">
                  <b>@iamabhishek98</b>
                </a>
              </h5>
              <h5>
                <span className="fa fa-linkedin"></span>{" "}
                <a href="https://linkedin.com/in/sai-abhishek-karnati/">
                  <b> @sai-abhishek-karnati</b>
                </a>
              </h5>
              <h5>
                <span className="fa fa-envelope"></span>{" "}
                <a href="mailto:saiaabhishek.karnati@u.nus.edu">
                  <b>saiabhishek.karnati@u.nus.edu</b>
                </a>
              </h5>
            </div>
            <div className="clearfix"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactContainer;
