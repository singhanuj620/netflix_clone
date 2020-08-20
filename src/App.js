import React from 'react';
import Row from './Components/Row'
import Banner from './Components/Banner'
import request from './request'
import './App.css';
import Nav from './Components/Nav'

const App = () => {
  const BaseUrl = "https://api.themoviedb.org/3"

  
  return (
    <div className="App">
      <Nav/>
      <Banner />

      <Row title="Trending Now" fetchUrl={`${BaseUrl}${request.fetchTrending}`}  isLargeRow/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={`${BaseUrl}${request.fetchNetflixOriginals}`} />
      <Row title="Top Rated" fetchUrl={`${BaseUrl}${request.fetchTopRated}`} />
      <Row title="Comedy Movies" fetchUrl={`${BaseUrl}${request.fetchComedyMovies}`} />
      <Row title="Action Movies" fetchUrl={`${BaseUrl}${request.fetchActionMovies}`} />
      <Row title="Romance Movies" fetchUrl={`${BaseUrl}${request.fetchRomanceMovies}`} />
      <Row title="Horror Movies" fetchUrl={`${BaseUrl}${request.fetchHorrorMovies}`} />
      <Row title="Documentaries Movies" fetchUrl={`${BaseUrl}${request.fetchDocumentaries}`} />
    </div>
  );
}

export default App;
