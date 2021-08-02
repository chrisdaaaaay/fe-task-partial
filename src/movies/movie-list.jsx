import './movie-list.css';
import MovieItem from './movie-item';

const MovieList = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map(m => (
        <li key={m.id}>
          <MovieItem movie={m} />
        </li>
      ))}
    </ul>
  );
}
 
export default MovieList;