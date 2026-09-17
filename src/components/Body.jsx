import { BsStars } from "react-icons/bs"
import StarRating from "./StarRating"
import { useState, useEffect } from "react"

function Body() {

    const [game, setGame] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

         // immediately invoked async function — async function that runs as soon as it is created
        (async () => {

            try {
                // find data
                const url = '/data/videoGames.json'

                // fetch data
                const response = await fetch(url)

                // convert data to JS
                const data = await response.json()

                // put data into state
                setGame(data)
            }
            catch (err) {
                console.log(err)
            }
            finally{
              setIsLoading(false)
            }

        })()

    }, []) // no dependencies - runs once

    useEffect(() => {
      // Check if the games have loaded
      if (game.length > 0) {
        document.title = `${game.length} Favorite Games`
      }
    },[game])//runs when games load


    return (
        <div className="main-content">

            <h3>Hi, I'm Courtney!</h3>

            <p>
                I'm a student at Fox Valley Technical College. I'm studying both
                Web Development and Software Development.
            </p>

            <p>
                I've been around computers for as long as I can remember. My dad is a
                programmer, and growing up I loved playing games like Barbie and JumpStart.
                My love for video games never went away, and they're still one of my
                favorite hobbies today. Here are some of my favorites:
            </p>

            <div>
                <ul>
                    {game.map((game) => {
                        return (
                          <li key={game.id}>
                            <a href={game.link}>{game.title}</a> ({game.year})

                            <p>Genre: {game.genre}</p>
                            <p>Developer: {game.developer}</p>

                            <StarRating initialRating={game.rating} />
                        </li>
                        )
                    })}
                </ul>
            </div>

            <p className="closing">
                Thanks for stopping by! Have fun exploring my GitHub.
                <BsStars className="glitter-star" />
            </p>

        </div>
    )
}

export default Body