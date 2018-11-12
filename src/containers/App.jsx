import React from "react";
import Header from "./Header";
import Search from "./Search";
import ForecastContainer from "./ForecastContainer";
import Footer from "./Footer";
import "../resources/sass/style.scss";
class App extends React.Component {
  render() {
    return <div className="site-content">
  <Header></Header> {}
  <div className="hero" data-bg-image="images/banner.png">
    <Search></Search>
  </div>
  <ForecastContainer></ForecastContainer>
  <Footer></Footer> {}
    </div>;
  }

}
export default App;