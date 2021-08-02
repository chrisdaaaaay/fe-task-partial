import { useEffect, useState } from 'react';
// import { useFilteredMovies } from './hooks/useFilteredMovies';
import { fetchMovies } from './api/movies';
import CheckBoxFilter from './filters/checkbox-filter';
// import { fetchGenres } from './api/genres';

import MovieList from './movies/movie-list';
import SiteHeader from './shared/header';
import './styles.css'; // check this file out & feel free to use the classes

export default function App() {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    
    const fetchMovies = async() => {
      //const rsp = await fetchMovies;

      const rsp = await fetch("/movies.json");
      const movies = await rsp.json();
      setMovies(movies);
    };

    fetchMovies();

    const fetchGenres = async() => {
      //const rsp = await fetchMovies;

      const rsp = await fetch("/genres.json");
      const genres = await rsp.json();
      setGenres(genres.sort(function(a,b) {
        return a.popularity - b.popularity;
      }));
    };

    fetchGenres();
    
  }, []);

  return (
    <div>
      <SiteHeader />
      
      <main>
        <CheckBoxFilter checkboxItems={genres} />
        <h2>Showing {movies.length} movies</h2>
        <MovieList movies={movies} />
      </main>

    </div>
  );
}
