import React, { useContext, useEffect, useState } from "react"
import { Message, Sensors, SevereCold, Map, Settings, Person, BarChart } from '@mui/icons-material';
import { Tooltip, Stack, CircularProgress, styled, Switch, FormLabel, FormControlLabel } from "@mui/material";
import { createTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import { getCurrentWeather } from "../../services/api/weather";
import "./sidebarStyle.scss"
import { Link } from "react-router-dom"

import { ThemeContext } from "../../services/context/DarkTheme";
const image = require("../../assets/images/pexels-pixabay-220453.jpg")
const sun = require("../../assets/images/sun.png")
const cloud = require("../../assets/images/cloud.png")
const rain = require("../../assets/images/rain.png")


const BlueOnGreenTooltip = withStyles({
    tooltip: {
        fontFamily: "sans",
        fontSize: "16px",
    }
})(Tooltip);

const SideBar = () => {

    const [weather, setWeather] = useState("")
    const defaultTheme = createTheme();

    useEffect(() => {
        const getData = async () => {
            const res = await getCurrentWeather("tehran")
            setTimeout(() => {
                setWeather(res)
            }, 1500)
        }
        getData()
    }, [])

    const [active, setActive] = useState("charts")

    const handleWeatherIcon = (code) => {
        if (code === "01d" || code === "01n")
            return <img src={sun} className={"icon"} />
        else if (code === "02d" || code === "02n" || code === "03d" || code === "03n" || code === "04d" || code === "04n")
            return <img src={cloud} className={"icon"} />
        else if (code === "09d" || code === "09n" || code === "10d" || code === "10n" || code === "50d" || code === "50n")
            return <img src={rain} className={"icon"} />
    }


    const kelvinToCelsius = (temperature) => {
        return Math.floor(temperature - 273.15)
    }

    const Theme = useContext(ThemeContext)

    return (
        <ThemeProvider theme={defaultTheme}>
            <div className={Theme.dark === true ? "sidebar sidebar-dark" : "sidebar"}>
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={"/charts"} onClick={()=>setActive("charts")}>
                                <BlueOnGreenTooltip title={"نمودار ها"}>
                                    <BarChart className={ active === "charts" ?  " icon_active" : "icon"} />
                                </BlueOnGreenTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/sensors"}  onClick={()=>setActive("sensors")}>
                                <BlueOnGreenTooltip title={"سنسور ها"}>
                                    <Sensors  className={ active === "sensors" ?  " icon_active" : "icon"}/>
                                </BlueOnGreenTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/map"}  onClick={()=>setActive("map")}>
                                <BlueOnGreenTooltip title={"نقشه"}>
                                    <Map  className={ active === "map" ?  " icon_active" : "icon"} />
                                </BlueOnGreenTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/profile"}  onClick={()=>setActive("profile")}>
                                <BlueOnGreenTooltip title={"پروفایل"}>
                                    <Person  className={ active === "profile" ?  " icon_active" : "icon"}/>
                                </BlueOnGreenTooltip>
                            </Link>
                        </li>
                        <li>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ width: "100%", height: "100%" }}>
                            <Switch size="small" defaultChecked = {Theme.dark === true ? true : false}  onChange={()=>Theme.changeTheme()}/>                          
                        </Stack>
                        
                        </li>
                    </ul>
                </div>
                <div className="weather">
                    {weather ? (
                        <>
                            <div className="temp">
                                {weather ? handleWeatherIcon(weather.data.weather[0].icon) : null}
                                <p> {weather ? <>{kelvinToCelsius(weather.data.main.temp)} &deg; </> : null}</p>
                            </div>
                            <div className="title">
                                <p>تهران</p>
                            </div>
                        </>

                    ) : (
                        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                            <CircularProgress color="secondary" /></Stack>
                    )
                    }
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SideBar