// Hmm... looks like an inexperienced teammate has made some mistakes here.
// Please explain - as though to your teammate - _what_ is wrong with this function and implement a working solution

// ANSWER:
// The genre_id property is referenced incorrectly,
// it should be genre_ids and there is an array of IDs.
// We must check for all of these, instead of a singular value
// Also, we can use the .filter method to make our code neater


// NEW CODE

export const useFilteredMovies = (movies, genres, rating) => {
  return movies.filter(
    m => {
      // All of the selected genres must be present to return true
      for(var i = 0;i < genres.length; i++) {
        if(m.genre_ids.indexOf(genres[i]) < 0) {
          return false;
        }
      }
      console.log(m.title + " comparing " + parseFloat(m.vote_average) + " to " + parseFloat(rating));
      return true && parseFloat(m.vote_average) >= parseFloat(rating);
    }
  );
};


// ORIGINAL CODE...

// let filteredMovies = [];

// export const useFilteredMovies = (movies, genres, rating) => {
//   for (let movie in movies) {
//     if (genres.indexOf(movie.genre_id) > 0 && movie.vote_average > rating) {
//       filteredMovies.push(movie);
//     }
//   }

//   return filteredMovies;
// };
