import requests from '../_lib/movies/requests'


const fetchMovieDetails = async (movieId: string) => {
  
  const movieDetails: MovieDetails = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, requests.options)
    .then(response => response.json())
    .catch(err => console.error(err));

    return movieDetails
}

export default fetchMovieDetails