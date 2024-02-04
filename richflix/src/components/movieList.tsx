import { type } from 'os';
import React, { useEffect, useState } from 'react'
import requests from '@/lib/movies/requests';
import Image from 'next/image';

// MovieList component displays the rows of fetched movie data


interface Props{
  fetchUrl: string,
  listName: string
}

const MovieList = async ({fetchUrl, listName}: Props) => {
  
  const MovieCard: React.FC<Movie> = (movie) => {
    const imageSize = "w500";
    const posterUrl = `http://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`;
    return (
      <div className='flex-none px-2'>
        <Image 
          src={posterUrl}
          alt={movie.title}
          width={128} 
          height={200}
          quality={100}
        />
      </div>
    )
  }

  async function getMovies(fetchUrl: string): Promise<Movie[]> {
    const response = await fetch(fetchUrl, requests.options);
    const data: QueryData = await response.json();
    if (!data) {throw Error(`error fetching data from ${fetchUrl}`)}
    else {
      const movies = data.results;
      return movies;
    }
  }
  const movies = await getMovies(fetchUrl)

  return (
    <div className='my-4 flex flex-shrink-0 w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap text-white scrollbar-hide'>
      <h3>{listName}</h3>
      {movies.map((movie:Movie) => (<MovieCard key={movie.id} {...movie}/>))}        
    </div>
  );
}

export default MovieList
