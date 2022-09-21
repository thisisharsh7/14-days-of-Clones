import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Header(){
    const [headMovie, getHeadMovie] = useState([]);
  const fetchHead = `https://api.themoviedb.org/3/discover/tv?api_key=a0c53ec1c9833234df4cf45863ddc057&with_networks=213`;

  useEffect(() => {
    async function getHeadMovies() {
      const req = await axios.get(fetchHead);
      const results = req.data.results;
      const len = req.data.results.length;
      getHeadMovie(results[Math.floor(Math.random()*(len-1))]);
    }
    getHeadMovies();
  }, [fetchHead]);
  console.table(headMovie);
    return(
        <>
            <header style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${headMovie.poster_path}")`}}>
            <div>
                <p>Netflix</p>
                <ul>
                    <li><button>Sign In</button></li>
                    <li><button>Sign Up</button></li>
                </ul>
            </div>
            <div className='detail'>
                <p>{headMovie.name}</p>
                <p>{headMovie.overview}</p>
            </div>
            </header>
        </>
    )
}