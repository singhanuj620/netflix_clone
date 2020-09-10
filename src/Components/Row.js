import React, {useState, useEffect} from 'react'
import '../Css/Row.css'
import axios from 'axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_poster = "https://images.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1
        }
    } 

    const [movies, setMovies] = useState([])

    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect( () => {
        const fetchData = async () => {
            const temp = await axios.get(fetchUrl).catch((err) => (console.log('Error in geting axios response')))
            setMovies(temp.data.results)
        }
        fetchData();
    }, [fetchUrl])

    const handleClick = async(movie) => {
        if (trailerUrl){
            setTrailerUrl("")
        }
        else{
            await movieTrailer(movie?.title || movie?.name || movie?.original_name || "").then( url => {
                const temp = new URLSearchParams(new URL(url).search);
                const u = temp.get("v")
                setTrailerUrl(u)
            }).catch( err => (console.log(err)))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map( (movie) => {
                    return <img key={movie.id} 
                                src={`${base_poster}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name} 
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                onClick={() => handleClick(movie)}/>
                })}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row





