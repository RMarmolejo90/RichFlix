import { type } from 'os';
import React, { useEffect, useState } from 'react'
import TopRatedMovies from './topRatedMovies';

type Data = {
  data: () => Promise<Movie>;
}

const MovieCard: React.FC<Movie> = 

export default function MovieCard({data}: Data) {
  const movies: any[] = Object.values(data);
  
  return (
    <div>
      {movies.map((key={movies.id}) => {})}
    </div>
  )
}

