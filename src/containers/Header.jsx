import React from "react";
import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return <div className="site-header">
  <div className="container">
    <a href="index.html" className="branding">
      <img src="images/logo.png" alt className="logo" />
      <div className="logo-type">
        <h1 className="site-title">Company name</h1>
        <small className="site-description">tagline goes here</small>
      </div>
    </a>
    {}
    <Navigation></Navigation> {}
    <div className="mobile-navigation" />
  </div>
    </div>;
  }

}

export default Header;