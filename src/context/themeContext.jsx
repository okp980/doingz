import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();


const ThemeContextProvider = ({ children }) => {
    let [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem('dis_todo_theme'))
        if (theme) {
            if (theme.light) {
                setIsLightTheme(true)
            } else {
                setIsLightTheme(false)
            }
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('dis_todo_theme', JSON.stringify({ light: isLightTheme }))
    }, [isLightTheme])

    const toggleTheme = () => {
        setIsLightTheme(prevState => isLightTheme = !prevState)

    }

    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
