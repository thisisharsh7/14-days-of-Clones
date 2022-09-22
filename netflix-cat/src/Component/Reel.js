import React, { useEffect, useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Reel({ head, lnk }) {
  const [movieList, getList] = useState([]);
  const [showTrailer, getTrailer] = useState("");
  const fetchLink = `https://api.themoviedb.org/3/${lnk}`;

  useEffect(() => {
    async function getMovies() {
      const req = await axios.get(fetchLink);
      getList(req.data.results);
    }
    getMovies();
  }, [fetchLink]);
  function callMovie(smovie, e) {
    if (showTrailer) {
      getTrailer("");
    } else {
      movieTrailer(smovie?.name || smovie?.title || "")
        .then((url) => {
          const urlParameters = new URLSearchParams(new URL(url).search);
          getTrailer(urlParameters?.get("v"));
          setTimeout(
            () =>
              e?.target?.parentElement?.parentElement?.parentElement?.children[1]?.children[0]?.classList?.toggle(
                "trailerCome"
              ),
            2000
          );
        })
        .catch((error)=>alert("Trailer Not Found"));
    }
  }
  function clearTrailer(e) {
    e.target.classList.toggle("trailerCome");
    if (showTrailer) {
      getTrailer("");
    }
  }
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <section>
        <h1>{head}</h1>
        <div className="clbtn">
          <p className="trailerX" onClick={clearTrailer}>
            X
          </p>
        </div>
        <div className="movie-list">
          {movieList.map((smovie, idx) => {
            return (
              //onclick callback function
              <div
                className="movie-only"
                key={idx}
                onClick={(e) => {
                  callMovie(smovie, e);
                }}
              >
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
        <div className="trailer-video">
          {showTrailer && <Youtube videoId={showTrailer} opts={opts} />}
        </div>
      </section>
    </>
  );
}
