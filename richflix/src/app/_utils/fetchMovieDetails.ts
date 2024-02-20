import requests from '../_lib/movies/requests'


const fetchMovieDetails = async (movieId: string) => {
  
  await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, requests.options)
    .then(movieDetails => movieDetails.json())
    .catch(err => console.error(err));

}

export default fetchMovieDetails