import React from "react";
import icon3 from "../resources/images/icons/icon-3.svg";
class Forecast extends React.Component {
  render() {
    return <div className="forecast">
  <div className="forecast-header">
    <div className="day">Tuesday</div>
  </div> {}
  <div className="forecast-content">
    <div className="forecast-icon">
      <img src={icon3}alt="" width={48} />
    </div>
    <div className="degree">23<sup>o</sup>C</div>
    <small>18<sup>o</sup></small>
  </div>
    </div>;
  }

}

export default Forecast;