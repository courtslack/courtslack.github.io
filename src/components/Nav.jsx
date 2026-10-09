
import ThemeToggle from "./ThemeToggle"

function Nav({ theme, setTheme }) {


    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li>  <ThemeToggle  theme={theme} setTheme={setTheme}  /> </li>
            </ul>
        </nav>
    )
}

export default Nav
