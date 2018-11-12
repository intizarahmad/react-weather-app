import React from "react";

class Navigation extends React.Component {
  render() {
    return <div className="main-navigation">
  <button type="button" className="menu-toggle"><i className="fa fa-bars" /></button>
  <ul className="menu">
    <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
    <li className="menu-item"><a href="news.html">News</a></li>
    <li className="menu-item"><a href="live-cameras.html">Live cameras</a></li>
    <li className="menu-item"><a href="photos.html">Photos</a></li>
    <li className="menu-item"><a href="contact.html">Contact</a></li>
  </ul> {}
    </div>;
  }

}

export default Navigation;