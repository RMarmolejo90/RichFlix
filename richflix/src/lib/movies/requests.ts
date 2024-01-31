const requests = {
  topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  comingSoon: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
  comedy: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=comedy',
  drama: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=drama',
  thriller: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=thriller',
  romance: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=romance',
  comedyTV: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=comedy',
  topRatedTV: 'https://api.themoviedb.org/3/account/20943228/rated/tv?language=en-US&page=1&sort_by=created_at.asc',
  options: {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRlYmIyNDlkMGEyMGMzMjlmNDZlNDkwZTZjMTU0MiIsInN1YiI6IjY1YjBmMDVkYmU2ZDg4MDE3MTQzYjQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYZcbFV8srA7y3tWLhxbkFDSc0i9Ub2_B0UoaGwAKGE'
    }
  }
}

export default requests