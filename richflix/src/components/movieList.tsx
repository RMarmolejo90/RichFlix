'use client'

import React from 'react'
import requests from '@/lib/movies/requests';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// MovieList component displays the rows of fetched movie data


interface Props{
  fetchUrl: string,
  listName: string,
}

const MovieList = async ({fetchUrl, listName}: Props) => {
  const MovieCard: React.FC<Movie> = (movie) => {
    const imageSize = "w500";
    const posterUrl = `http://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`;
    const altTag: string = movie.title ? movie.title : "Movie Poster Image";
    return (
      <div className='flex-none px-2'>
        <Image 
          src={posterUrl}
          alt={altTag}
          width={128} 
          height={200}
          quality={100}
        />
      </div>
    )
  }

  const slideLeft = () => {
    const slider = document.getElementById('slider' + listName);
    if (slider){
      slider.scrollLeft = slider.scrollLeft - 400}
  }
  const slideRight = () => {
    const slider = document.getElementById('slider' + listName);
    if (slider){
      slider.scrollLeft = slider.scrollLeft + 400}
  }

  async function getMovies(fetchUrl: string): Promise<Movie[]> {
    const response = await fetch(fetchUrl, requests.options);
    const data: QueryData = await response.json();
    if (!response.ok) {throw Error(`error fetching data from ${fetchUrl}`)}
    else {
      const movies = data.results;
      return movies;
    }
  }
  const movies = await getMovies(fetchUrl)

  return (
    <div className='flex flex-col group'>
      <div className='border-t-2 border-l-2 rounded-tl-3xl border-red-500'>
        <h2 className='p-2 pl-12 font-semibold text-xl tracking-wide'>{listName}</h2>
      </div>
      <div className='w-full flex flex-row relative items-center justify-between'>
        <ChevronLeftIcon onClick={slideLeft} className='hidden p-2 m-4 left-0 h-16 w-16 text-gray-200 absolute z-10 opacity-50 hover:opacity-100 hover:cursor-pointer group-hover:block' />
        <div id={'slider' + listName} className='my-4 flex flex-shrink-0 w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap text-white scrollbar-hide relative'>
          {movies.map((movie:Movie) => (<MovieCard key={movie.id} {...movie}/>))}     
        </div>
        <ChevronRightIcon onClick={slideRight} className='hidden p-2 m-4 right-0 h-16 w-16 text-gray-200 absolute z-10 opacity-50 hover:opacity-100 hover:cursor-pointer group-hover:block' />   
      </div>
    </div>
  );
}

export default MovieList
