import React, {useState} from "react";
import axios from "axios";
import Weathercard from "./Weathercard";
import ForecastCard from "./ForecastCard";

function Weather(props) {
    const [weatherList,
        setWeatherList] = useState([]);
    const [location,
        setLocation] = useState({
        celsius: 0,
        fahrenheit: 0,
        city: "",
        country: "",
        condition: "",
        currentTime: 0,
        windSpeed: 0,
        humidity: 0,
        image: "",
        time: 0,
        day: 0
    })

    const [weatherCardStyle, setWeatherCardStyle] = useState({
        visibility: "hidden"
    })


    const apiCall = async() => {
        await axios
            .get(`http://api.weatherapi.com/v1/forecast.json?key=9262466b746c4d8ab5b83810242503&q=${props.city}&aqi=no&days=8`)
            .then((data) => {
                const date = new Date();
                const hours = date.getHours()
                const minutes = date.getMinutes()
                let day = date.getDate()
                const forecastDays = data.data.forecast.forecastday
                const originalDateTime = data.data.location.localtime
                let reversedOne = ""
                let backToOriginal = ""
                for (let i = originalDateTime.length - 1; i >= 11; i--) {
                    reversedOne += originalDateTime[i];
                }
                for (let i = reversedOne.length - 1; i >= 0; i--) {
                    backToOriginal += reversedOne[i];
                }

                function addSuffixes(number) {
                    if (number === 1) {
                        number = number + "st"
                        return number;
                    } else if (number === 2) {
                        number = number + "nd"
                        return number;
                    } else if (number === 3) {
                        number = number + "rd"
                        return number;
                    } else if (number >= 4) {
                        number = number + "th"
                        return number;
                    }
                }

                setLocation({
                    celsius: data.data.current.temp_c,
                    fahrenheit: data.data.current.temp_f,
                    city: data.data.location.name,
                    country: data.data.location.country,
                    condition: data.data.current.condition.text,
                    windSpeed: data.data.current.wind_kph,
                    humidity: data.data.current.humidity,
                    image: data.data.current.condition.icon,
                    time: backToOriginal,
                    day: addSuffixes(day)
                })

                const forecastWeatherCard = forecastDays.map((item, index) => {
                    return (<ForecastCard
                        key={index}
                        minCelsius={item.day.mintemp_c}
                        maxCelsius={item.day.maxtemp_c}
                        average={item.day.avgtemp_c}
                        city={location.city}
                        country={location.country}
                        condition={item.day.condition.text}
                        windSpeed={item.day.maxwind_kph}
                        humidity={item.day.avghumidity}
                        image={item.day.condition.icon}
                        chanceOfRain={item.day.daily_will_it_rain}
                        days={item.date}/>)
                })
                setWeatherList(forecastWeatherCard)
                setWeatherCardStyle({visibility: "visible"})
            })
    }

    return (
        <div>
            <div className="weather-list" style={weatherCardStyle}>
                <Weathercard
                    celsius={location.celsius}
                    city={location.city}
                    country={location.country}
                    condition={location.condition}
                    windSpeed={location.windSpeed}
                    humidity={location.humidity}
                    image={location.image}
                    hours={location.hour}
                    minutes={location.minute}
                    days={location.day}
                    time={location.time}/> {weatherList}
            </div>
            <button onClick={apiCall}>getapi</button>
        </div>

    )
}

export default Weather;