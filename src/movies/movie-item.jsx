import './movie-item.css';

const MovieItem = ({ movie }) => {
  return ( 
    <div className="movie">

      <h3 className="movie-title">{ movie.title }</h3>

      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster of: ${movie.title}`} />

      <p className="movie-desc">
        { movie.overview }
      </p>

      <dl className="movie-meta">
        <dt>Rating:</dt>
        <dd>{ movie.vote_average }</dd>
        <dt>Popularity:</dt>
        <dd>{ movie.popularity }</dd>
        <dt>Genres:</dt>
        <dd>
        { movie.genre_names.map((g, i) => (
          <span key={g}>
            {g}
            {i < movie.genre_names.length-2 ? ', ': '' }
            {i == movie.genre_names.length-2 ? ' and ': '' }
          </span>
        ))}
        </dd>
      </dl>
    </div>
   );
}

export default MovieItem;