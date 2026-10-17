# 🧠 React Context API — Memory Trick

 The 3 Things to Remember

- `useState` = Creates and manages it.
- `Provider` = Shares it.
- `useContext` = Gets it.

 💡 Think of My Theme Example

**ThemeContextProvider** → Creates and shares the theme.


const [theme, setTheme] = useState("light")


**ThemeToggle** → Gets `theme` and `setTheme` because it needs to change the theme.


const { theme, setTheme } = useContext(ThemeContext)


**Sidebar** → Only gets `theme` because it needs to know which colors to display.

const { theme } = useContext(ThemeContext)


### ⭐ Remember!

**I'm not creating the theme again. I'm accessing the theme that already exists!**

Context API helps me avoid **prop drilling** — passing the same props through multiple components just to reach the component that needs them.