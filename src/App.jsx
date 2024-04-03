import React, {useState} from "react";
import styles from "./index.css"
import Weather from "./Weather"
import Navigation from "./Navigation"

function App() {
    const [city, setCity] = useState("");

    function handleCityName(cityName) {
        setCity(cityName)
    }

    return (
        <div className="main">
            <Navigation onAdd={handleCityName} />
            <Weather city={city} />
        </div>
    )
}

export default App;