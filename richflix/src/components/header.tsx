"use client"

import Image from 'next/image'
import requests from '@/lib/movies/requests';
import { useEffect, useState } from 'react';

const headerMoviesURL: string = requests.nowPlaying;

const header = () => {
  
  const [movies, setMovies] = useState<Movie[]>();
  const [displayMovie, setDisplayMovie] = useState<Movie>();
  const backdropPath: string | null = displayMovie?.backdrop_path ?? null;
  const backdrop: string = `https://image.tmdb.org/t/p/w1280${backdropPath}`;
  const altTag: string = displayMovie?.title??"Movie Backdrop image";
  
  useEffect(()=> {
    async function getMovies(fetchUrl: string): Promise<Movie[]> {
      console.log('fetching data');
      const response = await fetch(fetchUrl, requests.options);
      const data: QueryData = await response.json();
      if (!data) {throw Error(`error fetching data from ${fetchUrl}`)}
      else {
        const movies = data.results;
        console.log(movies);
        setMovies(movies);
        return movies
      }
    } getMovies(headerMoviesURL);
  }, [])
  
  useEffect(() => {
    if (movies)
      {const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setDisplayMovie(randomMovie);
      console.log("setDisplay");}
  }, [movies])


  return (
    <div className='w-full h-[500px] top-0 text-white overflow-hidden relative '>
      <div className='w-full h-[500px] top-0 absolute bg-gradient-to-r from-[#09090bCC] z-10'></div>
      {displayMovie && (<Image 
        src={backdrop} 
        alt={altTag} 
        quality={100}
        sizes="100vw"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: '50% 10%',
        }}
        priority={true}
      />)} 
      {displayMovie && (
    <div className='absolute mt-[-200px] left-4 z-20'>
      <h1 className='text-2xl tracking-wide font-bold'>{displayMovie.title}</h1>
      <button className='border border-gray-200 tracking-wider font-semibold text-lg'>Details</button>
    </div>
  )}

  </div>
)
}

export default header