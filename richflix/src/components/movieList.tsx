import { type } from 'os';
import React, {useEffect} from 'react'

type Data = {
  movieData: () => Promise<Movie[] | Movie>;
}

const MovieCard: React.FC<Movie> = (movie) => {
  return (
    <div>
      <image href={movie.poster_path} />
      <h3>{movie.title}</h3>
    </div>
  )
}

export default function movieList({movieData}: Data) {
  console.log(movieData);
  
  const movies: Movie[] = Object.values(movieData);
  return (
    <div>
      {movies.map((movie) => (<MovieCard key={movie.id} {...movie}/>))}
    </div>
  );
};

