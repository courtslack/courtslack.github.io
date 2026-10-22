
import { useReducer } from "react"

const initialState = {
    showAbout: true,
    showFavorites: true,
    showContact: true
}

const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ABOUT':
            return { ...state, showAbout: !state.showAbout }
        case 'TOGGLE_FAVORITES':
            return { ...state, showFavorites: !state.showFavorites }
        case 'TOGGLE_CONTACT':
            return { ...state, showContact: !state.showContact }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const Toggle = () => {
    const [state, dispatch] = useReducer(sectionReducer, initialState)
    //const [state, dispatch] = useReducer(reducer, initialState)

    return (
        //onClick={() => dispatch({ type: 'ACTION_NAME' })}
        <div className="toggle-container">
            < button onClick={ () =>dispatch({ type: 'TOGGLE_ABOUT'})}> About Me </button>
            {state.showAbout && <p>A little about me!</p>}

            < button onClick={ () =>dispatch({ type: 'TOGGLE_FAVORITES'})}> My favorite </button>
            {state.showFavorites && <p> My Favorite colors are blue and purple. </p>}

             < button onClick={ () =>dispatch({ type: 'TOGGLE_CONTACT'})}> Contect me </button>
            {state.showContact && (
                <a href="https://www.linkedin.com/in/courtneyslack/">
                    Connect with me on LinkedIn!
                </a>
            )}

             < button onClick={ () =>dispatch({ type: 'RESET'})}>  Reset Buttons </button>
        </div>
    )
}

export default Toggle