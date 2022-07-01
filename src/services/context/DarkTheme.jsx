import React , { createContext, useState } from "react";


const ThemeContext = createContext()

const DarkTheme = (props) => {

    const [dark , setDark] = useState(true)

    const changeTheme = () => {
        if(dark === false)
            setDark(true)
        else
            setDark(false)
    }

    return (
        <ThemeContext.Provider value={{dark , changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {DarkTheme,ThemeContext}