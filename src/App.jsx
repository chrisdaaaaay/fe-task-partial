// import { useFilteredMovies } from './hooks/useFilteredMovies';
// import { fetchMovies } from './api/movies';
// import { fetchGenres } from './api/genres';

import MovieList from './movies/movie-list';
import SiteHeader from './shared/header';
import './styles.css'; // check this file out & feel free to use the classes

export default function App() {
  return (
    <div>
      <SiteHeader />
      
      <main>
        <h2>Showing 12 movies</h2>
        <MovieList />
      </main>

    </div>
  );
}
