"use client"
import React, { useEffect, useState } from 'react'
import fetchMovieList from '@/app/_utils/fetchMovieList';
import MovieRow from './movieRow';
import Link from 'next/link';

// MovieList component displays the rows of fetched movie data
interface Props{
  fetchUrl: string,
  listName: string,
  name: string,
}

const MovieList = ({fetchUrl, name, listName}: Props) => {
  

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
  }, [fetchUrl]);



  return (
    <div className='flex flex-col group'>
      <Link href={`/list/${name}`} className='hover:font-bold hover-gradient border-t-2 border-l-2 rounded-tl-3xl border-red-500'>
        <h2 className='p-2 pl-12 font-semibold text-xl tracking-wide'>{listName}</h2>
      </Link>
      <div className='w-full flex flex-row relative items-center justify-between'>
        <MovieRow movies={movies} listName={listName}/>
      </div>
    </div>
  );
}

export default MovieList
