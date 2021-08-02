import { useEffect, useState, useMemo } from 'react';
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

    const fetchGenres = async() => {
      //const rsp = await fetchMovies;
      const rsp = await fetch("/genres.json").finally(() =>{
        fetchMovies();
      });

      const genres = await rsp.json();
      setGenres(genres);
    };

    fetchGenres();

    const fetchMovies = async() => {
      //const rsp = await fetchMovies;
      const rsp = await fetch("/movies.json");
      const movies = await rsp.json();
      
      

      setMovies(movies
        .sort(function(a,b) {
          return b.popularity - a.popularity;
        })
      );
    };

  }, []);

  useMemo(() => {
    if(movies && genres) {
      // Inject the genre names into the movies when either has changed
      movies.forEach(m => {
        let genre_names = [];
        m.genre_ids.forEach(g => {
          genre_names.push(genres.find(f => f.id == g).name);
        });
        m.genre_names = genre_names;
      });
    }
  }, [genres, movies]);

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
