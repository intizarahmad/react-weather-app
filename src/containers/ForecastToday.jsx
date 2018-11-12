import React from "react";

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
        <img src="images/icons/icon-1.svg" alt width={90} />
      </div>	
    </div>
    <span><img src="images/icon-umberella.png" alt />20%</span>
    <span><img src="images/icon-wind.png" alt />18km/h</span>
    <span><img src="images/icon-compass.png" alt />East</span>
  </div>
    </div>;
  }

}

export default ForecastToday;