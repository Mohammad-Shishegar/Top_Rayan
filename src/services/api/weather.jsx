import axios from "axios";


const getCurrentWeather = async (cityName) => {

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ce620025d33734fd3417ec6e04fbc691`)
        return response
    }
    catch (error) {
        return null
    }
}

export {getCurrentWeather}