import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Reel({ head, lnk }) {
  const [movieList, getList] = useState([]);
  const fetchLink = `https://api.themoviedb.org/3/${lnk}`;

  useEffect(() => {
    async function getMovies() {
      const req = await axios.get(fetchLink);
      getList(req.data.results);
    }
    getMovies();
  }, [fetchLink]);
  console.table(movieList);
  return (
    <>
      <section>
        <h1>{head}</h1>
        <div className="movie-list">
          {movieList.map((smovie, idx) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/original/${smovie.poster_path}`}
                alt={smovie.name || smovie.title}
                key={idx}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
