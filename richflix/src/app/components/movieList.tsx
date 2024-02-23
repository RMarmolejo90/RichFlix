"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import fetchMovieList from '@/app/_utils/fetchMovieList';
import Link from 'next/link';


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

  
  // identifies each movie card
  const MovieCard: React.FC<Movie> = (movie) => {
  const imageSize = "w500";
  const posterUrl = `http://image.tmdb.org/t/p/${imageSize}${movie.poster_path}`;
  const altTag: string = movie.title ? movie.title : "Movie Poster Image";
  return (
    // Wrap the Link and Image in an outer div for applying hover styles
    <div className='flex-none px-2'>
      <Link href={`/movies/${movie.id}`}>
        <div className="transition duration-300 ease-in-out transform hover:scale-105">
          <Image 
            src={posterUrl}
            alt={altTag}
            width={150} 
            height={0}
            quality={100}
            className='h-auto'
          />
        </div>
      </Link>
    </div>
  )
}


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
        <ArrowLeftCircleIcon onClick={slideLeft} className='hidden p-2 m-4 left-0 h-16 w-16 text-slate-50 absolute z-10 opacity-50 hover:opacity-100 hover:cursor-pointer group-hover:block' />
        <div id={'slider' + listName} className='my-4 flex flex-shrink-0 w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap text-white scrollbar-hide relative'>
          {movies.map((movie:Movie) => (<MovieCard key={movie.id} {...movie}/>))}     
        </div>
        <ArrowRightCircleIcon onClick={slideRight} className='hidden p-2 m-4 right-0 h-16 w-16 text-slate-50 absolute z-10 opacity-50 hover:opacity-100 hover:cursor-pointer group-hover:block' />   
      </div>
    </div>
  );
}

export default MovieList
