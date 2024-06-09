import React, { Component } from "react";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
                      <a href="#blog">Blog</a>
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

       <div className="content-wrapper">
          <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6 align-self-center">
                      <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                        <div className="row">
                          <div className="col-lg-12">
                            <h1>Welcome to Bug Reporting System</h1>
                            <p>This bug reporting system is designed to help you report and track bugs in our software. Your feedback is important to us, and we appreciate your contributions to improving the quality of our products.</p>
                          </div>
                          <div className="col-lg-12">
                            <div className="border-first-button scroll-to-section">
                              <a href="#blog">Related News</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="../static/assets/images/t.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="blog" className="blog">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 offset-lg-4 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s">
                  <div className="section-heading">
                    <h6>Recent News</h6>
                    <h4>Check Our Blog <em>Posts</em></h4>
                    <div className="line-dec"></div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="blog-post">
                    <div className="thumb">
                      <a href="https://www.testdevlab.com/blog/a-manual-testers-guide-to-effective-bug-reporting" target="_blank"><img src="../static/assets/images/blog05.jpg" alt="" /></a>
                    </div>
                    <div className="down-content">
                      <span className="category">SEO Bug Analysis</span>
                      <span className="date">03 August 2021</span>
                      <a href="https://www.testdevlab.com/blog/a-manual-testers-guide-to-effective-bug-reporting" target="_blank"><h4>Effective Bug Reporting</h4></a>
                      <p>Streamlining the process of reporting software issues with clear and concise information to facilitate efficient bug tracking and resolution.</p>
                      <span className="author"><img src="../static/assets/images/author02.jpg" alt="" />By: Remane chupt</span>
                      <div className="border-first-button"><a href="https://www.testdevlab.com/blog/a-manual-testers-guide-to-effective-bug-reporting" target="_blank">Discover More</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="blog-post">
                    <div className="thumb">
                      <a href="https://blogs.cornell.edu/nysipm/tag/bed-bug/" target="_blank"><img src="../static/assets/images/blogPost02.png" alt="" /></a>
                    </div>
                    <div className="down-content">
                      <span className="category">Bug knowledge</span>
                      <span className="date">24 September 2021</span>
                      <a href="https://blogs.cornell.edu/nysipm/tag/bed-bug/" target="_blank"><h4>Bug follows some way of your brain.</h4></a>
                      <p>A bug is an error or flaw in software that causes it to behave unexpectedly or produce incorrect results.</p>
                      <span className="author"><img src="../static/assets/images/author-post.jpg" alt="" />By: Manisia Ria</span>
                      <div className="border-first-button"><a href="https://blogs.cornell.edu/nysipm/tag/bed-bug/" target="_blank">Discover More</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp my-4" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="blog-post">
                    <div className="thumb">
                      <a href="https://www.trendmicro.com/vinfo/us/security/definition/zero-day-vulnerability" target="_blank"><img src="../static/assets/images/blog02.jpg" alt="" /></a>
                    </div>
                    <div className="down-content">
                      <span className="category">Zero-day</span>
                      <span className="date">04 December 2022</span>
                      <a href="https://www.trendmicro.com/vinfo/us/security/definition/zero-day-vulnerability" target="_blank"><h4>Zero-day Vulnerability</h4></a>
                      <p>Zero-day vulnerabilities are security flaws in software or systems that are unknown to the vendor or developers.</p>
                      <span className="author"><img src="../static/assets/images/author03.jpg" alt="" />By: Painon lily</span>
                      <div className="border-first-button"><a href="https://www.trendmicro.com/vinfo/us/security/definition/zero-day-vulnerability" target="_blank">Discover More</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp my-4" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="blog-post">
                    <div className="thumb">
                      <a href="https://secnhack.in/cariddi-hidden-endpoint-finder-for-bug-hunting/" target="_blank"><img src="../static/assets/images/Blog03.jpg" alt="" /></a>
                    </div>
                    <div className="down-content">
                      <span className="category">Bug hunting</span>
                      <span className="date">15 March 2023</span>
                      <a href="https://secnhack.in/cariddi-hidden-endpoint-finder-for-bug-hunting/" target="_blank"><h4>Hunt with Cariddi</h4></a>
                      <p>Hey Folks, we are back today after such a long have come up with an exciting tool that can help you to get big bounties from different companies.</p>
                      <span className="author"><img src="../static/assets/images/author04.jpg" alt="" />By: Amebra massi</span>
                      <div className="border-first-button"><a href="https://secnhack.in/cariddi-hidden-endpoint-finder-for-bug-hunting/" target="_blank">Discover More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="contact-us section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <h6>Contact Us</h6>
                    <h4>Get In Touch With Us <em>Now</em></h4>
                    <div className="line-dec"></div>
                  </div>
                </div>
                <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-lg-12"></div>
                      <div className="col-lg-5">
                        <div id="map">
                          <iframe src="https://maps.google.com/maps?q=UIT+University,+Karachi,+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="636px" frameborder="0" style={{ border: 0 }} allowFullScreen></iframe>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="fill-form">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="info-post">
                                <div className="icon">
                                  <img src="../static/assets/images/phone-icon.png" alt="" />
                                  <a>+92 302 3636719</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="info-post">
                                <div className="icon">
                                  <img src="../static/assets/images/email-icon.png" alt="" />
                                  <a>shaheer@gmail.com</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="info-post">
                                <div className="icon">
                                  <img src="../static/assets/images/location-icon.png" alt="" />
                                  <a href="https://maps.google.com/maps?q=UIT+University,+Karachi,+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed">UIT University</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <fieldset>
                                <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                              </fieldset>
                              <fieldset>
                                <input type="text" name="email" id="email" pattern="[^ @]@[^ @]" placeholder="Your Email" required />
                              </fieldset>
                              <fieldset>
                                <input type="subject" name="subject" id="subject" placeholder="Subject" autoComplete="on" />
                              </fieldset>
                            </div>
                            <div className="col-lg-6">
                              <fieldset>
                                <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-button">Send Message Now</button>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright © 2024 Bug-Report Co., Ltd.</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}