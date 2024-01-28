export default async function getTopRatedMovies(): Promise<Movie> {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRlYmIyNDlkMGEyMGMzMjlmNDZlNDkwZTZjMTU0MiIsInN1YiI6IjY1YjBmMDVkYmU2ZDg4MDE3MTQzYjQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYZcbFV8srA7y3tWLhxbkFDSc0i9Ub2_B0UoaGwAKGE'
  //   }
  // };
  const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1?api_key=7adebb249d0a20c329f46e490e6c1542')
  
  if (!res.ok) {
    throw new Error("Error Fetching Movie Data");
  }
  
  const movieData: Promise<Movie> = await res.json();
  console.log(movieData);
  return(movieData);
}
