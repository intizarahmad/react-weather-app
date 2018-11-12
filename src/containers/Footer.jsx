import React from "react";

class Footer extends React.Component {
  render() {
    return <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <form action="#" className="subscribe-form">
          <input type="text" placeholder="Enter your email to subscribe..." />
          <input type="submit" defaultValue="Subscribe" />
        </form>
      </div>
      <div className="col-md-3 col-md-offset-1">
        <div className="social-links">
          <a href="#"><i className="fa fa-facebook" /></a>
          <a href="#"><i className="fa fa-twitter" /></a>
          <a href="#"><i className="fa fa-google-plus" /></a>
          <a href="#"><i className="fa fa-pinterest" /></a>
        </div>
      </div>
    </div>
    <p className="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
  </div>
    </footer>;
  }
}
export default Footer;