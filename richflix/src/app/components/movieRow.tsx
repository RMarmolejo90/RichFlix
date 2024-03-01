import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  movies: Movie[] | []
  listName: string
}



const MovieRow: React.FC<Props> = ({movies, listName}) => {

  const filteredMovies = movies.filter(movie => movie.poster_path !== null);

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
              width={300} 
              height={0}
              quality={100}
              className='h-auto '
            />
          </div>
        </Link>
      </div>
    )
    }

    return (
    <div className='w-full flex flex-row justify-center overflow-x-scroll scroll-smooth scrollbar-hide'>
      <ArrowLeftCircleIcon onClick={slideLeft} className='hidden p-2 m-10 left-0 h-16 w-16 text-slate-50 absolute z-10 opacity-50 hover:opacity-100 hover:cursor-pointer group-hover:block' />
      <div id={'slider' + listName} className='max-w-[100vw] my-4 flex flex-shrink-0 overflow-x-scroll scroll-smooth whitespace-nowrap text-white scrollbar-hide relative'>
        {filteredMovies.map((movie:Movie) => (<MovieCard key={movie.id} {...movie}/>))}     
      </div> 
      <ArrowRightCircleIcon onClick={slideRight} className='hidden p-2 m-10 right-0 h-16 w-16 text-slate-50 absolute z-10 opacity-50 hover:opacity-100 hover:cursor-pointer group-hover:block' />   
    </div>
    )
}

export default MovieRow