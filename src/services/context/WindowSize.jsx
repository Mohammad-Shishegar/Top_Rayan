import React , { createContext, useState } from "react";

const SizeContext = createContext()

const WindowSize = (props) => {

    const [size , setSize] = useState(window.innerWidth)

    return(
        <SizeContext.Provider value={{size}}>
            {props.children}
        </SizeContext.Provider>
    )

}

export {WindowSize , SizeContext}