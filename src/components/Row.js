import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../api/axios';
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
    console.log(movies);
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movies) =>
            ((isLargeRow && movies.poster_path) ||
              (!isLargeRow && movies.backdrop_path)) && (
              <img
                className={`row__poster ${
                  isLargeRow && 'row__posterLarge'
                }`}
                key={movies.id}
                src={`${base_url}${
                  isLargeRow
                    ? movies.poster_path
                    : movies.backdrop_path
                }`}
                alt={
                  movies?.name ||
                  movies?.title ||
                  movies?.original_name
                }
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
