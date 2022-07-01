import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import Sensor from "../../components/sensor/Sensor";
import { sensorDt } from "../../fakeData";
import { ThemeContext } from "../../services/context/DarkTheme";
import "./sensorsstyle.scss"

const Sensors = () => {

    const [sensorData, setSensorData] = useState(sensorDt)

    const Theme = useContext(ThemeContext)

    return (
        <div className={ Theme.dark === true ? "sensors sensors-dark" : "sensors"}>
            <h6>وضعیت سنسور ها</h6>
            <Grid container >
                {
                    sensorData.map(item => (
                        <Grid  md={6} xl={4} xs={12} >
                            <Sensor title= {item.title} power = {item.power} status = {item.status} report = {item.report}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Sensors