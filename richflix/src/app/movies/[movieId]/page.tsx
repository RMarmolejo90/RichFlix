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
    const description = movie?.overview??"";
    const genres = Object.values(movie.genres);
    const genresName = genres.map(genre => genre.name);

  // fetch movie === movie.id from movieDB API

  // data === response.data
  // return data - destructure {image, cast, description}
  const posterUrl = `http://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`;
  console.log(genres);
  console.log(genresName);
    return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col lg:flex-row items-center justify-center mt-16 w-full'>
        <div className='m-2'> 
          <Image 
            src={posterUrl}
            alt={altTag}
            width={200} 
            height={200}
            quality={100} 
          />
        </div>
        <div className='w-full lg:w-1/3 m-2'>
          <h1 className='m-4 text-3xl border-b-2 text-center border-red-600 tracking-widest p-1'>{movie.title}</h1>
          <p className='m-4 my-6 text-md leading-6'>{description}</p>
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center m-4'>
        {genresName.map(genre => (<p className='text-lg my-4 mx-2'>{genre}</p>))}
      </div>
    </div>
  )
}
