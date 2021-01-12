import { useState, useEffect } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84592cf2007007a499b04d12d281c100&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=84592cf2007007a499b04d12d281c100&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <header>
        <input type="sarch" className="search" placeholder="Search..." />
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          // <Movie
          //   key={movie.id}
          //   poster_path={movie.poster_path}
          //   title={movie.title}
          // />
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
