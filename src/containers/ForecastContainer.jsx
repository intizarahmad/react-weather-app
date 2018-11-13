import React from "react";
import ForecastToday from "./ForecastToday";
import Forecast from "./Forecast";
import icon5 from "../resources/images/icons/icon-5.svg";
import icon7 from "../resources/images/icons/icon-7.svg";
import icon12 from "../resources/images/icons/icon-12.svg";
import icon13 from "../resources/images/icons/icon-13.svg";
import icon14 from "../resources/images/icons/icon-14.svg";

class ForecastContainer extends React.Component {
  render() {
    return <div className="forecast-table">
  <div className="container">
    <div className="forecast-container">
      <ForecastToday></ForecastToday>
      <Forecast></Forecast>
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">Wednesday</div>
        </div> {}
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={icon5}alt="" width={48} />
          </div>
          <div className="degree">23<sup>o</sup>C</div>
          <small>18<sup>o</sup></small>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">Thursday</div>
        </div> {}
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={icon7}alt="" width={48} />
          </div>
          <div className="degree">23<sup>o</sup>C</div>
          <small>18<sup>o</sup></small>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">Friday</div>
        </div> {}
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={icon12}alt="" width={48} />
          </div>
          <div className="degree">23<sup>o</sup>C</div>
          <small>18<sup>o</sup></small>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">Saturday</div>
        </div> {}
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={icon13}alt="" width={48} />
          </div>
          <div className="degree">23<sup>o</sup>C</div>
          <small>18<sup>o</sup></small>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">Sunday</div>
        </div> {}
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={icon14}alt="" width={48} />
          </div>
          <div className="degree">23<sup>o</sup>C</div>
          <small>18<sup>o</sup></small>
        </div>
      </div>
    </div>
  </div>
    </div>;
  }

}

export default ForecastContainer;