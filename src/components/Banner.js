import React from 'react';
import './Banner.css';

const Banner = () => {
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
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url("./dark.jpg")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `The description goes here The description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes hereThe description goes here`,
            150
          )}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
