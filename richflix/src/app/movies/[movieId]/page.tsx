import React from 'react'
import fetchMovieDetails from '@/app/_utils/fetchMovieDetails';

type Params = {
  params: {
    movieId: string;
  }
}

export default async function page({ params: { movieId } }: Params) {

  const id = movieId
  const response = await fetchMovieDetails(movieId);
  
  // fetch movie === movie.id from movieDB API

  // data === response.data
  // return data - destructure {image, cast, description}

  return (
    <div> 
        {/* image */}
        {/* cast */}
        {/* description */}
    </div>
  )
}
