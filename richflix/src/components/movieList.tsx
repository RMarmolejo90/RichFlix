import { type } from 'os';
import React, { useEffect, useState } from 'react'

type Data = {
  data: () => Promise<Movie>;
}

const MovieCard: React.FC<Movie> = (movie) => {
  return (
    <div>
      <image href={movie.poster_path} />
      <h3>{movie.title}</h3>
    </div>
  )
}

export default function movieList({data}: Data) {
  
  const movies: any[] = Object.values(data);
  return (
    <>
      {movies.map((movie) => {<MovieCard key={movie.id} {...movie}/>})}
    </>
  );
};

