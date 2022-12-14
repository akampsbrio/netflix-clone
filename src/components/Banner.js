import axios from '../api/axios';
import requests from '../api/Requests';
import React from 'react';
import { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        requests.fetchNetflixOriginals
      );
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n
      ? string.substring(0, n - 1) + '...'
      : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
