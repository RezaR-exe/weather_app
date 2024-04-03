import React, {useState} from "react";

function Navigation(props) {
    const [cityName,
        setCityName] = useState("");

    function handleChange(event) {
        setCityName(event.target.value)
    }

    function handleForm(event) {
        props.onAdd(cityName)
        event.preventDefault();
    }

    return (
        <form action="" onSubmit={handleForm}>
            <div className="input">
                <h1 className="title">RazWeather</h1>
                <div className="relative">
                    <input
                        type="text"
                        id="floating_filled"
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        name="location"
                        onChange={handleChange}/>
                    <label
                        htmlFor="floating_filled"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Please Enter a City</label>
                </div>
            </div>
        </form>

    )
}

export default Navigation;