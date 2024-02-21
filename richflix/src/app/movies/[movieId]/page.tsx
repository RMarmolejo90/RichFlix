import React from 'react'
import fetchMovieDetails from '@/app/_utils/fetchMovieDetails';
import Image from 'next/image';


type Params = {
  params: {
    movieId: string;
  }
}

export default async function page({ params: { movieId } }: Params) {

    const movie = await fetchMovieDetails(movieId);
    const posterSize: string =  "w780"; 
    const altTag: string =  movie.title ? movie.title : "Movie Poster Image";
  // fetch movie === movie.id from movieDB API

  // data === response.data
  // return data - destructure {image, cast, description}
  const posterUrl = `http://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`;

  return (
    <>
    <div className='flex flex-col items-center mt-14'> 
      <Image 
        src={posterUrl}
        alt={altTag}
        width={200} 
        height={200}
        quality={100} 
      />
      <h1 className='m-4 text-3xl'>{movie.title}</h1>
    </div>
        {/* cast */}
        {/* description */}
  </>
  )
}
