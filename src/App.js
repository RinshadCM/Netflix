import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import NetRow from './NetRow';
import requests from './request';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>

      <Banner fetchUrl={requests.fetchTrending}></Banner>
      <NetRow isLargeRow={true} title="Trending" fetchUrl={requests.fetchTrending}></NetRow>
      <NetRow title="NetFlix Originals" fetchUrl={requests.fetchNetflixOriginals}></NetRow>
      <NetRow title="Top Rated" fetchUrl={requests.fetchTopRated}></NetRow>
      <NetRow title="Action Movies" fetchUrl={requests.fetchActionMovies}></NetRow>
      <NetRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></NetRow>
      <NetRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></NetRow>
      <NetRow title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}></NetRow>
      <NetRow title="Documentaries" fetchUrl={requests.fetchDocumentaries}></NetRow>

    </div>
  );
}

export default App;
