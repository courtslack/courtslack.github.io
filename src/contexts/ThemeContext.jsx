
import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

return (
    <ThemeContext.Provider value = {{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
)
// Notice the two sets of curly braces?
// - Outer { } → Tells JSX we're using JavaScript.
// - Inner { } → Creates an object containing theme and setTheme.

}