import PropTypes from "prop-types";
import React, { Component } from "react";

export default class AddBugComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugReporter: "",
      bugType: "",
      reason: "",
      siteLink: "",
      siteName: "",
    };
    this.changeBugReporterHandler = this.changeBugReporterHandler.bind(this);
    this.changeBugTypeHandler = this.changeBugTypeHandler.bind(this);
    this.changeReasonHandler = this.changeReasonHandler.bind(this);
    this.changeSiteNameHandler = this.changeSiteNameHandler.bind(this);
    this.changeSiteLinkHandler = this.changeSiteLinkHandler.bind(this);
    this.saveBug = this.saveBug.bind(this);
  }

  saveBug = (e) => {
    e.preventDefault();

    const { bugReporter, bugType, reason, siteLink, siteName } = this.state;

    // Check if all fields are filled
    if (!bugReporter || !bugType || !reason || !siteLink || !siteName) {
      window.alert("Please fill in all fields");
      return;
    }

    let bug = {
      bugReporter,
      bugType,
      reason,
      siteLink,
      siteName,
    };
    console.log("bug =>" + JSON.stringify(bug));

    // Send a POST request to your backend API to save the bug
    fetch("http://localhost:8080/api/v1/bug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bug),
    })
      .then((response) => {
        if (response.ok) {
          // Assuming the bug was successfully saved
          console.log("Bug saved successfully");
          // Clear the form fields after successful submission
          this.setState({
            bugReporter: "",
            bugType: "",
            reason: "",
            siteName: "",
            siteLink: "",
          });
        } else {
          throw new Error("Failed to save bug");
        }
      })
      .catch((error) => {
        console.error("Error occurred while saving bug:", error);
      });
  };

  // Update change handlers as they don't require dynamic imports

  changeBugReporterHandler = (event) => {
    this.setState({ bugReporter: event.target.value });
  };

  changeBugTypeHandler = (event) => {
    this.setState({ bugType: event.target.value });
  };

  changeReasonHandler = (event) => {
    this.setState({ reason: event.target.value });
  };

  changeSiteNameHandler = (event) => {
    this.setState({ siteName: event.target.value });
  };

  changeSiteLinkHandler = (event) => {
    this.setState({ siteLink: event.target.value });
  };

  render() {
    return (
      <>
        <div className="pre-header">
          <div>
            <div className="row">
              <div className="col-lg-8 col-sm-8 col-7">
                <ul className="info">
                  <li>
                    <a href="mailto:BugReporter@company.com">
                      <i className="fa fa-envelope"></i> BugReporter@company.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+923042458206">
                      <i className="fa fa-phone"></i> +92 304 2458206
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-sm-4 col-5">
                <ul className="social-media">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ahsan-sajid-1b06a1171">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <header
          className="header-area header-sticky wow slideInDown"
          data-wow-duration="0.50s"
          data-wow-delay="0s"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="/" className="logo">
                    <img
                      src="../static/assets/images/bugLogo.png"
                      alt="Logo"
                      style={{ width: "250px", height: "auto" }}
                    />
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li className="scroll-to-section">
                      <a href="/">Home</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/addBug">Add bug</a>
                    </li>
                    <li>
                      <a href="/recordBug">Records</a>
                    </li>
                    <li className="border-first-button">
                      {/* <a href="/email">Report Bug</a> */}
                    </li>
                  </ul>
                  {/* ***** Menu End ***** */}
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className="container" style={{marginTop:'120px'}}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form
                id="bugForm"
                action="/addBug"
                method="post"
                style={{ margin: "20px auto", maxWidth: "400px" }}
              >
                <div className="form-group text-center">
                  <h4>Bug Report Form</h4>
                </div>
                <div className="form-group">
                  <label>Bug Reporter</label>
                  <input
                    placeholder="Bug Reporter"
                    name="bugReporter"
                    className="form-control"
                    value={this.state.bugReporter}
                    onChange={this.changeBugReporterHandler}
                  />
                </div>
                <div className="form-group my-1">
                  <label>Bug Type</label>
                  <input
                    placeholder="Bug Type"
                    name="bugType"
                    className="form-control"
                    value={this.state.bugType}
                    onChange={this.changeBugTypeHandler}
                  />
                </div>
                <div className="form-group my-1">
                  <label>Reason</label>
                  <input
                    placeholder="Reason"
                    name="reason"
                    className="form-control"
                    value={this.state.reason}
                    onChange={this.changeReasonHandler}
                  />
                </div>
                <div className="form-group my-1">
                  <label>Site Link</label>
                  <input
                    placeholder="Site Link"
                    name="siteLink"
                    className="form-control"
                    value={this.state.siteLink}
                    onChange={this.changeSiteLinkHandler}
                  />
                </div>
                <div className="form-group my-1">
                  <label>Site Name</label>
                  <input
                    placeholder="Site Name"
                    name="siteName"
                    className="form-control"
                    value={this.state.siteName}
                    onChange={this.changeSiteNameHandler}
                  />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-success" onClick={this.saveBug}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
