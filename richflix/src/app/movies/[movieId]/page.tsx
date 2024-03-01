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
    const backdropPath: string = movie.backdrop_path;
    const altTag: string =  movie.title ? movie.title : "Movie Poster Image";
    const description = movie?.overview??"";
    const genres = Object.values(movie.genres);
    const genresName = genres.map(genre => genre.name);
    const backdrop: string = `https://image.tmdb.org/t/p/w1280${backdropPath}`;

  // fetch movie === movie.id from movieDB API

  // data === response.data
  // return data - destructure {image, cast, description}
  const posterUrl = `http://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`;
    return (
    <div className='flex flex-col justify-center items-center'>
      <Image 
        src={backdrop} 
        alt={altTag} 
        quality={100}
        sizes="100vw"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: '50% 10%',
        }}
        className='-z-10 brightness-[.25] grayscale '
        priority={true}
      />
      <div className='flex flex-col lg:flex-row items-center justify-center mt-16 w-full'>
        <div className='m-2'> 
          <Image 
            src={posterUrl}
            alt={altTag}
            width={200} 
            height={0}
            quality={100} 
            className='h-auto'
          />
        </div>
        <div className='w-full lg:w-1/3 m-2'>
          <h1 className='m-4 text-3xl border-b-2 text-center border-red-600 tracking-widest p-1'>{movie.title}</h1>
          <p className='m-4 my-6 text-lg leading-6'>{description}</p>
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center m-4 '>
        {genresName.map(genre => (<p className='text-lg my-4 mx-2'>{genre}</p>))}
      </div>
    </div>
  )
}
