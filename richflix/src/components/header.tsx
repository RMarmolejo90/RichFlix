"use client"

import Image from 'next/image'
import requests from '@/lib/movies/requests';
import { useEffect, useState } from 'react';




const header = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [displayMovie, setDisplayMovie] = useState<Movie>(movies[0]);
  const backdropPath: string = displayMovie?.backdrop_path ?? '';
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
    } getMovies(requests.comedy);
  }, [])
  
  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setDisplayMovie(randomMovie);
    console.log("setDisplay");
  }, [movies, 8000])


  return (
    <div className='w-full h-40 text-white'>
      {backdrop && (<Image 
        src={backdrop} 
        alt={altTag} 
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        priority={true}
      />)}
    </div>
  )
}

export default header