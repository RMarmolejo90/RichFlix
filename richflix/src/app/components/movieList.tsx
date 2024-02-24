"use client"
import React, { useEffect, useState } from 'react'
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import fetchMovieList from '@/app/_utils/fetchMovieList';
import MovieRow from './movieRow';

// MovieList component displays the rows of fetched movie data
interface Props{
  fetchUrl: string,
  listName: string,
}

const MovieList = ({fetchUrl, listName}: Props) => {
  

  const [movies, setMovies] = useState<Movie[]>([]); // Initialize movies state as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await fetchMovieList(fetchUrl);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchData();
  }, []);

  
 

  // slider controls
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


  return (
    <div className='flex flex-col group'>
      <div className='border-t-2 border-l-2 rounded-tl-3xl border-red-500'>
        <h2 className='p-2 pl-12 font-semibold text-xl tracking-wide'>{listName}</h2>
      </div>
      <div className='w-full flex flex-row relative items-center justify-between'>
        <MovieRow movies={movies} listName={listName}/>
      </div>
    </div>
  );
}

export default MovieList
