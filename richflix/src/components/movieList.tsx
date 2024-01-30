import { type } from 'os';
import React from 'react'


const MovieCard: React.FC<Movie> = (movie) => {
  return (
    <div>
      <image href={movie.poster_path} />
      <h3>{movie.title}</h3>
    </div>
  )
}


const MovieList = ({...queryData}: QueryData) => {
  const movies = queryData.results
  console.log({movies});
//  const movies = Object.values({results})

  return (
    <div>
      {movies.map((movie:Movie) => (<MovieCard key={movie.id} {...movie}/>))}        
    </div>
  );
}

export default MovieList
