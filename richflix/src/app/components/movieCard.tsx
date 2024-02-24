import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



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

export default MovieCard