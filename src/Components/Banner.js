import React, {useState, useEffect} from 'react'
import '../Css/Banner.css'
import axios from 'axios'
import request from '../request'
const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const temp = await axios.get(`https://api.themoviedb.org/3${request.fetchTrending}`)
            setMovie(temp.data.results[Math.floor(Math.random() * temp.data.results.length-1)])
        }
        fetchData();
    },[])


    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0,n-1)+ "..." : str
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        Play
                    </button>

                    <button className="banner_button">
                        My List
                    </button>
                </div>

                <h2 className="banner_description">
                    {truncate(movie?.overview, 150)}    
                </h2> 
            </div>

            <div className="banner_fadeBottom"></div>
        </header>
        
    )
}

export default Banner
