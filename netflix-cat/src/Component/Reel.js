import React, { useEffect, useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer'; 

export default function Reel({ head, lnk }) {
  const [movieList, getList] = useState([]);
  const [showTrailer , getTrailer] = useState("");
  const fetchLink = `https://api.themoviedb.org/3/${lnk}`;

  useEffect(() => {
    async function getMovies() {
      const req = await axios.get(fetchLink);
      getList(req.data.results);
    }
    getMovies();
  }, [fetchLink]);
  function callMovie(smovie){
    if(showTrailer){
      getTrailer("");
    }else{
      
      movieTrailer(smovie?.name || smovie?.title || "")
      .then((url)=>{
        const urlParameters = new URLSearchParams(new URL(url).search);
        getTrailer(urlParameters.get('v'));
      })
      .catch();
    }
  }
  const opts = {
    height: "350",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <section>
        <h1>{head}</h1>
        <div className="movie-list">
          {movieList.map((smovie, idx) => {
            return (
              //onclick callback function 
              <div className="movie-only" key={idx} onClick={()=>callMovie(smovie)}>
              <img
                src={`https://image.tmdb.org/t/p/original/${smovie.poster_path}`}
                alt={smovie?.name || smovie?.title}
                
              />
              <p>{smovie?.name || smovie?.title}</p>
              </div>
            );
          })}
        </div>

        {/* know more about the youtube npm package */}
        <div>
       {showTrailer && <Youtube  videoId={showTrailer} opts={opts} />}
       </div>
      </section>
    </>
  );
}
