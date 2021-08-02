const MovieItem = () => {
  return ( 
    <div className="movie">

      <h3 className="movie-title">Wonder Woman 1984</h3>

      <p class="movie-desc">
        Wonder Woman comes into conflict with the Soviet Union during the
        Cold War in the 1980s and finds a formidable foe by the name of the
        Cheetah.
      </p>

      <dl className="movie-meta">
        <dt>Rating:</dt>
        <dd>7/10</dd>
        <dt>Popularity:</dt>
        <dd>2407.318</dd>
      </dl>
    </div>
   );
}
 
export default MovieItem;