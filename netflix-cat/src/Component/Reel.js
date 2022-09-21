import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Reel({name , lnk}){
    const [movieList , getList] = useState([]);
    const fetchLink = `https://api.themoviedb.org/3/${lnk}`;
    
  
    useEffect(()=>{
        async function getMovies() {
            const req = await axios.get(fetchLink);
            getList(req.data.results);
        }
        getMovies();
    },[fetchLink])
    console.log(movieList);
    return(
        <>
            <h1>{name}</h1>
            {
                movieList.map((smovie,idx)=>{
                    return(
                        <p key={idx}>
                            {smovie.title}
                        </p>
                    )
                })
            }
        </>
    )
}