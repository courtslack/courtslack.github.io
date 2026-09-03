import { BsStars } from "react-icons/bs";

const videoGames = [
  {
    name: "Stardew Valley",
    link: "https://stardewvalleywiki.com/Stardew_Valley_Wiki"
  },
  {
    name: "The Sims 4",
    link: "https://sims.fandom.com/wiki/The_Sims_4"
  },
  {
    name: "Half-Life",
    link: "https://half-life.fandom.com/wiki/Half-Life"
  },
  {
    name: "Harvest Moon",
    link: "https://harvestmoon.fandom.com/wiki/Harvest_Moon:_Save_The_Homeland"
  },
  {
    name: "Resident Evil",
    link: "https://residentevil.fandom.com/wiki/Resident_Evil_Wiki"
  }
]

function Body() {
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
            {videoGames.map((game) => {
                return (
                <li key={game.name}>
                    <a href={game.link}>{game.name}</a>
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