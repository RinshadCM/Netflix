import React from 'react'
import { useState, useEffect } from 'react'
import instance from './baseUrl'
import './Banner.css'

function Banner({ fetchUrl }) {

    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"

    // Function to call API
    async function getData() {
        const result = await instance.get(fetchUrl)
        setMovies(result.data.results[
            Math.floor(Math.random() * result.data.results.length - 1)
        ])
    }
    useEffect(() => {
        getData()
    }, []
    )

    console.log(movies)


    return (
        <div
            className='banner'
            style={{ backgroundImage: `url(${base_url}${movies?.backdrop_path})` }}>

            <div className='bannerContent'>
                <h1 className='bannerTitle'>{movies?.title}</h1>
                <p className='bannerOverview'>{movies?.overview}</p>
                <div className='voteAverage'>
                    <span className='number'>{movies?.vote_average}</span>
                    <i className='star'>⭐️</i>
                    <span className='votes'>({movies?.vote_count} votes)</span>
                </div>
                
            </div>
        </div>

    )
}

export default Banner