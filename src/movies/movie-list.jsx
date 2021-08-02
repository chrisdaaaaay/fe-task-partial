import MovieItem from './movie-item';

const MovieList = () => {
  return (
    <ul className="movies">
      <li>
        <MovieItem />
      </li>
      <li>
        <MovieItem />
      </li>
      <li>
        <MovieItem />
      </li>
    </ul>
  );
}
 
export default MovieList;