import React, { createContext, useState } from "react";

export const ThemeContext = createContext();


const ThemeContextProvider = ({children}) => {
    let [isLightTheme, setIsLightTheme] = useState(true);

    const toggleTheme=()=>{
        setIsLightTheme(prevState=> isLightTheme=!prevState)
    }

    return (
        <ThemeContext.Provider value={{isLightTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
