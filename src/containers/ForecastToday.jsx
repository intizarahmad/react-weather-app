import React from "react";
import icon1 from "../resources/images/icons/icon-1.svg"
import iconUmberella from "../resources/images/icon-umberella.png"
import iconWind from "../resources/images/icon-wind.png"
import iconCompass from "../resources/images/icon-compass.png"
class ForecastToday extends React.Component {
  render() {
    return <div className="today forecast">
  <div className="forecast-header">
    <div className="day">Monday</div>
    <div className="date">6 Oct</div>
  </div> {}
  <div className="forecast-content">
    <div className="location">New York</div>
    <div className="degree">
      <div className="num">23<sup>o</sup>C</div>
      <div className="forecast-icon">
        <img src={icon1}alt="" width={90} />
      </div>	
    </div>
    <span><img src={iconUmberella}alt="" />20%</span>
    <span><img src={iconWind}alt="" />18km/h</span>
    <span><img src={iconCompass}alt="" />East</span>
  </div>
    </div>;
  }

}

export default ForecastToday;