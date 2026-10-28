
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const SailorMoon = () => {    
    const apiKey = import.meta.env.VITE_TMDB_API_KEY; //environment variables and configuration management!
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=Sailor%20Moon`;
    const { data, loading, error } = useFetch(url)
    const [ off, setOff ] = useState(false)

    return(
        <div>
            <button onClick={() => setOff(!off)}>
                Explore the Moon Kingdom
            </button>

            {off &&
                <div>
                    {data && data.results.map((anime) => (
                        <div key = {anime.id}>
                            <h3>{anime.name}</h3>
                           <img src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`} alt="Sailor Moon poster" />
                        </div>
                    ))}
                    {loading && 'Kingdom is loading...'}
                    {error && ' Interferace with moon connection...'}
                </div>
            }
        </div>
    )
}

export default SailorMoon