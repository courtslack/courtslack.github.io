
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const StarTrek = () => {
  
    const url = "https://stapi.co/api/v1/rest/spacecraft/search";
    const { data, loading, error } = useFetch(url)
    const [ off, setOff ] = useState(false)
    const [shipName, setShipName] = useState("");

    const assignShip = () => {
    if (!data?.spacecrafts?.length) return;

    const randomIndex = Math.floor(
        Math.random() * data.spacecrafts.length
    );

    const ship = data.spacecrafts[randomIndex];

    setShipName(ship.name);
    };

    return(
        <div>
           <button onClick={assignShip}>
                Which Starfleet ship will you serve on?
            </button>

            {shipName && (
            <p>
                You have been assigned to {shipName}.
                Report for duty, Ensign!
            </p>
            )}

        </div>
    )
}

export default StarTrek