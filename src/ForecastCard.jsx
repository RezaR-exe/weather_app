import React from "react";

function ForecastCard(props) {
    return (
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4">
  
          <div class="card" style={{color: "#4B515D", borderRadius: "35px;"}}>
            <div class="card-body p-4">
  
              <div class="d-flex">
                <h6 class="flex-grow-1">{props.city}</h6>
              </div>
  
              <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6 class="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}>{props.average}°C</h6>
                <span class="small" style={{color: "#868B94"}}>min {props.minCelsius}°C/max {props.maxCelsius}°C</span>
                <span class="small" style={{color: "#868B94"}}>{props.condition}</span>
              </div>
  
              <div class="d-flex align-items-center">
                <div class="flex-grow-1" style={{fontSize: "1rem"}}>
                  <div><i class="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span class="ms-1"> {props.windSpeed} km/h
                    </span></div>
                  <div><i class="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span class="ms-1"> {props.humidity}% humidity </span>
                  </div>
                  <div><i class="fas fa-sun fa-fw" style={{color: "#868B94"}}></i> <span class="ms-1"> {props.days} </span>
                  </div>
                  <div><i class="fas fa-sun fa-fw" style={{color: "#868B94"}}></i> <span class="ms-1"> {props.chanceOfRain}% Chance of Rain</span>
                  </div>
                </div>
                <div>
                  <img src={props.image}/>
                </div>
              </div>
  
            </div>
          </div>
  
        </div>
      </div>
    )
}

export default ForecastCard;