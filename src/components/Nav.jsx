
import ThemeToggle from "./ThemeToggle"

function Nav() {


    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li>  <ThemeToggle  /> </li>
            </ul>
        </nav>
    )
}

export default Nav
