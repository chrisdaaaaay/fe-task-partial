import { useEffect, useState, useMemo } from 'react';
import './styles.css';
import { useFilteredMovies } from './hooks/useFilteredMovies';
import SiteHeader from './shared/header';
import CheckBoxFilter from './filters/checkbox-filter';
import NumberFilter  from './filters/number-filter';
import MovieList from './movies/movie-list';


export default function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filterRating, setFilterRating] = useState([]);

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
      
      setAllMovies(movies);
      setFilteredMovies(movies
        .sort(function(a,b) {
          return b.popularity - a.popularity;
        }));
    };

    // initialise the default filter rating
    setFilterRating(parseFloat(3));

  }, []);

  useMemo(() => {
    if(allMovies && genres) {
      
      // Store a set of the distinct genre IDs discovered in the movies
      const distinctGenresIds =  new Set();

      // Inject the genre names into the movies so we can later pass it to the movie item component
      allMovies.forEach(m => {
        let genre_names = [];
        m.genre_ids.forEach(g => {
          genre_names.push(genres.find(f => f.id == g).name);
          distinctGenresIds.add(g);
        });
        m.genre_names = genre_names;
      });

      // Set the hidden flag on each genre so that we can later hide/show them in the checkbox filter component
      genres.forEach(g => g.hidden = true );
      distinctGenresIds.forEach(gi =>
        genres.find(gf => gf.id == gi).hidden = false
      );
    }
  }, [genres, allMovies]);

  const applyFilters = () => {
    setFilteredMovies(useFilteredMovies(allMovies, selectedGenres, filterRating));
  }

  const onGenreFilterChanged = (e) => {
    const newSelectedGenres = selectedGenres;
    const genreId = parseInt(e.target.value);

    // Ensure that the clicked genre id is added/removed accordingly
    if(selectedGenres.find(sg => sg == genreId)) {
      newSelectedGenres.splice(selectedGenres.indexOf(genreId), 1);
    }
    else {
      newSelectedGenres.push(genreId);
    }
    
    setSelectedGenres(newSelectedGenres);
    applyFilters();
  }

  const onRatingFilterChanged = (e) => {
    setFilterRating(parseFloat(e.target.value));
    applyFilters();
  }
  
  return (
    <div>
      <SiteHeader />
      
      <main>
        <CheckBoxFilter checkboxItems={genres} onFilterChanged={onGenreFilterChanged} />
        <NumberFilter labelText="Minimum rating" min={0} max={10} step={0.5} value={filterRating} onFilterChanged={onRatingFilterChanged} />
        <h2>Showing {filteredMovies.length} movies</h2>
        <MovieList movies={filteredMovies} />
      </main>

    </div>
  );
}
 