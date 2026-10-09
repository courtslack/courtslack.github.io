import { useEffect, useRef } from "react"

    const ThemeToggle = ({ theme, setTheme }) => {


    // Create a reference to the button, starting with null
    const focusButton = useRef(null)

    // Run this code when the component first loads or the theme changes
    useEffect(() => {
        // .current gets the button connected to the reference
        // .focus() moves keyboard focus to that button
        focusButton.current.focus()
    }, [theme]) // Dependency array: watch for changes to theme

    return (
        <button
            ref = {focusButton}
            onClick={() => setTheme(
                theme === "light" ? "dark" : "light"            
            )}   
            className="theme-toggle"               
        >
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
    )
}

export default ThemeToggle