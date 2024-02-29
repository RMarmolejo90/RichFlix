import genres from "./genres"
const apiKey = process.env.DB_API_KEY;

const requests = {
  topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US',
  popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US',
  comingSoon: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US',
  horror: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.horror.id}`,
  action: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.action.id}`,
  adventure: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.adventure.id}`,
  documentary: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.documentary.id}`,
  nowPlaying: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}',
  comedy: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US,page=2,page=3&sort_by=popularity.desc&with_genres=${genres.comedy.id}`,
  drama: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.drama.id}`,
  thriller: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.thriller.id}`,
  romance: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.romance.id}`,
  comedyTV: `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&with_genres=${genres.comedy.id}`,
  options: {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
    }
  },
  queries: {
    search: 'https://api.themoviedb.org/3/search/',
  }
}


export default requests