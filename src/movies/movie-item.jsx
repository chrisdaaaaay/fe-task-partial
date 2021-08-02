import './movie-item.css';

const MovieItem = ({ movie }) => {
  return ( 
    <div className="movie">

      <h3 className="movie-title">{ movie.title }</h3>

      <p class="movie-desc">
        { movie.overview }
      </p>

      <dl className="movie-meta">
        <dt>Rating:</dt>
        <dd>{ movie.vote_average }</dd>
        <dt>Popularity:</dt>
        <dd>{ movie.popularity }</dd>
      </dl>
    </div>
   );
}

export default MovieItem;