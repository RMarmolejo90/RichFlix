import { type } from 'os';
import React, { useEffect, useState } from 'react'
import requests from '@/lib/movies/requests';
import Image from 'next/image';

// MovieList component displays the rows of fetched movie data


const MovieCard: React.FC<Movie> = (movie) => {
  const imageSize = "w342";
  const posterUrl = `http://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`;
  return (
    <div className='flex flex-row'>
      <Image 
        src={posterUrl}
        alt={movie.title}
        width={100} 
        height={100}
        quality={100}
      />
      <h3>{movie.title}</h3>
    </div>
  )
}

interface Fetchurl {
  fetchUrl: string
}


const MovieList = async ({fetchUrl}: Fetchurl) => {
  
  async function getMovies(fetchUrl: string): Promise<Movie[]> {
    const response = await fetch(fetchUrl, requests.options);
    const data: QueryData = await response.json();
    const movies = data.results;
    return movies;
  }
  const movies = await getMovies(fetchUrl)

  return (
    <div className='flex flex-row'>
      {movies.map((movie:Movie) => (<MovieCard key={movie.id} {...movie}/>))}        
    </div>
  );
}

export default MovieList
