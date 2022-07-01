import React, { useContext, useRef , useState } from "react";
import {CameraAlt} from "@mui/icons-material"

import "./profilestyle.scss"
import { ThemeContext } from "../../services/context/DarkTheme"
const image = require("../../assets/images/pexels-pixabay-220453.jpg")

const Profile = () => {
    
    const file = useRef(null)

    const Theme = useContext(ThemeContext)


    return(
        <div className={ Theme.dark === true ? "profile profile-dark" : "profile" }>
            <div className="image">
                <img src={ image} alt="" />
                <button className="image-btn" formAction="file"><CameraAlt className="icon"/></button>
                <input type="file" id="file" ref={file} style={{display:"none"}} />
            </div>
            <div className="information">
                <input className="input" type={"text"} placeholder = {": نام و نام خانوادگی"}/>
                <input className="input left" type={"text"} placeholder = {": شماره تماس"}/>
                <input className="input"  type={"text"} placeholder={": آدرس"}/>
                <input className="input left" type={"email"} placeholder = {": ایمیل"}/>
            </div>
            <div className="btn">
                <button className="save-btn">ذخیره اطلاعات</button>
            </div>
        </div>
    )
}

export default Profile