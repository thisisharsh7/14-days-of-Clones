import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Header(props){
    const [headMovie, getHeadMovie] = useState([]);
  const fetchHead = `https://api.themoviedb.org/3/discover/tv?api_key=a0c53ec1c9833234df4cf45863ddc057&with_networks=213`;

  useEffect(() => {
    async function getHeadMovies() {
      const req = await axios.get(fetchHead);
      const results = req.data.results;
      const len = req.data.results.length;
      getHeadMovie(results[Math.floor(Math.random()*(len+1))]);
    }
    getHeadMovies();
  }, [fetchHead]);
  console.log(headMovie);
    return(
        <>
            <header style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${headMovie?.backdrop_path}")`}}>
            <nav>
                <h1>Netflix</h1>
                <ul>
                    <li><button type='button' onClick={props.SignIn}>Sign In</button></li>
                    <li><button type='button' onClick={props.SignUp}>Sign Up</button></li>
                </ul>
            </nav>
            <div className='detail'>
                <h1>{headMovie?.name}</h1>
                <ul>
                  <li><button>Play</button></li>
                  <li><button>Watch Later</button></li>
                </ul>
                <div>
                <p>{headMovie?.first_air_date}</p>
                <p>{(headMovie?.overview?.length > 100) ? (`${headMovie.overview.slice(0,100)} . . . .`) : (headMovie?.overview)}</p>
                </div>
            </div>
            </header>
        </>
    )
}