import { type } from 'os';
import React, { useEffect, useState } from 'react'
import requests from '@/lib/movies/requests';

// MovieList component displays the rows of fetched movie data

const MovieCard: React.FC<Movie> = (movie) => {
  return (
    <div>
      <image href={movie.poster_path} />
      <h3>{movie.title}</h3>
    </div>
  )
}


const MovieList = async (fetchUrl: string) => {
  
  async function getMovies(fetchUrl: string): Promise<Movie[]> {
    const response = await fetch(fetchUrl, requests.options);
    const data: QueryData = await response.json();
    const movies = await data.results;
    return movies;
  }
  const movies = await getMovies(fetchUrl)

  return (
    <div>
      {movies.map((movie:Movie) => (<MovieCard key={movie.id} {...movie}/>))}        
    </div>
  );
}

export default MovieList
