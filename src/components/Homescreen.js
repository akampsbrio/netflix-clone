import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Row from './Row';
import Banner from './Banner';
import requests from '../api/Requests';
const Homescreen = () => {
  return (
    <div class="homeScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row  */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default Homescreen;
