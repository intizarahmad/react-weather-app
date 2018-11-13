import React from "react";
import Header from "./Header";
import Search from "./Search";
import ForecastContainer from "./ForecastContainer";
import Footer from "./Footer";
import "../resources/sass/style.scss";
import "../resources/fonts/font-awesome.min.css";
class App extends React.Component {
  render() {
    return <div className="site-content">
  <Header></Header> {}
  <div className="hero" >
    <Search></Search>
  </div>
  <ForecastContainer></ForecastContainer>
  <Footer></Footer> {}
    </div>;
  }

}
export default App;